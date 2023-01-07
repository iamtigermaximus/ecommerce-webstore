import { useEffect } from 'react';
import { Box, Pagination, PaginationItem } from '@mui/material';
import {
  PageContainer,
  CardsWrapper,
  PaginationContainer,
  CardImage,
  ProdCard,
  ProductCardButton,
  ProductCardContent,
  ProductCardName,
  ProductCardPrice,
  SingleProductLink,
} from './Shop.styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHook';
import { fetchAllProducts } from '../../redux/reducers/productSlice';
import DropdownOption from '../../components/dropdown-option/DropdownOption';
import { addToCart } from '../../redux/reducers/cartSlice';

const Shop = () => {
  const { products } = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <PageContainer>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          margin: '10px 20px',
        }}
      >
        <DropdownOption />
      </Box>

      <CardsWrapper>
        {products &&
          products.map((product) => (
            <ProdCard key={product.id}>
              <SingleProductLink to={`:${product.id}`}>
                <CardImage image={product.images[0]} />
              </SingleProductLink>
              <ProductCardContent>
                <ProductCardButton
                  variant="outlined"
                  color="inherit"
                  onClick={() => dispatch(addToCart(product))}
                >
                  ADD TO CART
                </ProductCardButton>
                <ProductCardName>{product.title}</ProductCardName>
                <ProductCardPrice>$ {product.price}</ProductCardPrice>
              </ProductCardContent>
            </ProdCard>
          ))}
      </CardsWrapper>
      <PaginationContainer>
        <Pagination
          count={10}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </PaginationContainer>
    </PageContainer>
  );
};

export default Shop;
