import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

// Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

// Import containers
import Settings from './containers/Settings';
import Profile from './containers/Profile';
import Dashboard from './containers/Dashboard';

// Import components
import BaseLayout from './components/BaseLayout';
import Search from './components/Search'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './components/AdminDashboard';
import ViewMeet from './components/ViewMeet';


// Import data
// import meets from './data/meets'

// Create store for redux and apply middleware
// Check for Chrome before including Redux DevTools extension
let store;
if (window.navigator.userAgent.includes('Chrome')) {
  store = createStore(
    reducers,
    compose(
      applyMiddleware(reduxThunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(
    reducers,
    compose(
      applyMiddleware(reduxThunk)
    )
  );
}
// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/search" component={Search} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/settings" component={Settings} />
          <Route path="/meet/:meetId" component={ViewMeet} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route path="/:username" component={Profile} />

        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
