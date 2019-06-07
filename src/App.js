import React from 'react';

import Routes from './routes';
import { URL_LIST } from './constants';

localStorage.setItem("url", URL_LIST);

const App = () => (
  <Routes />
);

export default App;
