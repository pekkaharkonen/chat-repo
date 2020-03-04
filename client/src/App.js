import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Room from './components/pages/rooms/room/RoomView';
import RoomView from './components/pages/rooms/room/RoomView';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          {/* <Route
            exact
            path='/mallipath'
            render={routerProps => {
              <Komponentti {...routerProps} yksipropsi={yksipropsi} />;
            }}
          /> */}
          <Route
          exact
          path = "/"
          component = {RoomView}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
