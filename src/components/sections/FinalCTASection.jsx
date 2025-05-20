import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const FinalCTASection = () => {
  return (
    <section className="final-cta-section">
      <Container>
        <Typography variant="h2">Let's make eCommerce <span className="highlight">easy and smooth</span></Typography>
        <Typography>Sign up to streamline your order and shipping processes for a smoother business growth</Typography>
        <Link to="/try-now" className="btn-primary">Try Free</Link>
      </Container>
    </section>
  );
};

export default FinalCTASection;
