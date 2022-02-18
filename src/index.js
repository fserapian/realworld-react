import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';

import RoutePaths from './routes';
import Topbar from './components/topbar';
import { CurrentUserProvider } from './contexts/currentUser';
import CurrentUserChecker from './components/currentUserChecker';

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <Topbar />
          <RoutePaths />
        </Router>
      </CurrentUserChecker>
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
