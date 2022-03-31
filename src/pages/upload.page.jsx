import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from 'axios';


const Upload = () => {

    return (
        <Container maxWidth="lg">
            <Box my={3}>
                <Paper elevation={3}>
                    <Box mb={2}>
                        <h1 className="uploadHeader"><b>Upload order file here</b></h1>
                        <form action='http://localhost:5000/orders' method='post' encType='multipart/form-data'>
                            <input type='file' name='filename' />
                            <input type='submit' value='Upload' />
                        </form>
                    </Box>
                </Paper>
            </Box>

        </Container>
    )

}

export default Upload;