import React, { useState, useContext } from 'react';
import { AccountContext } from '../account/account.store';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function SignInForm() {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFailure, setOpenFailure] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);
  
  const handleClick = () => {
    setOpenLoading(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenFailure(false);
    setOpenLoading(false);
    setOpenSuccess(false);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { authenticate } = useContext(AccountContext);

  const onSubmit = event => {
    event.preventDefault();

    authenticate(email, password)
      .then(data => {
        console.log('Logged in!', data);
        setOpenFailure(false);
        setOpenSuccess(true);
        setTimeout(() => {
          window.location.href("/");
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to login!', err);
        setOpenLoading(false);
        setOpenFailure(true);
      })
  };

  return (
    <Box py={3}>
      <Box component="form" onSubmit={onSubmit} autoComplete="off" sx={{
        '& .MuiTextField-root': { mx: 1 },
        textAlign: 'center'
      }}>
        {/* <input
          value={email}
          onChange={event => setEmail(event.target.value)}
        /> */}
        <TextField 
          required
          value={email}
          onChange={event => setEmail(event.target.value)} 
          label="Email"
        />
        {/* <input
          value={password}
          onChange={event => setPassword(event.target.value)}
        /> */}
        <TextField 
          required
          value={password}
          onChange={event => setPassword(event.target.value)}
          label="Password"
          type="password"
        />

        <Box mt={2} sx={{ textAlign: 'center' }}>
          <Button type='submit' onClick={handleClick} variant="contained">Login</Button>
        </Box>
      </Box>

      <Snackbar open={openLoading} onClose={handleClose} >
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          Logging in ...
        </Alert>
      </Snackbar>

      <Snackbar open={openSuccess} autoHideDuration={5000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Login Success! Redirecting...
        </Alert>
      </Snackbar>
      <Snackbar open={openFailure} autoHideDuration={5000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Login Failed! Incorrect Email/Password.
        </Alert>
      </Snackbar>
      
    </Box>
  );
};

export default SignInForm;