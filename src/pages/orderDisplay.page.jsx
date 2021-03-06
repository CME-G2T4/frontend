import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AccountContext } from '../components/account/account.store';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import OrderDetails from '../components/orderDisplay/orderDetails.component';

import './pages.styles.scss';

const OrderDisplay = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { getSession, api_link } = useContext(AccountContext);
    const navigate = useNavigate();

    useEffect(() => {
        getSession()
        .then(session => {})
        .catch(err => {
            navigate("/");
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        axios.get(api_link + '/orders')
            .then(res => {
                setData(res.data.data.orders);
                setLoading(false);
            })
    }, [api_link])
    console.log(data)

    return (
        <>
            <Container maxWidth="lg">
                <Box my={3}>
                    <Paper elevation={3}>
                        <Box py={2} px={1}>
                            <Box className="header" mb={3}>Order Display</Box>
                            {loading ? <Box mt={5} sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box> :
                                <OrderDetails data={data} />
                            }
                        </Box>
                    </Paper>
                </Box>
            </Container>

        </>
    )
}

export default OrderDisplay;