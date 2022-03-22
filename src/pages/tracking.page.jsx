import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Tracking() {

  return (
    <Container maxWidth="lg">
      <Paper elevation={3}>
        <Typography variant="h4">
          Tracking Information: #1-767
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            
          </Grid>
          <Grid item xs={6}>
            
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Tracking;