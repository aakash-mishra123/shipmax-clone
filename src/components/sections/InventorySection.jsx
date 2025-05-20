import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import inventoryImg from '../../assets/images/miniWarehouse.png';

const InventorySection = () => {
  return (
    <section
      className="inventory-section"
      style={{
        background: '#FFF6E5',
        padding: '48px 0',
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} alignItems="left">
            <Typography
              variant="h4"
              sx={{
                fontWeight: 500,
                mb: 1,
                color: '#111',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Streamline your inventory management with
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
              Dispatch Ease – a mini WMS
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: '#222',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Easily track and manage your inventory across all pickup locations from one integrated warehouse management system
            </Typography>
            <Link to="/contact-us">
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
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src={inventoryImg}
                alt="Inventory Management"
                sx={{
                  width: '100%',
                  maxWidth: 370,
                  borderRadius: '32px',
                  border: '6px solid #FFB940',
                  background: '#fff',
                  objectFit: 'cover',
                  boxSizing: 'border-box',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default InventorySection;
