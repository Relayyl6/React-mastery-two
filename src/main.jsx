import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
// import GlobalState from './'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <GlobalState>
  // </GlobalState>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);