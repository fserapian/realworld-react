import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import useFetch from '../../hooks/useFetch';
import useLocalStorage from '../../hooks/useLocalStorage';

const Authentication = ({ auth }) => {
  const isLogin = auth === 'login';
  const title = isLogin ? 'Sign in' : 'Sign up';
  const titleText = isLogin ? 'Need an account?' : 'Have an account?';
  const titleLink = isLogin ? '/register' : '/login';
  const apiUrl = isLogin ? 'users/login' : 'users';

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false);
  const [{ isLoading, response }, doFetch] = useFetch(apiUrl);
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  console.log('token', token);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = isLogin
      ? { email, password }
      : { username, email, password };

    doFetch({
      method: 'POST',
      data: {
        user,
      },
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }

    setToken(response.user.token);
    setIsSuccessfulSubmit(true);
  }, [response]);

  if (isSuccessfulSubmit) {
    console.log('redirecting...');
    navigate('/');
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      sx={{ mt: 4 }}
    >
      <Typography component="h2" variant="h2">
        {title}
      </Typography>
      <Typography component="p" variant="p">
        <Link to={titleLink}>{titleText}</Link>
      </Typography>
      <Box component="form" sx={{ mt: 3, width: 500 }} onSubmit={handleSubmit}>
        <Stack spacing={2}>
          {!isLogin && (
            <TextField
              type="text"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <TextField
            type="text"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>
        <Button
          variant="contained"
          disableElevation
          size="large"
          sx={{ mt: 3 }}
          type="submit"
          disabled={isLoading}
        >
          {title}
        </Button>
      </Box>
    </Grid>
  );
};

export default Authentication;
