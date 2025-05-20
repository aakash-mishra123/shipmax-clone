import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const JourneySection = () => {
  return (
    <section className="journey-section">
      <Container>
        <Typography variant="h2" className="section-title">
          How ShipMaxx simplifies your <span className="highlight">eCommerce journey</span>
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={4}>
            <div className="feature-card product-catalog">
              <div className="card-image-wrapper">
                <img src="/feature-1.png" alt="Product Catalog" />
              </div>
              <div className="card-content">
                <Typography variant="h6" className="feature-title">
                  Centralized product catalog management
                </Typography>
                <Typography variant="body1" className="feature-description">
                  Sync stock levels and manage all your products across multiple marketplaces with ease
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className="feature-card shipping">
              <div className="card-image-wrapper">
                <img src="/feature-2.png" alt="Multi-portal Shipping" />
              </div>
              <div className="card-content">
                <Typography variant="h6" className="feature-title">
                  Streamlined multi-portal shipping
                </Typography>
                <Typography variant="body1" className="feature-description">
                  Easy shipping rate comparison across multiple carriers and automated label generation
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className="feature-card processing">
              <div className="card-image-wrapper">
                <img src="/feature-3.png" alt="Order Processing" />
              </div>
              <div className="card-content">
                <Typography variant="h6" className="feature-title">
                  Quick 3-step order processing
                </Typography>
                <Typography variant="body1" className="feature-description">
                  Process orders with automated confirmation, routing and real-time tracking
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default JourneySection;
