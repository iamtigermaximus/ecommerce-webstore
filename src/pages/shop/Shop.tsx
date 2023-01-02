import { Pagination, PaginationItem } from '@mui/material';
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
import { useEffect } from 'react';
import { fetchAllProducts } from '../../redux/reducers/productSlice';

const Shop = () => {
  const products = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return (
    <PageContainer>
      <CardsWrapper>
        {products.map((product) => {
          return (
            <SingleProductLink to={`:${product.id}`} key={product.id}>
              <ProdCard>
                <CardImage image={product.images[0]} />
                <ProductCardContent>
                  <ProductCardButton variant="outlined" color="inherit">
                    ADD TO CART
                  </ProductCardButton>
                  <ProductCardName>{product.title}</ProductCardName>
                  <ProductCardPrice>$ {product.price}</ProductCardPrice>
                </ProductCardContent>
              </ProdCard>
            </SingleProductLink>
          );
        })}
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
