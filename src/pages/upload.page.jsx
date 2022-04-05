// import React, { useContext, useState } from 'react';
import React, { useState } from 'react';
// import { AccountContext } from '../components/account/account.store';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import './pages.styles.scss';
import axios from 'axios';

const Upload = () => {

    const [openLoading, setOpenLoading] = useState(false);
    const [openFailure, setOpenFailure] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    // const { api_link } = useContext(AccountContext);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    }
    console.log(selectedFile);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setOpenLoading(true);
        const formData = new FormData();
        formData.append('filename', selectedFile);
        try {
            axios.post("http://localhost:5000/orders", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            })
            .then(res => {
                setOpenLoading(false);
                setOpenSuccess(true);
            })
        } catch (error) {
            console.log(error);
            setOpenFailure(true);
            setOpenLoading(false);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenFailure(false);
        setOpenLoading(false);
        setOpenSuccess(false);
    };

    return (
        <Container maxWidth="md">
            <Box my={3}>
                <Paper elevation={3}>
                    <Box mb={2} style={{ textAlign: 'center' }}>
                        <Box className="header" mb={3}>Upload order file here</Box>
                        <form method='post' encType='multipart/form-data' onSubmit={handleSubmit}>
                            <Box>
                                <input type='file' name='filename' onChange={handleFileSelect} />
                            </Box>
                            <Box mt={3}>
                                <Button className="fat-button" type='file' value='filename' variant="contained">Upload</Button>
                            </Box>
                        </form>
                    </Box>
                </Paper>
            </Box>
            <Snackbar open={openLoading} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                    Uploading ...
                </Alert>
            </Snackbar>
            <Snackbar open={openSuccess} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Uploaded
                </Alert>
            </Snackbar>
            <Snackbar open={openFailure} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Invalid
                </Alert>
            </Snackbar>

        </Container>
    )

}

export default Upload;