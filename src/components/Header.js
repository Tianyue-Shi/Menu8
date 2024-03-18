import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}> {/* Flexbox for alignment */}
        <Typography variant="h6" noWrap component="div" sx={{ display: 'flex', alignItems: 'center' }}>
          
          <Typography variant="h6" noWrap component="span" sx={{ color: 'secondary.main', marginLeft: 1 }}>
            Menu 8
          </Typography>
        </Typography>
        <Button color="inherit" variant="outlined">
          Menu
        </Button>
        <Button color="inherit" variant="outlined">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
