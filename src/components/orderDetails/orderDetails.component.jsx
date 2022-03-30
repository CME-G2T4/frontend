import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AccountContext } from '../account/account.store';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

// import './orderDetails.styles.scss';

function OrderDetails({ details }) {

  const { api_link } = useContext(AccountContext);

  const [openLoading, setOpenLoading] = useState(false);
  const [openFailure, setOpenFailure] = useState(false);
  const [failureMessage, setFailureMessage] = useState('Order not found!');
  const [openSuccess, setOpenSuccess] = useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenFailure(false);
    setOpenLoading(false);
  };

  const handleClick = () => {
    setOpenLoading(true);

    var bodyFormData = new FormData();
    bodyFormData.append('new_status', orderStatus);
    const headers = { 
      "Content-Type": "multipart/form-data"
    };

    axios.put(api_link + `/orders/` + details.tracking_no, bodyFormData, headers)
      .then(res => {
        setOpenLoading(false);
        setOpenSuccess(true);

        setTimeout(() => {
          window.location.reload(false);
        }, 1000)
      })
      .catch(err => {
        setOpenLoading(false);
        setOpenFailure(true);
        setFailureMessage('An error occurred while updating order status.');
      })
  };

  const [orderStatus, setOrderStatus] = useState('Pending');
  
  const handleChange = (event) => {
    setOrderStatus(event.target.value);
  }

  useEffect(() => {
    setOrderStatus(details.order_status);
  }, [details])

  return (
    <>
      <Paper elevation={5} >
        <Box p={3}>
          <Box mb={2}>
            <span className="trackingHeader"><b>Tracking Number:</b> { details.tracking_no } </span>
          </Box>
          <Box mb={2} className="trackingDetails">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <span className="trackingTitle">Customer Name:</span>
              </Grid>
              <Grid item xs={12} sm={6}>
                <span className="trackingDesc">{ details.customer_name }</span>
              </Grid>
              <Grid item xs={12} sm={6}>
                <span className="trackingTitle">Order Status:</span>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={orderStatus}
                    label="OrderStatus"
                    onChange={handleChange}
                  >
                    <MenuItem value={'Delivered'}>Delivered</MenuItem>
                    <MenuItem value={'Pending'}>Pending</MenuItem>
                    <MenuItem value={'Stored in Warehouse'}>Stored in Warehouse</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <span className="trackingTitle">Estimated Delivery Date:</span>
              </Grid>
              <Grid item xs={12} sm={6}>
                <span className="trackingDesc">{ details.delivery_date }</span>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
      <Box mt={3}>
        <Button 
          className='fat-button'
          variant="contained" 
          onClick={handleClick} 
          size='large' 
          >Update</Button>
      </Box>

      <Snackbar open={openLoading} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          Retrieving ...
        </Alert>
      </Snackbar>
      <Snackbar open={openFailure} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          { failureMessage }
        </Alert>
      </Snackbar>
      <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Order Status Updated! Refreshing...
        </Alert>
      </Snackbar>
    </>
  )
}

export default OrderDetails;