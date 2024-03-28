import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}> {/* Flexbox for alignment */}
        <Typography variant="h6" noWrap component="div" sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h6" noWrap component="span" sx={{ color: 'secondary.main', marginLeft: 1 }}>
              Example Title
              {/* Menu 8 */}
            </Typography>
          </Link>
        </Typography>
        <Button color="inherit" variant="outlined" component={Link} to="/menu">
          Menu
        </Button>
        <Button color="inherit" variant="outlined" component={Link} to="/contact">
          Contact
        </Button>
        <Button color="inherit" variant="outlined" component={Link} to="/cart">
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
