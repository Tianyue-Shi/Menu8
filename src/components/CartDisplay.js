import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { List, ListItem, ListItemText, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function CartDisplay() {
  const { items, removeItem, incrementItem, decrementItem } = useContext(CartContext);

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + (item.cost * item.quantity), 0).toFixed(2);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <List>
          {items.map((item) => (
            <ListItem key={item.name}>
              <ListItemText primary={item.name} secondary={`$${item.cost} x ${item.quantity}`} />
              <Button onClick={() => decrementItem(item.name)}>-</Button>
              <span>{item.quantity}</span>
              <Button onClick={() => incrementItem(item.name)}>+</Button>
              <Button onClick={() => removeItem(item.name)}>Remove</Button>
            </ListItem>
          ))}
          <Typography variant="h6">Total: ${calculateTotal()}</Typography>
          <Button variant="contained" component={Link} to="/" style={{ marginTop: 20 }}>
            Checkout
          </Button>
        </List>
      )}
    </div>
  );
}

export default CartDisplay;
