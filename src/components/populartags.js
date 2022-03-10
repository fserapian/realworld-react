import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PopularTags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/tags')
      .then((res) => {
        console.log('res', res.data.tags);
        setTags(res.data.tags);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);

  return (
    <ul>
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
};

export default PopularTags;
