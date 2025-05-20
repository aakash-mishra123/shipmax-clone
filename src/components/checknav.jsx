import { Box, Container, Dialog, Paper, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from "../assets/shipmaxx-logo.png";
import { useState } from 'react';
import { FaMapMarkedAlt, FaCubes, FaShippingFast, FaListAlt, FaWarehouse, FaProjectDiagram, FaLayerGroup, FaRetweet, FaBalanceScale } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Solutions data for dialog
  const solutions = [
    { icon: <FaMapMarkedAlt color="#f8b217" size={28} />, label: "Pan India Delivery" },
    { icon: <FaListAlt color="#f8b217" size={28} />, label: "Centralized Cataloging" },
    { icon: <FaCubes color="#f8b217" size={28} />, label: "Multi-Parcel Shipment" },
    { icon: <FaRetweet color="#f8b217" size={28} />, label: "Order Processing" },
    { icon: <FaWarehouse color="#f8b217" size={28} />, label: "Integrated WMS" },
    { icon: <FaProjectDiagram color="#f8b217" size={28} />, label: "Multi-Channel Integration" },
    { icon: <FaShippingFast color="#f8b217" size={28} />, label: "Shipping Management" },
    { icon: <FaLayerGroup color="#f8b217" size={28} />, label: "Workflow-Automation" },
    { icon: <FaBalanceScale color="#f8b217" size={28} />, label: "Reconciliation" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        height: '80px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Container
        sx={{
          px: { xs: '20px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/">
          <img
            src={logo}
            alt="ShipMaxx Logo"
            style={{
              height: '40px',
              width: 'auto',
            }}
          />
        </Link>

        <Box sx={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: '24px' }}>
            <span
              style={{ textDecoration: 'none', color: '#f8b217', fontWeight: 500, cursor: 'pointer', position: 'relative' }}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setTimeout(() => setOpen(false), 200)}
            >
              Solutions
              <Dialog
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                  sx: {
                    borderRadius: '24px',
                    mt: '60px',
                    ml: '80px',
                    boxShadow: '0 8px 32px 0 #00000029',
                    minWidth: 600,
                    maxWidth: 800,
                    p: 3,
                  }
                }}
                hideBackdrop
                sx={{
                  '& .MuiDialog-container': {
                    alignItems: 'flex-start',
                  }
                }}
              >
                <Paper
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                  sx={{
                    borderRadius: '24px',
                    boxShadow: 'none',
                    p: 3,
                    background: '#fff',
                  }}
                >
                  <Grid container spacing={2}>
                    {solutions.map((item, idx) => (
                      <Grid item xs={12} sm={4} key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                        {item.icon}
                        <Typography sx={{ color: '#222', fontWeight: 500, fontSize: 16 }}>
                          {item.label}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Dialog>
            </span>
            <Link to="/" style={{ textDecoration: 'none', color: '#333333', fontWeight: 500 }}>
              Company
            </Link>
            <Link to="/" style={{ textDecoration: 'none', color: '#333333', fontWeight: 500 }}>
              Resources
            </Link>
          </Box>
          <Link to="/contact-us" style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: 600,
            padding: '8px 24px',
            borderRadius: '6px',
            backgroundColor: '#000000'
          }}>
            Try Now
          </Link>
          <Link to="/signup" style={{
            textDecoration: 'none',
            color: '#000000',
            fontWeight: 600,
            padding: '8px 24px',
            borderRadius: '6px',
            backgroundColor: '#FFC85E'
          }}>
            Log In
          </Link>
        </Box>
      </Container>
    </Box>
  );
}