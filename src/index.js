import React from 'react';
import ReactDOM from 'react-dom/client';
import CreateNew from './CreateNew';
import './index.css';
import LoginSuccess from './LoginSuccess';
import MainLogIn from './MainLogIn';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainLogIn/>
    {/* <LoginSuccess id="12345" password="12345"/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
