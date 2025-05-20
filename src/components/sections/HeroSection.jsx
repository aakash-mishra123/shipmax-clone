import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';
import shiprocketDb from '../../assets/images/shiprocket-dashboard.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h1" className="main-title">
              Maximize eCommerce <br />
              orders
              <span className="highlight">with 3-step shipping</span>
            </Typography>
            <Typography variant="body1" className="description">
              Streamline your eCommerce journey with our all-in-one order management <br />
              and shipping Solution
            </Typography>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Let's Connect</Link>
              <Link to="/signup" className="btn-secondary">Sign Up</Link>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={shiprocketDb} alt="ShipMaxx Dashboard" className="hero-image" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HeroSection;
