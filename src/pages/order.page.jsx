import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../components/account/account.store';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import './pages.styles.scss';
import OrderDetails from '../components/orderDetails/orderDetails.component';

function Order() {

  let { trackingNumber } = useParams();
  const { getSession, api_link } = useContext(AccountContext);
  const navigate = useNavigate();

  const [status, setStatus] = useState(false);
  const [openLoading, setOpenLoading] = useState(true);
  const [openFailure, setOpenFailure] = useState(false);
  const [show, setShow] = useState(false);

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

  const [details, setDetails] = useState([]);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    getSession()
      .then(session => {
        setStatus(true);
        axios.get(api_link + `/orders/` + trackingNumber)
          .then(res => {
            const orderDetail = res.data.data; 
            
            setDetails(orderDetail);
            setOpenLoading(false);
            setShow(true);
          })
          .catch(err => {
            setOpenLoading(false);
            setOpenFailure(true);
          })
      })
      .catch(err => {
        setOpenLoading(false);
        setShow(false);
        setTimeout(() =>{
          navigate("/")
        }, 5000)
        setTimeout(() => {
          let current = timer - 1
          setTimer(current);
        }, 1000)
      })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="sm">
      <Box my={3}>
        {
          status ? 
            <>
              <Box mb={3} className="header">Order Details</Box>
              {
                show ?
                  <OrderDetails details={details} />
                :
                  openLoading ?
                    <Paper elevation={5}>
                      <Box p={3} style={{ fontWeight: 'bold', fontSize: '4vw', textAlign: 'center' }}>
                        Retrieving Order Details ...
                      </Box>
                    </Paper>
                  :
                    <Paper elevation={5}>
                      <Box p={3} style={{ fontWeight: 'bold', fontSize: '4vw', textAlign: 'center' }}>
                        Invalid Tracking Number. Order do not exist.
                      </Box>
                    </Paper>
              }
            </>
          : 
            <Paper elevation="5">
              <Box p={3} style={{ fontWeight: 'bold', fontSize: '4vw', textAlign: 'center' }}>
                Unauthorized Access. Redirecting to Home in { timer } seconds...
              </Box>
            </Paper>
        }

        <Snackbar open={openLoading} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
            Retrieving ...
          </Alert>
        </Snackbar>
        <Snackbar open={openFailure} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Invalid Tracking Number
          </Alert>
        </Snackbar>
        
      </Box>
    </Container>
  );
}

export default Order;