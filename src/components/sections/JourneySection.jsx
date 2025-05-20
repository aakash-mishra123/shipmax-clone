import React, { useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import mapImg from '../../assets/images/map.png';
import workflowImg from '../../assets/images/workflow.png';
import orderProcessingImg from '../../assets/images/orderProcessingStep.png';
import '../Home.styles.css';
// Card data for easy switching
const cards = [
  {
    key: 'catalog',
    title: 'Centralized product catalog management',
    description: 'Easily update and track your inventory across all eCommerce platforms from one convenient dashboard.',
    img: mapImg,
    alt: 'Product Catalog',
    highlight: true,
  },
  {
    key: 'shipping',
    title: 'Streamlined multi-parcel shipping',
    description: 'Easily manage multiple pickup locations and couriers for one customer under a single order ID, ensuring quick and efficient order delivery.',
    img: workflowImg,
    alt: 'Multi-portal Shipping',
    highlight: true,
  },
  {
    key: 'processing',
    title: 'Quick 3-step order processing',
    description: (
      <Box component="div" sx={{ textAlign: 'left', fontSize: '16px', color: 'black' }}>
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
      <Container sx={{ maxWidth: '85% !important', width: '85% !important' }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 400,
            mb: 8,
            color: '#222',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          How Shipmaxx simplifies your{' '}
          <Box component="span" sx={{ color: '#f8b217', fontWeight: 600 }}>
            eCommerce journey
          </Box>
        </Typography>
        <Grid container spacing={4} alignItems="center">
          {/* Illustration */}
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{ minHeight: "90%" }}>
              <img
                src={cards[activeIndex].img}
                alt={cards[activeIndex].alt}
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: 'contain',
                  borderRadius: 24,
                  background: '#fff',
                }}
              />
            </Box>
          </Grid>
          {/* Cards */}
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              sx={{
                minHeight: 420,
                justifyContent: 'center',
              }}
            >
              {cards.map((card, idx) => (
                <Box
                  key={card.key}
                  className="feature-card"
                  sx={{
                    backgroundColor: idx === activeIndex
                      ? (card.highlight ? '#f8b217' : '#fff')
                      : '#f7f7f7',
                    color: idx === activeIndex && card.highlight ? '#fff' : '#222',
                    boxShadow: '0 4px 24px #00000014',
                    cursor: 'pointer',
                    borderRadius: '24px',
                    padding: '32px 36px',
                    transition: 'transform 0.3s ease, background-color 0.3s ease',
                    transform: idx === activeIndex ? 'scale(1.1)' : 'scale(1)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                  onClick={() => setActiveIndex(idx)}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: idx === activeIndex && card.highlight ? '#fff' : '#222',
                      fontSize: '1.3rem',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: idx === activeIndex && card.highlight ? '#fff' : '#666',
                      fontWeight: 400,
                      fontSize: '0.8rem',
                      fontFamily: 'Inter, sans-serif',
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
