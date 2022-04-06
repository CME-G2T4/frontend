import React, { useState, useContext } from 'react';
import { AccountContext } from '../components/account/account.store';
import axios from 'axios';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

import './pages.styles.scss';
import TrackingDetails from '../components/trackingDetails/trackingDetails.component.jsx';


function Tracking() {

  const [openLoading, setOpenLoading] = useState(false);
  const [openFailure, setOpenFailure] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  const isNumeric = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  const handleClick = () => {
    setOpenFailure(false);
    setOpenSuccess(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenFailure(false);
    setOpenLoading(false);
    setOpenSuccess(false);
  };

  const [trackingNumber, setTrackingNumber] = useState('');
  const [show, setShow] = useState(false);
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const { api_link } = useContext(AccountContext);

  const onSubmit = event => {
    event.preventDefault();
    setOrderDetails([]);

    setOpenLoading(true);
    setLoading(true);

    if (trackingNumber.trim() === '' || !isNumeric(trackingNumber)) {
      setOpenLoading(false);
      setOpenFailure(true);
      setOpenSuccess(false);
      setShow(false);
      setLoading(false);
      return;
    }

    axios.get(api_link + `/orders/` + trackingNumber)
      .then(res => {
        const orderDetail = res.data.data; 
        setOrderDetails(orderDetail);
        setShow(true);
        setOpenLoading(false);
        setOpenFailure(false);
        setOpenSuccess(true);
      })
      .catch(err => {
        setOpenLoading(false);
        setOpenFailure(true);
        setShow(false);
        setOpenSuccess(false);
      })

      setLoading(false);
  };

  return (
    <Container maxWidth="lg">
      <Box my={3}>
        <Box className="header" mb={3}>
          Track Your Parcel Today!
        </Box>
        <Box mb={3} display='flex' justifyContent='center' alignItems='center'>
          <form onSubmit={onSubmit}>
            <Box mb={2} style={{ textAlign: 'center', minWidth: '350px', width: '50%' }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Enter parcel tracking ID"
                onChange={e => setTrackingNumber(e.target.value)}
              />
            </Box>
            {
              loading ?
              <Box mt={5} sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>
              :
              <Box>
                <Button 
                  className="fat-button" 
                  variant="contained" 
                  type='submit' 
                  size='large' 
                  endIcon={<SearchIcon />}
                  onClick={handleClick}
                >
                  Track Parcel
                </Button>
              </Box>
            }
            
          </form>
        </Box>
        {
          show ?
            <Box>
              <Paper elevation={3}>
                <TrackingDetails orderDetails={orderDetails} />
              </Paper>
            </Box>
          : null
        }

        <Snackbar open={openLoading} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
            Tracking ...
          </Alert>
        </Snackbar>
        <Snackbar open={openSuccess} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Parcel Tracked!
          </Alert>
        </Snackbar>
        <Snackbar open={openFailure} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Invalid Tracking Number
          </Alert>
        </Snackbar>

      </Box>
    </Container>
  )
}

export default Tracking;