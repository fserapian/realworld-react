import { useState, useEffect } from 'react';
import axios from 'axios';

export default (url) => {
  const baseUrl = 'http://localhost:3000/api';

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const doFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    axios(`${baseUrl}/${url}`, options)
      .then((res) => {
        setIsLoading(false);
        console.log('res', res);
        setResponse(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log('err', err);
        setError(err.response.data);
      });
  }, [isLoading]);

  return [{ isLoading, response, error }, doFetch];
};
