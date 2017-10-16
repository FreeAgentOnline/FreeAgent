import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/index.css';
import BaseLayout from './components/BaseLayout';
import registerServiceWorker from './registerServiceWorker';
import Search from './components/Search'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
      <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/search" component={Search} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
