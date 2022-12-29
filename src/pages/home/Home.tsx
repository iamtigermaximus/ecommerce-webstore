import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import BannerSection from '../../components/sections/BannerSection';

const Home = () => {
  return (
    <>
      <BannerSection />
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
        <Box sx={{ fontWeight: '700', m: 1 }}>SECTION TITLE - CATEGORIES</Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Card sx={{ width: '800px', m: 1 }}>
            <CardMedia
              sx={{ height: 250, width: '100%' }}
              image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Category
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: '800px', m: 1 }}>
            <CardMedia
              sx={{ height: 250, width: '100%' }}
              image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Category
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: '800px', m: 1 }}>
            <CardMedia
              sx={{ height: 250, width: '100%' }}
              image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Category
              </Typography>
            </CardContent>
          </Card>{' '}
          <Card sx={{ width: '800px', m: 1 }}>
            <CardMedia
              sx={{ height: 250, width: '100%' }}
              image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Category
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
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
        <Box sx={{ fontWeight: '700', m: 1 }}>SECTION TITLE -NEW ARRIVALS</Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Card sx={{ width: '800px', m: 1 }}>
            <CardMedia
              sx={{ height: 250, width: '100%' }}
              image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
            />
            <CardContent>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                ADD TO CART
              </Button>
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Product Name
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                $ 200
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: '800px', m: 1 }}>
            <CardMedia
              sx={{ height: 250, width: '100%' }}
              image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
            />
            <CardContent>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                ADD TO CART
              </Button>
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Product Name
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                $ 200
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: '800px', m: 1 }}>
            <CardMedia
              sx={{ height: 250, width: '100%' }}
              image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
            />
            <CardContent>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                ADD TO CART
              </Button>
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Product Name
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                $ 200
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: '800px', m: 1 }}>
            <CardMedia
              sx={{ height: 250, width: '100%' }}
              image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
            />
            <CardContent>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                ADD TO CART
              </Button>
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Product Name
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                $ 200
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '400px',
          width: '100vw',
          marginTop: '20px',
        }}
      >
        <Box sx={{ fontWeight: '700', m: 1 }}>SECTION TITLE - MOST POPULAR</Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Card sx={{ width: '800px', m: 1 }}>
            <CardMedia
              sx={{ height: 250, width: '100%' }}
              image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
            />
            <CardContent>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                ADD TO CART
              </Button>
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Product Name
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                $ 200
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: '800px', m: 1 }}>
            <CardMedia
              sx={{ height: 250, width: '100%' }}
              image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
            />
            <CardContent>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                ADD TO CART
              </Button>
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Product Name
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                $ 200
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: '800px', m: 1 }}>
            <CardMedia
              sx={{ height: 250, width: '100%' }}
              image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
            />
            <CardContent>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                ADD TO CART
              </Button>
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Product Name
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                $ 200
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: '800px', m: 1 }}>
            <CardMedia
              sx={{ height: 250, width: '100%' }}
              image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
            />
            <CardContent>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                ADD TO CART
              </Button>
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Product Name
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                $ 200
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
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
