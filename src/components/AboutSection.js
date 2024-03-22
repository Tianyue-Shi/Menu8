import React from "react";
import { Grid, Typography, Card } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link component
import Button from "@mui/material/Button"; // Import for a styled button

function AboutSection() {
    return (
        <section id="about" style={{ padding: 20 }}>
            {" "}
            {/* Add an id for navigation and some padding */}
            <Card>
                {" "}
                {/* Consider adding a Card for visual separation (optional) */}
                <Grid container spacing={3}>
                    {" "}
                    {/* Grid for the two-column layout */}
                    <Grid item xs={12} sm={6}>
                        <img
                            src="/stock-image.png"
                            alt="About Us"
                            style={{ width: "100%" }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" gutterBottom>
                            About Us {/* Heading */}
                        </Typography>
                        <Typography variant="body1">
                            Example Paragraph
                            {/* Menu 8 is a unique culinary business that crafts extraordinary experiences and exceptional dishes, with a passion for fresh ingredients and culinary artistry. Our menu is inspired by traditional dishes and elevated with a contemporary twist. */}
                        </Typography>
                        <Button
                            variant="contained"
                            component={Link}
                            to="/about-us"
                            style={{ marginTop: 15 }}
                            onClick={() => console.log('Button clicked!')}
                        >
                            Learn More
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </section>
    );
}

export default AboutSection;
