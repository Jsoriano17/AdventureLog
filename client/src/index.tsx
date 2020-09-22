import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/layout/App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
