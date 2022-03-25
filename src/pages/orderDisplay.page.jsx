import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import OrderDetails from '../components/orderDisplay/orderDetails.component';

const OrderDisplay = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/orders')
            .then(res => {
                setData(res.data.data.orders);
                setLoading(false);
            })

    }, [])

    return (
        <>

            <Container maxWidth="lg">
                <Box my={3}>
                    <Paper elevation={3}>
                        <h1>Order Display</h1>
                        {loading ? <CircularProgress /> :
                            <OrderDetails data={data} />
                        }
                    </Paper>
                </Box>
            </Container>

        </>
    )
}

export default OrderDisplay;