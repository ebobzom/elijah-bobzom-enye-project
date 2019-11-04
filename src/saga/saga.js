import { put, takeEvery, fork, call } from 'redux-saga/effects';
import axios from 'axios';

const postUsers = (detail) => {
  axios.post('https://us-central1-elijah-enye-challenge-3.cloudfunctions.net/addNewUser/', detail)
  .then(data => data)
  .catch(e => console.log(e))
}


function* fetchUserSaga(action){
  try{
      yield call(postUsers, action.user);
      let ans = yield axios.get('https://us-central1-elijah-enye-challenge-3.cloudfunctions.net/addNewUser/')
      yield put({type: 'DBUSERS', values: ans.data})

  }catch(e){
      yield put({type: 'ERROR', value: e})
  }
  
}

function* users(){
  yield takeEvery('ADD_USER', fetchUserSaga)
}
 
export default function* root() {
  yield fork(users);
}
  