import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { URL_LIST } from './constants';

localStorage.setItem("url", URL_LIST);

ReactDOM.render(<App />, document.getElementById('root'));
