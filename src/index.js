import React from 'react';
import { Web3ReactProvider } from '@web3-react/core'
import ReactDOM from 'react-dom';
// import './index.css';
import './assets/css/bootstrap.min.css';
import './assets/scss/style.css';
import './assets/css/slick.css';
import './assets/css/slick-theme.css';
import './assets/css/aos.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import getLibrary from './util/getLibrary';

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
