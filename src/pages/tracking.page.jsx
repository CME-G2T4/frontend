import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import TrackingDetails from '../components/trackingDetails/trackingDetails.component.jsx';

function Tracking() {

  return (
    <Container maxWidth="lg">
      <Box my={3}>
        <Paper elevation={3}>
          <TrackingDetails />
        </Paper>
      </Box>
    </Container>
  )
}

export default Tracking;