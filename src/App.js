import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import UserTable from './components/Table';
import './App.css';

const App = () => {
  
  const users = useSelector( state => state.users)
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
      </div>
    );
}

export default App;
