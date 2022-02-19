import React from 'react';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';

const BackendErrorMessages = ({ errorMessages }) => {
  return (
    <Alert severity="error" sx={{ mt: 2 }}>
      <AlertTitle>Incorrect data provided</AlertTitle>
      <ul style={{ padding: 0 }}>
        {errorMessages && errorMessages.map((msg) => (
          <li key={msg} style={{ listStyle: 'none', marginBottom: '5px' }}>{msg}</li>
        ))}
      </ul>
    </Alert>
  );
};

export default BackendErrorMessages;
