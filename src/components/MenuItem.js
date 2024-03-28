import React, { useContext, useState } from 'react';
import { Button, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { CartContext } from '../context/CartContext';

function MenuItem({ name, description, cost, imageUrl, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useContext(CartContext);

    const handleIncrement = () => setQuantity(quantity + 1);
    const handleDecrement = () => setQuantity(Math.max(1, quantity - 1));

    return (
        <Card sx={{ maxWidth: 300, margin: 2 }}>
            <CardMedia
                component="img"
                height="180"
                image={imageUrl}
                alt={name}
                />
            <CardContent>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="body2">{description}</Typography>
                <Typography variant="body1">${cost.toFixed(2)}</Typography>
                

                <Button onClick={handleDecrement}>-</Button>
                {quantity}
                <Button onClick={handleIncrement}>+</Button>
                <Button onClick={() => addItem({ name, cost, quantity })}>Add to Cart</Button>
            </CardContent>
        </Card>
    );
}

export default MenuItem;
