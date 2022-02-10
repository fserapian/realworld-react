import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import RoutePaths from './routes';
import Topbar from './components/topbar';

const App = () => {
  return (
    <Router>
      <Topbar />
      <RoutePaths />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
