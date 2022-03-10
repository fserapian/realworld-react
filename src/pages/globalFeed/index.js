import React, { useEffect } from 'react';

import Feed from '../../components/feed';
import useFetch from '../../hooks/useFetch';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useLocation, useMatch } from 'react-router-dom';
import PaginationList from '../../components/paginationList';
import { getPaginator, limit } from '../../utils';
import { stringify } from 'query-string';

const GlobalFeed = () => {
  const location = useLocation();
  let match = useMatch('/');
  const { currentPage, offset } = getPaginator(location.search);
  const strigifiedParams = stringify({
    limit,
    offset,
  });
  const apiUrl = `articles?${strigifiedParams}`;
  const [{ isLoading, response, error }, doFetch] = useFetch(apiUrl);
  const currentUrl = match.pathname;
  
  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {isLoading && <Box>Loading...</Box>}
          {error && <Box>Something went wrong!</Box>}
          {!isLoading && response && (
            <>
              <Feed articles={response.articles} />
              <PaginationList total={response.articlesCount} limit={limit} url={currentUrl} currentPage={currentPage} />
            </>
          )}
        </Grid>
        <Grid item xs={4}>
          <div>Popular tags</div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GlobalFeed;
