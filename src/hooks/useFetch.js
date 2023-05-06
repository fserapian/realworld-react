import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import useLocalStorage from './useLocalStorage';

export default (url) => {
  const baseUrl = 'http://localhost:3000/api';

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);
  const [token] = useLocalStorage('token');

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const requestOptions = {
      ...options,
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    };

    axios(`${baseUrl}/${url}`, requestOptions)
      .then((res) => {
        setIsLoading(false);
        setResponse(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data);
      });
  }, [isLoading, url, options, token]);

  return [{ isLoading, response, error }, doFetch];
};
