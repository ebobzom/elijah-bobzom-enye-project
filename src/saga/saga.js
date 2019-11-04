import { put, takeEvery, take, fork, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from 'firebase';
import axios from 'axios';

const postUsers = (detail) => {
  axios.post('https://us-central1-elijah-enye-challenge-3.cloudfunctions.net/addNewUser/', detail)
  .then(data => data)
  .catch(e => console.log(e))
}


function* fetchUserSaga(action){
  try{
      yield call(postUsers, action.user);
  }catch(e){
      yield put({type: 'ERROR', value: e})
  }
  
}

function* startListener() {
  const channel = new eventChannel(emiter => {
    const listener = firebase.database().ref("Users").on("value", snapshot => {
      emiter({ data: snapshot.val() || {} });
    });
    return () => {
      listener.off();
    };
  });

  while (true) {
    const { data } = yield take(channel);
    yield put({type: 'DBUSERS', values: data});
  }
}


function* users(){
  yield takeEvery('ADD_USER', fetchUserSaga)
}
 
export default function* root() {
  yield fork(users);
  yield fork(startListener);
}
  