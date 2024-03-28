import React from 'react';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button"; 

function ConfirmationPage() {
    return (
        <div style={{ padding: 20 }}>
            <h1>Thank you for your submission!</h1>
            <p>Your message has been received.</p>
            <p>We will be reaching out.</p>
            <Button variant="contained" component={Link} to="/" style={{ marginTop: 20 }}>
                Return to Home
            </Button>
        </div>
    );
}

export default ConfirmationPage;
