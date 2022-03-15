import React, { useEffect } from 'react';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import useFetch from '../hooks/useFetch';
import ErrorMessage from './errorMessage';
import Loading from './loading';

const PopularTags = () => {
  const [{ isLoading, response, error }, doFetch] = useFetch('tags');

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  if (isLoading || !response) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <Paper style={{ padding: '1rem' }}>
      <Typography variant="h5" style={{ marginBottom: '0.5rem' }}>Popular Tags</Typography>
      <Box>
        {response.tags.map((tag) => (
          <Link to={`/tags/${tag}`} key={tag} style={{ textDecoration: 'none' }}>
            <Chip label={tag} style={{ margin: '0.3rem', cursor: 'pointer' }} />
          </Link>
        ))}
      </Box>
    </Paper>
  );
};

export default PopularTags;
