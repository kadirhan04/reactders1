import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// app birleşenine yazdiğimizkodların htmlın hangi kısmının ekrana basılacagını belirtir
const root = ReactDOM.createRoot(document.getElementById('root'));
//app birleşkenini root kısmına aktarir
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
