import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import './trackingDetails.styles.scss';

function TrackingDetails({ orderDetails }) {

  return (
    <Box p={3}>
      <Box mb={2}>
        <span className="trackingHeader"><b>Tracking Number:</b> { orderDetails.tracking_no } </span>
      </Box>
      <Box className="trackingDetails">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <span className="trackingTitle">Customer Name:</span>
          </Grid>
          <Grid item xs={12} sm={6}>
            <span className="trackingDesc">{ orderDetails.customer_name }</span>
          </Grid>
          <Grid item xs={12} sm={6}>
            <span className="trackingTitle">Order Status:</span>
          </Grid>
          <Grid item xs={12} sm={6}>
            <span className="trackingDesc">{ orderDetails.order_status }</span>
          </Grid>
          <Grid item xs={12} sm={6}>
            <span className="trackingTitle">Estimated Delivery Date:</span>
          </Grid>
          <Grid item xs={12} sm={6}>
            <span className="trackingDesc">{ orderDetails.delivery_date }</span>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default TrackingDetails;