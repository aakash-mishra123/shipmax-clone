import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';

const UpdatesSection = () => {
  return (
    <section className="updates-section">
      <Container>
        <Grid container spacing={6} alignItems="center" direction="row-reverse">
          <Grid item xs={12} md={6}>
            <Typography variant="h2">
              Enhance customer experience with
              <span className="highlight">real-time updates</span>
            </Typography>
            <Typography>
              Keep your retail customers informed with automated notifications about order status and shipping updates
            </Typography>
            <Link to="/try-now" className="btn-primary">Try Now</Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="/real-time-updates.png" alt="Real-time Updates" className="section-image" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default UpdatesSection;
