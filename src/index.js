import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './globalStyles'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
