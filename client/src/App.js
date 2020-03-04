import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Landing from './components/pages/landing/Landing';
import Login from './components/pages/login/landing/Login';
import Register from './components/pages/landing/Register';
import Rooms from './components/pages/rooms/Rooms';
import Room from './components/pages/rooms/room/Room';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/rooms/:name' component={Room} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
