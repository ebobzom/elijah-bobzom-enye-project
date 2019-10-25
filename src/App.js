import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import UserTable from './components/Table';
import './App.css';

class App extends React.Component {
 state = {
   users: []
 };

 handelState = (val) => this.setState({users: [...this.state.users, val]})
 render(){
  return (
      <div className="App">
        <Switch>
          <Route exact path='/create' render = { ({history}) => (
            <CreateUser handelState={this.handelState} history={history} />
          )} />

          <Route path='*' render={ () => (
            <UserTable users={this.state.users} />
          )} />
        </Switch>
      </div>
    );
 }
  
}

export default App;
