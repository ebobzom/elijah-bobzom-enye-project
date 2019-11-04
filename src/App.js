import React from 'react';
import firebase from 'firebase/app';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import UserTable from './components/Table';
import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyCRyeeNPMZkEsxSYGN0q4cW6c0c3awRzC4",
  authDomain: "elijah-enye-challenge-3.firebaseapp.com",
  databaseURL: "https://elijah-enye-challenge-3.firebaseio.com",
  projectId: "elijah-enye-challenge-3",
  storageBucket: "elijah-enye-challenge-3.appspot.com",
  messagingSenderId: "32024633259",
  appId: "1:32024633259:web:554d5a802730592d4e3cee",
  measurementId: "G-46Z83HK5W4"
};

firebase.initializeApp(firebaseConfig)

const App = () => {
  
  const users = useSelector( state => state.users)
  const err = useSelector( state => state.error)
  return (
      <div className="App">
        <Switch>
          <Route exact path='/create' render = { ({history}) => (
            <CreateUser history={history} />
          )} />

          <Route path='*' render={ () => (
            <UserTable users={users} />
          )} />
        </Switch>
        { err && <p>An error ocurred</p>}
      </div>
    );
}

export default App;
