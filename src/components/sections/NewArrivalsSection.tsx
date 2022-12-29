import { Container, Box, Typography } from '@mui/material';
import ProductCard from '../product-card/ProductCard';

const NewArrivalsSection = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '400px',
        width: '100vw',
        marginTop: '20px',
      }}
    >
      <Box sx={{ m: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: '700' }}>
          New Arrivals
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Box>
    </Container>
  );
};

export default NewArrivalsSection;
