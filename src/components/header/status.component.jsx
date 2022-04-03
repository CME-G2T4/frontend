import React, { useState, useContext, useEffect } from 'react';

import { AccountContext } from '../account/account.store';
import Button from '@mui/material/Button';

function Status(props) {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession()
      .then(session => {
        // console.log('Session:', session);
        setStatus(true);
      })
  })
  
  return (
    <div>
      { status ? (
        <div>
          <Button variant="contained" color="error" onClick={logout} component="a" href="/">LOGOUT</Button>
        </div>
      ) : <Button variant="contained" component="a" href="/login">LOGIN</Button> }
    </div>
  );
};

export default Status;