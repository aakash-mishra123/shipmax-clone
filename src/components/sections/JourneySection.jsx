import React, { useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import mapImg from '../../assets/images/map.png';
import workflowImg from '../../assets/images/workflow.png';
import orderProcessingImg from '../../assets/images/orderProcessingStep.png';

// Card data for easy switching
const cards = [
  {
    key: 'catalog',
    title: 'Centralized product catalog management',
    description: 'Easily update and track your inventory across all eCommerce platforms from one convenient dashboard.',
    img: mapImg,
    alt: 'Product Catalog',
    highlight: false,
  },
  {
    key: 'shipping',
    title: 'Streamlined multi-parcel shipping',
    description: 'Easily manage multiple pickup locations and couriers for one customer under a single order ID, ensuring quick and efficient order delivery.',
    img: workflowImg,
    alt: 'Multi-portal Shipping',
    highlight: false,
  },
  {
    key: 'processing',
    title: 'Quick 3-step order processing',
    description: (
      <Box component="div" sx={{ textAlign: 'left' }}>
        <div>Step 1: Automatic order confirmation: Quickly accept and confirm orders.</div>
        <div>Step 2: Courier comparison: Choose the best courier for fast & efficient shipping.</div>
        <div>Step 3: One-click dispatch: Process and ship orders with a single click.</div>
      </Box>
    ),
    img: orderProcessingImg,
    alt: 'Order Processing',
    highlight: true,
  },
];

const JourneySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="journey-section">
      <Container>
        <Typography variant="h2" className="section-title">
          How ShipMaxx simplifies your <span className="highlight">eCommerce journey</span>
        </Typography>
        <Grid container spacing={4} alignItems="center">
          {/* Illustration */}
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              <img
                src={cards[activeIndex].img}
                alt={cards[activeIndex].alt}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
          {/* Cards */}
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" gap={3}>
              {cards.map((card, idx) => (
                <Box
                  key={card.key}
                  className={`feature-card${idx === activeIndex ? ' active' : ''}`}
                  sx={{
                    background: idx === activeIndex && card.highlight ? '#FFB940' : '#fff',
                    color: idx === activeIndex && card.highlight ? '#000' : 'inherit',
                    boxShadow: idx === activeIndex ? '0 4px 16px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.04)',
                    cursor: 'pointer',
                    borderRadius: '12px',
                    padding: '20px 24px',
                    transition: 'background 0.2s, box-shadow 0.2s',
                  }}
                  onClick={() => setActiveIndex(idx)}
                >
                  <Typography
                    variant="h6"
                    className="feature-title"
                    sx={{
                      fontWeight: 'bold',
                      marginBottom: 1,
                      color: idx === activeIndex && card.highlight ? '#000' : '#222',
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="feature-description"
                    sx={{
                      color: idx === activeIndex && card.highlight ? '#222' : '#666',
                      fontWeight: idx === activeIndex ? 500 : 400,
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default JourneySection;
