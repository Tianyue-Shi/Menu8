import React from 'react';
import { Grid, Typography, Container } from '@mui/material'; // Import any necessary components

function AboutUs() {
  return (
    <Container> {/* Or any other suitable layout component */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            About Us 
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Example: Add some text content about your company */}
          <Typography variant="body1">
            Our mission is to deliver...
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Optional: Add an image */}
          <img src="/stock-image.png" alt="About Us" style={{ width: '100%' }} /> 
        </Grid>
        
      </Grid>
    </Container>
  );
}

export default AboutUs;
