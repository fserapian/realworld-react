import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';

import RoutePaths from './routes';
import Topbar from './components/topbar';
import { CurrentUserProvider } from './contexts/currentUser';

const App = () => {
  return (
    <CurrentUserProvider>
      <Router>
        <Topbar />
        <RoutePaths />
      </Router>
    </CurrentUserProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
