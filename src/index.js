import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Header from './views/header'


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
