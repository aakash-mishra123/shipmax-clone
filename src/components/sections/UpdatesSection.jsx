import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import realTimeImg from '../../assets/images/realTime.png';

const UpdatesSection = () => {
  return (
    <section
      className="updates-section"
      style={{
        background: '#FFFFFF',
        padding: '48px 0',
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src={realTimeImg}
                alt="Real-time Updates"
                sx={{
                  width: '100%',
                  maxWidth: 420,
                  borderRadius: '24px',
                  border: '6px solid #FFB940',
                  background: '#fff',
                  objectFit: 'cover',
                  boxSizing: 'border-box',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 500,
                mb: 1,
                color: '#111',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Enhance customer experience with
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: '#FFB940',
                mb: 2,
                fontFamily: 'Inter, sans-serif',
                display: 'block',
              }}
            >
              real-time updates
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: '#222',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Keep you and your customers informed with automated updates about order status and any potential issues via email, SMS and WhatsApp
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: '#FFB940',
                color: '#fff',
                fontWeight: 600,
                borderRadius: '8px',
                px: 4,
                py: 1.5,
                boxShadow: 'none',
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': { background: '#FFA500' },
              }}
            >
              Try Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default UpdatesSection;
