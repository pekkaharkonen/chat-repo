import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Rooms from './components/pages/rooms/Rooms';

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
          <Rooms />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
