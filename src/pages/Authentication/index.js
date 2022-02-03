import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    console.log('values', email, password);
  };

  useEffect(() => {
    if (!isSubmitting) {
      return;
    }

    console.log('Effect!');

    axios.post('http://localhost:3000/api/users/login', {
      user: {
        email: 'fadi@email.com',
        password: 'somepassword',
      },
    })
      .then((res) => {
        setIsSubmitting(false);
        console.log('res', res);
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.log('err', err);
      });

    document.title = email;
  });

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      sx={{ mt: 4 }}
    >
      <Typography component="h2" variant="h2">
        Sign in
      </Typography>
      <Box component="form" sx={{ mt: 3, width: 500 }} onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
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
          disabled={isSubmitting}
        >
          Login
        </Button>
      </Box>
    </Grid>
  );
}

export default Authentication;
