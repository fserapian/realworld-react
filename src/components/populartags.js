import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const PopularTags = () => {
  const [{ isLoading, response, error }, doFetch] = useFetch('tags');

  useEffect(() => {
    doFetch();
  }, []);

  return (
    <ul>
      {isLoading && <h2>Loading....</h2>}
      {error && <h2>Something went wrong</h2>}
      {response && response.tags.map((tag) => {
        return (
          <div key={tag}>{tag}</div>
        );
      })}
    </ul>
  );
};

export default PopularTags;
