import { Routes, Route } from 'react-router-dom';

import GlobalFeed from './pages/globalFeed';
import Article from './pages/article';

const RoutePaths = () => {
  return (
    <Routes>
      <Route path="/" element={<GlobalFeed />} />
      <Route path="/articles/:slug" element={<Article />} />
    </Routes>
  );
};

export default RoutePaths;
