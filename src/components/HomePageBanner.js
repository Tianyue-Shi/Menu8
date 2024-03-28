import { Typography } from '@mui/material';
import AboutSection from './AboutSection';
import '../styles/homepage-banner.css';

function HomePageBanner() {
  return (
    <section id="homepage" style={{ padding: 20 }}> 
      {/* Banner Content */}
      <div className="banner-container"> 
        <img src="/stock-image.png" alt="Business Name" style={{ width: '100%' }} /> 
        <div className="banner-text"> 
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }} style={{ fontFamily: 'Times New Roman, serif'}} >
            Example Title 
          </Typography>
          <Typography variant="body1" component="p">
            Example Paragraph (A short introduction) 
          </Typography>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section"> 
        <AboutSection />  
      </div>
    </section>
  );
};

export default HomePageBanner;
