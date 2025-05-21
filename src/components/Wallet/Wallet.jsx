import React, { useState } from 'react';
import { Box, Container, Typography, Button, TextField, MenuItem, IconButton } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Wallet.css';

const Wallet = () => {
  const [searchValue, setSearchValue] = useState('');
  const [typeValue, setTypeValue] = useState('All');
  const [periodValue, setPeriodValue] = useState('All');
  const [activeTab, setActiveTab] = useState('transactions');

  const transactionData = [
    {
      date: '21 May, 2025 | 03:17 PM',
      transactionId: 'N/A',
      amount: '₹1,000.00',
      status: 'Failed',
      description: 'Canceled By Customer'
    },
    {
      date: '21 May, 2025 | 11:58 AM',
      transactionId: 'N/A',
      amount: '₹1,234.00',
      status: 'Failed',
      description: 'Canceled By Customer'
    }
  ];

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Searching with:', { searchValue, typeValue, periodValue });
  };

  return (
    <Box sx={{ background: '#f4f8fd', minHeight: 'calc(100vh - 120px)', py: 3 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconButton 
            component="a" 
            href="/" 
            sx={{ color: '#000', mr: 2 }}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <Typography variant="h5" component="h1" fontWeight={600}>
            Accounting
            <Typography 
              component="span" 
              sx={{ 
                color: '#4CAF50', 
                fontSize: '0.9rem', 
                ml: 1,
                fontWeight: 500
              }}
            >
              Available balance: ₹0.00
            </Typography>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          
          <Button 
            variant="contained" 
            sx={{ 
              bgcolor: '#f8b217', 
              '&:hover': { bgcolor: '#e9a714' },
              borderRadius: '4px',
              textTransform: 'none',
              fontWeight: 500
            }}
          >
            Recharge Wallet
          </Button>
        </Box>

        {/* New Tab Switch */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button
            onClick={() => setActiveTab('transactions')}
            sx={{
              bgcolor: activeTab === 'transactions' ? '#f8b217' : '#fff',
              color: activeTab === 'transactions' ? '#fff' : '#000',
              '&:hover': { bgcolor: activeTab === 'transactions' ? '#e9a714' : '#f5f5f5' },
              textTransform: 'none',
              px: 3
            }}
          >
            Transaction History
          </Button>
          <Button
            onClick={() => setActiveTab('recharge')}
            sx={{
              bgcolor: activeTab === 'recharge' ? '#f8b217' : '#fff',
              color: activeTab === 'recharge' ? '#fff' : '#000',
              '&:hover': { bgcolor: activeTab === 'recharge' ? '#e9a714' : '#f5f5f5' },
              textTransform: 'none',
              px: 3
            }}
          >
            Recharge History
          </Button>
        </Box>

        {/* Transaction Table */}
        <Box sx={{ bgcolor: '#fff', borderRadius: 1, mb: 3, overflow: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                <th style={{ padding: '16px', textAlign: 'left' }}>Date</th>
                <th style={{ padding: '16px', textAlign: 'left' }}>Transaction ID (PG)</th>
                <th style={{ padding: '16px', textAlign: 'left' }}>Transaction amount</th>
                <th style={{ padding: '16px', textAlign: 'left' }}>Status</th>
                <th style={{ padding: '16px', textAlign: 'left' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {transactionData.map((transaction, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '16px' }}>{transaction.date}</td>
                  <td style={{ padding: '16px' }}>{transaction.transactionId}</td>
                  <td style={{ padding: '16px' }}>{transaction.amount}</td>
                  <td style={{ padding: '16px' }}>
                    <Box
                      component="span"
                      sx={{
                        color: transaction.status === 'Failed' ? '#ff1744' : '#4caf50',
                        bgcolor: transaction.status === 'Failed' ? '#ffebee' : '#e8f5e9',
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: '0.875rem'
                      }}
                    >
                      {transaction.status}
                    </Box>
                  </td>
                  <td style={{ padding: '16px' }}>{transaction.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>

        {/* Search Panel */}
        <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: 1 }}>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Search
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              placeholder="Search"
              variant="outlined"
              size="small"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: '#e0e0e0',
                  },
                },
              }}
            />
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2, mb: 3, flexDirection: {xs: 'column', md: 'row'} }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Type</Typography>
              <TextField
                select
                fullWidth
                variant="outlined"
                size="small"
                value={typeValue}
                onChange={(e) => setTypeValue(e.target.value)}
                SelectProps={{
                  IconComponent: KeyboardArrowDownIcon,
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    '& fieldset': {
                      borderColor: '#e0e0e0',
                    },
                  },
                }}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Debit">Debit</MenuItem>
                <MenuItem value="Credit">Credit</MenuItem>
              </TextField>
            </Box>
            
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Period</Typography>
              <TextField
                select
                fullWidth
                variant="outlined"
                size="small"
                value={periodValue}
                onChange={(e) => setPeriodValue(e.target.value)}
                SelectProps={{
                  IconComponent: KeyboardArrowDownIcon,
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    '& fieldset': {
                      borderColor: '#e0e0e0',
                    },
                  },
                }}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Today">Today</MenuItem>
                <MenuItem value="This Week">This Week</MenuItem>
                <MenuItem value="This Month">This Month</MenuItem>
                <MenuItem value="Last Month">Last Month</MenuItem>
              </TextField>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              onClick={handleSearch}
              sx={{ 
                bgcolor: '#f8b217',
                '&:hover': { bgcolor: '#e9a714' },
                minWidth: '150px',
                borderRadius: '4px',
                textTransform: 'none',
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Wallet;
