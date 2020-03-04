import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route
            exact
            path='/mallipath'
            render={routerProps => {
              <Komponentti {...routerProps} yksipropsi={yksipropsi} />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
