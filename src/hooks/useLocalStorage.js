import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue = '') => {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem((key))) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
