import React from 'react';
import menuData from '../components/menuData';
import MenuItem from '../components/MenuItem';
import { Grid } from '@mui/material';

function MenuPage() {
    return (
        <div style={{ padding: 20 }}>
            <h1>Our Menu</h1>
            <Grid container spacing={3} >
                {menuData.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.name}>
                        <MenuItem {...item} onAddToCart={() => console.log('Add to cart:', item)} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default MenuPage;
