import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../Auth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isAuth, setIsAuth] = useState(undefined);
  useEffect(() => {
    async function checkAuth() {
      let bool = await Auth.isAuth();
      setIsAuth(bool);
    }
    checkAuth();
  }, []);
  if (isAuth) {
    return (
      <Route
        {...rest}
        render={props => {
          return <Component {...props} />;
        }}
      ></Route>
    );
  }
  if (isAuth === false) {
    try {
      localStorage.removeItem('token');
    } catch (err) {
      console.error(err);
    }
    return (
      <Route
        {...rest}
        render={props => {
          return <Redirect to='/login' />;
        }}
      ></Route>
    );
  }
  if (isAuth === undefined) {
    return null;
  }
};

export default ProtectedRoute;
