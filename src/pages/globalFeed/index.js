import React, { useEffect } from 'react';

import Feed from '../../components/feed';
import useFetch from '../../hooks/useFetch';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const GlobalFeed = () => {
  const apiUrl = 'articles?limit=10&offset=0';
  const [{ isLoading, response, error }, doFetch] = useFetch(apiUrl);

  console.log('res', isLoading, response, error);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {isLoading && <Box>Loading...</Box>}
          {error && <Box>Something went wrong!</Box>}
          {!isLoading && response && <Feed articles={response.articles} />}
        </Grid>
        <Grid item xs={4}>
          <div>Popular tags</div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GlobalFeed;
