import React, { useEffect } from 'react';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startChecking } from '../actions/auth';
import { useSelector } from 'react-redux';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <h1>Cargando...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/auth"
            component={LoginScreen}
            isLogged={!!uid}
          />
          <PrivateRoute
            exact
            path="/"
            component={CalendarScreen}
            isLogged={!!uid}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
