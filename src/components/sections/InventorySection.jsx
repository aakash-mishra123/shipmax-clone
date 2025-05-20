import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';

const InventorySection = () => {
  return (
    <section className="inventory-section">
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2">
              Streamline your inventory management with
              <span className="highlight">Dispatch Edge - a mini WMS</span>
            </Typography>
            <Link to="/learn-more" className="btn-primary">Learn More</Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="/inventory-management.png" alt="Inventory Management" className="section-image" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default InventorySection;
