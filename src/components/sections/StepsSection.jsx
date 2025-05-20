import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const StepsSection = () => {
  return (
    <section className="steps-section">
      <Container>
        <Typography variant="h2">Ship your goals <span className="highlight">in just 3 steps</span></Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <div className="step-card">
              <img src="/step1.png" alt="Step 1" />
              <Typography variant="h6">STEP 01</Typography>
              <Typography>Create profile and complete KYC</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="step-card">
              <img src="/step2.png" alt="Step 2" />
              <Typography variant="h6">STEP 02</Typography>
              <Typography>Integrate marketplace and sync products</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="step-card">
              <img src="/step3.png" alt="Step 3" />
              <Typography variant="h6">STEP 03</Typography>
              <Typography>Start shipping and fulfilling your orders</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default StepsSection;
