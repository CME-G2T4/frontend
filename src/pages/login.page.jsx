import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import SignInForm from '../components/signinform/signinform.component';
import './pages.styles.scss';

function Login() {

  return (
    <Container maxWidth="sm">
      <Box my={3}>
        <Box mb={3} className="header">Staff Login</Box>
        <Paper elevation={5}>
          <SignInForm />
        </Paper>
      </Box>
    </Container>
  )
}

export default Login;