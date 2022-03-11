import React, { useEffect } from 'react';

import useFetch from '../hooks/useFetch';
import ErrorMessage from './errorMessage';
import Loading from './loading';

const PopularTags = () => {
  const [{ isLoading, response, error }, doFetch] = useFetch('tags');

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <ul>
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
      {response && response.tags.map((tag) => {
        return (
          <div key={tag}>{tag}</div>
        );
      })}
    </ul>
  );
};

export default PopularTags;
