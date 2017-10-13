import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import BaseLayout from './components/BaseLayout';
import registerServiceWorker from './registerServiceWorker';

import Login from './components/Login';

ReactDOM.render(
  <BaseLayout>
    <Login />
  </BaseLayout>
  , document.getElementById('root'));
registerServiceWorker();
