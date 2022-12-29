import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';

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
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                m: 1,
              }}
            >
              Product Name
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                m: 1,
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
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                m: 1,
              }}
            >
              Product Name
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                m: 1,
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
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                m: 1,
              }}
            >
              Product Name
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                m: 1,
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
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                m: 1,
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
  );
};

export default MostPopularSection;
