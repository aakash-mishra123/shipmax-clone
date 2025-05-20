import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const StatsSection = () => {
  const stats = {
    shipping: '50%',
    pinCodes: '27000+',
  };

  return (
    <section className="stats-section">
      <Container>
        <Typography variant="h2">
          Deliver to every part of India <span className="highlight">with ease</span>
        </Typography>
        <Grid container spacing={4} className="stats-container">
          <Grid item xs={6}>
            <Typography variant="h3">{stats.shipping}</Typography>
            <Typography>faster order processing</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h3">{stats.pinCodes}</Typography>
            <Typography>pin codes covered</Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default StatsSection;
