import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import RoutePaths from './routes';
import Topbar from './components/topbar';

const App = () => {
  return (
    <div className="App">
      <h3>Welcome to the app</h3>
      <Router>
        <Topbar />
        <RoutePaths />
      </Router>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
