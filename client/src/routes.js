import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PageNotFound from './components/pages/page-not-found';

import HomePage from './components/pages/home-page';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Dashboard from './components/dashboard';
import RequireAuth from './components/auth/require-auth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="register" component={Register} />
    <Route path="login" component={Login} />
    <Route path="dashboard" component={RequireAuth(Dashboard)} />

    <Route path="*" component={PageNotFound} />
  </Route>
);
