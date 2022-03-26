import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import SignInForm from '../components/signinform/signinform.component';

function Login() {

  return (
    <Container maxWidth="lg">
      <Box my={3}>
        <Paper elevation={3}>
          <SignInForm />
        </Paper>
      </Box>
    </Container>
  )
}

export default Login;