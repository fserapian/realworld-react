import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalFeed from './pages/globalFeed';
import TagFeed from './pages/tagFeed';
import Article from './pages/article';
import Authentication from './pages/Authentication';

const RoutePaths = () => {
  return (
    <Routes>
      <Route path="/" element={<GlobalFeed />} />
      <Route path="/tags/:slug" element={<TagFeed />} />
      <Route path="/articles/:slug" element={<Article />} />
      <Route path="/login" element={<Authentication auth="login" />} />
      <Route path="/register" element={<Authentication auth="register" />} component={Authentication} />
    </Routes>
  );
};

export default RoutePaths;
