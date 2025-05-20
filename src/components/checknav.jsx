import { Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from "../assets/shipmaxx-logo.png"; // Update with new logo

export default function Navbar() {
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
            <Link to="/solutions" style={{ textDecoration: 'none', color: '#333333', fontWeight: 500 }}>
              Solutions
            </Link>
            <Link to="/company" style={{ textDecoration: 'none', color: '#333333', fontWeight: 500 }}>
              Company
            </Link>
            <Link to="/resources" style={{ textDecoration: 'none', color: '#333333', fontWeight: 500 }}>
              Resources
            </Link>
          </Box>
          <Link to="/try-now" style={{ 
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