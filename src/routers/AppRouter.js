import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HospitalDashboardPage from '../components/HospitalDashboardPage';
import ExperienceDashboardPage from '../components/ExperienceDashboardPage';
import PdonorDashboardPage from '../components/PdonorDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ProfilePage from '../components/ProfilePage';
import FaqPage from '../components/FaqPage';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={HospitalDashboardPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <PrivateRoute path="/experience" component={ExperienceDashboardPage} />
        <PrivateRoute path="/pdonor" component={PdonorDashboardPage} />
        <PrivateRoute path="/faq" component={FaqPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
