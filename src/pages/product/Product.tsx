import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';

export const PageContainer = styled(Container)`
  height: 100vh;
  background-color: pink;
`;
const Product = () => {
  const { id } = useParams();
  return <PageContainer>Product{id}</PageContainer>;
};

export default Product;
