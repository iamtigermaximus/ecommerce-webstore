import { Container, Box, Typography } from '@mui/material';
import ProductCard from '../product-card/ProductCard';

const MostPopularSection = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '30px',
      }}
    >
      <Box sx={{ m: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: '700' }}>
          Most Popular
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

export default MostPopularSection;
