import { Box, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageContainer = styled(Container)`
  height: 100%;
  padding: 50px;
`;

export const CardsWrapper = styled(Grid)`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);
`;

export const PaginationContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 30px;
`;
