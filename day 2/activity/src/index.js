import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assests/Css/Style.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Form from './Components/Form';
import Icons from './Components/Icons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Icons />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
