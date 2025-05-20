import { Container, Grid, Typography } from '@mui/material';
const FeaturesSection = () => {
  return (
    <section className="features-section">
      <Container>
        <Typography variant="h2">
          Grow your eCommerce business with <span className="highlight">maximum ease</span>
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <div className="feature-icon">
              <img src="/icon-marketplace.svg" alt="Marketplace Integration" />
              <Typography variant="h6">Multi-channel integration</Typography>
              <Typography>Connect and manage multiple sales channels</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="feature-icon">
              <img src="/icon-bulk.svg" alt="Bulk Orders" />
              <Typography variant="h6">Bulk order handling</Typography>
              <Typography>Process multiple orders efficiently</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="feature-icon">
              <img src="/icon-inventory.svg" alt="Inventory" />
              <Typography variant="h6">Inventory management</Typography>
              <Typography>Track stock levels in real-time</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FeaturesSection;
