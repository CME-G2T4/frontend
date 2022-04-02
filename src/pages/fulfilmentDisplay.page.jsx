import React, { useState, useEffect, useContext } from 'react';
import { AccountContext } from '../components/account/account.store';
import axios from 'axios';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import FufilmentDetails from '../components/fulfilmentDisplay/fulfilmentDetails.component';

import './pages.styles.scss';

const FulfilmentDisplay = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { api_link } = useContext(AccountContext);

    useEffect(() => {
        axios.get( api_link + '/fulfilment')
            .then(res => {
                console.log(res)
                setData(res.data.data.items);
                setLoading(false);
            })

    })

    return (
        <>

            <Container maxWidth="lg">
                <Box my={3}>
                    <Paper elevation={3}>
                        <Box py={2} px={1}>
                            <Box className="header" mb={3}>Fulfilment Display</Box>
                            {loading ? <Box mt={5} sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box> :
                                <FufilmentDetails data={data} />
                            }
                        </Box>
                    </Paper>
                </Box>
            </Container>

        </>
    )
}

export default FulfilmentDisplay;