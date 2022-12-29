import {
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

const CategorySection = () => {
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
          Categories
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Card sx={{ width: '800px', m: 1, height: '300px' }}>
          <CardMedia
            sx={{ height: 250, width: '100%' }}
            image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
          />
          <CardContent>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 700,
              }}
            >
              Clothes
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '800px', m: 1, height: '300px' }}>
          <CardMedia
            sx={{ height: 250, width: '100%' }}
            image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
          />
          <CardContent>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 700,
              }}
            >
              Shoes
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '800px', m: 1, height: '300px' }}>
          <CardMedia
            sx={{ height: 250, width: '100%' }}
            image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
          />
          <CardContent>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 700,
              }}
            >
              Furniture
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '800px', m: 1, height: '300px' }}>
          <CardMedia
            sx={{ height: 250, width: '100%' }}
            image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
          />
          <CardContent>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 700,
              }}
            >
              Others
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default CategorySection;
