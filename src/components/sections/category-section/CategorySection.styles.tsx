import { Container, Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CategorySectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  margin-top: 20px;
`;

export const SectionNameContainer = styled(Box)`
  margin: 10px;
`;

export const SectionName = styled(Typography)`
  font-weight: 700;
`;

export const CategoryCardContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CategoryCard = styled(Card)`
  width: 300px;
  height: 300px;
  margin: 10px;
`;

export const CategoryName = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
