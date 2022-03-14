import React, { useEffect } from 'react';
import { useLocation, useMatch } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { stringify } from 'query-string';

import Feed from '../../components/feed';
import useFetch from '../../hooks/useFetch';
import PaginationList from '../../components/paginationList';
import PopularTags from '../../components/popularTags';
import { getPaginator, limit } from '../../utils';
import Loading from '../../components/loading';
import ErrorMessage from '../../components/errorMessage';
import FeedToggler from '../../components/feedToggler';

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
          <FeedToggler />
          {isLoading && <Loading />}
          {error && <ErrorMessage />}
          {!isLoading && response && (
            <>
              <Feed articles={response.articles} />
              <PaginationList total={response.articlesCount} limit={limit} url={currentUrl} currentPage={currentPage} />
            </>
          )}
        </Grid>
        <Grid item xs={4}>
          <PopularTags />
        </Grid>
      </Grid>
    </Container>
  );
};

export default GlobalFeed;
