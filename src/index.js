import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCFn0vDb6Jj_tkldfJs5BNtNBQXsFx9j70",
  authDomain: "elsa-gestoria.firebaseapp.com",
  projectId: "elsa-gestoria",
  storageBucket: "elsa-gestoria.appspot.com",
  messagingSenderId: "549843766739",
  appId: "1:549843766739:web:625aed37d110f381077326",
  measurementId: "G-9BKVJ7K7HE"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
