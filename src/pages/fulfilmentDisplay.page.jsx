import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import FufilmentDetails from '../components/fulfilmentDisplay/fulfilmentDetails.component';

const FulfilmentDisplay = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://hp4m4i50v0.execute-api.ap-southeast-1.amazonaws.com/api/v1/fulfilment')
            .then(res => {
                console.log(res)
                setData(res.data.data.items);
                setLoading(false);
            })

    }, [])

    return (
        <>

            <Container maxWidth="lg">
                <Box my={3}>
                    <Paper elevation={3}>
                        <h1>Fulfilment Display</h1>
                        {loading ? <CircularProgress /> :
                            <FufilmentDetails data={data} />
                        }
                    </Paper>
                </Box>
            </Container>

        </>
    )
}

export default FulfilmentDisplay;