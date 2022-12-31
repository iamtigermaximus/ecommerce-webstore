import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageContainer = styled(Container)`
  height: 100vh;
  background-color: pink;
`;

const Cart = () => {
  return <PageContainer>Cart</PageContainer>;
};

export default Cart;
