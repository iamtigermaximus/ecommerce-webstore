import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const ProdCard = styled(Card)`
  width: 200px;
  height: 325px;
  margin: 10px;
`;

export const CardImage = styled(CardMedia)`
  width: 100%;
  height: 200px;
`;

export const ProductCardContent = styled(CardContent)`
  width: 100%;
`;

export const ProductCardButton = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductCardName = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const ProductCardPrice = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
