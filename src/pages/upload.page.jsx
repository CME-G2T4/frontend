import React, { useContext } from 'react';
import { AccountContext } from '../components/account/account.store';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
// import axios from 'axios';

import './pages.styles.scss';

const Upload = () => {

    const { api_link } = useContext(AccountContext);

    return (
        <Container maxWidth="md">
            <Box my={3}>
                <Paper elevation={3}>
                    <Box mb={2} style={{ textAlign: 'center' }}>
                        <Box className="header" mb={3}>Upload order file here</Box>
                        <form action={`${api_link}/orders`} method='post' encType='multipart/form-data'>
                            <Box>
                                <input type='file' name='filename' />
                            </Box>
                            <Box mt={3}>
                                <Button className="fat-button" type='file' value='filename' variant="contained">Upload </Button>
                            </Box>
                        </form>
                    </Box>
                </Paper>
            </Box>

        </Container>
    )

}

export default Upload;