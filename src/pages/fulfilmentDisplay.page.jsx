import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const { getSession, api_link } = useContext(AccountContext);
    const navigate = useNavigate();

    useEffect(() => {
        getSession()
            .then(session => { })
            .catch(err => {
                navigate("/");
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        axios.get(api_link + '/fulfilment')
            .then(res => {
                setData(res.data.data.items);
                setLoading(false);
            })
    }, [api_link])

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