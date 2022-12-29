import { Container, CssBaseline, Box, Card, CardMedia } from '@mui/material';

const BannerSection = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '400px',
      }}
    >
      <CssBaseline />
      <Box sx={{ width: '50%', m: 1 }}>
        <Card sx={{ width: '100%' }}>
          <CardMedia
            sx={{ height: '400px', width: '100%', objectFit: 'contain' }}
            image="https://images.pexels.com/photos/4005033/pexels-photo-4005033.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
        </Card>
      </Box>
      <Box sx={{ width: '50%', m: 1 }}>
        <Card sx={{ width: '100%' }}>
          <CardMedia
            sx={{ height: '400px', width: '100%' }}
            image="https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </Card>
      </Box>
    </Container>
  );
};

export default BannerSection;
