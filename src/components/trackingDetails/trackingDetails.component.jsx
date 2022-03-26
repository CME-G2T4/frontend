import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import './trackingDetails.styles.scss';

function TrackingDetails({ search }) {

  // const [error, setError ] = useState(false);

  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const persons = res.data;
  //     })
  // }, [search])
  
  return (
    <Box p={3}>
      <Box mb={2}>
        <span className="trackingHeader"><b>Tracking Information:</b> #1-767</span>
      </Box>
      <Box className="trackingDetails">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <span className="trackingTitle">Customer Name:</span>
          </Grid>
          <Grid item xs={12} sm={6}>
            <span className="trackingDesc">Bob Dylan</span>
          </Grid>
          <Grid item xs={12} sm={6}>
            <span className="trackingTitle">Order Status:</span>
          </Grid>
          <Grid item xs={12} sm={6}>
            <span className="trackingDesc">Moving</span>
          </Grid>
          <Grid item xs={12} sm={6}>
            <span className="trackingTitle">Estimated Delivery Date:</span>
          </Grid>
          <Grid item xs={12} sm={6}>
            <span className="trackingDesc">04/04/2022</span>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default TrackingDetails;