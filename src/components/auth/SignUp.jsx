import React from 'react';
import { Box, Container, TextField, Button, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from "../../assets/shipmaxx-logo.png";

const SignUp = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      background: '#fff',
      alignItems: 'center', 
      justifyContent: 'center',
      py: 4
    }}>
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <img src={logo} alt="Logo" style={{ height: '40px', marginBottom: '20px' }} />
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            Hi, Welcome Back
          </Typography>
          <Typography color="textSecondary">
            Log in to maximize your e-commerce business.
          </Typography>
        </Box>

        <Box component="form" sx={{ mt: 4 }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            placeholder="Email Address"
            sx={{ mb: 3 }}
            InputProps={{
              sx: { borderRadius: 2 }
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            placeholder="Password"
            sx={{ mb: 3 }}
            InputProps={{
              sx: { borderRadius: 2 }
            }}
          />

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 1 }}>
            <input type="checkbox" id="remember" />
            <Typography component="label" htmlFor="remember" sx={{ flex: 1 }}>
              Remember me
            </Typography>
            <Link component={RouterLink} to="/auth/forgot-password" sx={{ color: '#f8b217', textDecoration: 'none' }}>
              Forgot Password?
            </Link>
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: '#f8b217',
              color: 'white',
              py: 1.5,
              borderRadius: 2,
              '&:hover': { bgcolor: '#e9a714' }
            }}
          >
            Log in
          </Button>

          <Box sx={{ textAlign: 'center', mt: 3 }}>
            Don't have an account?{' '}
            <Link component={RouterLink} to="/auth/signup" sx={{ color: '#f8b217', textDecoration: 'none' }}>
              Sign up
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;
