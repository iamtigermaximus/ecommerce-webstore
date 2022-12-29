import { Box, Button, Container, TextField, Typography } from '@mui/material';
import BannerSection from '../../components/sections/BannerSection';
import CategorySection from '../../components/sections/CategorySection';
import MostPopularSection from '../../components/sections/MostPopularSection';
import NewArrivalsSection from '../../components/sections/NewArrivalsSection';

const Home = () => {
  return (
    <>
      <BannerSection />
      <CategorySection />
      <NewArrivalsSection />
      <MostPopularSection />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
          width: '100vw',
          marginTop: '50px',
        }}
      >
        <Box
          sx={{
            bgcolor: 'rgb(243, 243, 243)',
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            p: 4,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Subscribe to our Newsletter
          </Typography>
          <Typography variant="body1" gutterBottom>
            Subscribe now and get 10% off of one order. Be among the first to
            hear about benefits, offers and events.
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: 'rgb(243, 243, 243)',
            width: '40%',
            display: 'flex',
            flexDirection: 'column',
            p: 4,
          }}
        >
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <TextField fullWidth label="Email" />
          </Box>
          <Box
            sx={{
              py: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'orange',
                color: 'black',
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
