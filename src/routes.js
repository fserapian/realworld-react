import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalFeed from './pages/globalFeed';
import Article from './pages/article';
import Authentication from './pages/Authentication';

const RoutePaths = () => {
  return (
    <Routes>
      <Route path="/" element={<GlobalFeed />} />
      <Route path="/articles/:slug" element={<Article />} />
      <Route path="/login" element={<Authentication name="login" />} />
      <Route path="/register" element={<Authentication name="register" />} component={Authentication} />
    </Routes>
  );
};

export default RoutePaths;
