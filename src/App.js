import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Global from './styles/global';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Global />
    </Router>
  );
}

export default App;
