import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const Upload = () => {

    return (
        <Container maxWidth="lg">
            <Box my={3}>
                <Paper elevation={3}>
                    <Box mb={2}>
                        <span className="uploadHeader"><b>Upload order file here</b> #1-767</span>
                    </Box>
                </Paper>
            </Box>

        </Container>
    )

}

export default Upload;