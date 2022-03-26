import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import './pages.styles.scss';
import TrackingDetails from '../components/trackingDetails/trackingDetails.component.jsx';

function Tracking() {

  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    setShow(true);
  };

  return (
    <Container maxWidth="lg">
      <Box my={3}>
        <Box className="header" mb={3}>Track Your Parcel Today!</Box>
        <Box mb={3} display='flex' justifyContent='center' alignItems='center'>
          <form onSubmit={onSubmit}>
            <Box mb={2} style={{ textAlign: 'center', minWidth: '350px', width: '50%' }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Enter parcel tracking ID"
                onChange={e => setSearch(e.target.value)}
              />
            </Box>
            <Box>
              <Button 
                className="fat-button" 
                variant="contained" 
                type='submit' 
                size='large' 
                endIcon={<SearchIcon />}
              >
                Track Parcel
              </Button>
            </Box>
          </form>
        </Box>
        {
          show ?
            <Box>
            <Paper elevation={3}>
              <TrackingDetails search={search} />
            </Paper>
          </Box>
          : null
        }
      </Box>
    </Container>
  )
}

export default Tracking;