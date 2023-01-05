import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHook';
import { SingleProductLink } from '../../../pages/shop/Shop.styles';
import { addToCart } from '../../../redux/reducers/cartSlice';
import { fetchAllProducts } from '../../../redux/reducers/productSlice';
import {
  ProdCard,
  CardImage,
  ProductCardContent,
  ProductCardButton,
  ProductCardName,
  ProductCardPrice,
} from '../../product-card/ProductCard.styles';
import {
  SectionContainer,
  SectionNameContainer,
  SectionName,
  ProductCardsContainer,
} from './MostPopularSection.styles';

const MostPopularSection = () => {
  const products = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return (
    <SectionContainer maxWidth={false}>
      <SectionNameContainer>
        <SectionName variant="h6">Most Popular</SectionName>
      </SectionNameContainer>
      <ProductCardsContainer>
        {products.slice(8, 14).map((product) => {
          return (
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
          );
        })}
      </ProductCardsContainer>
    </SectionContainer>
  );
};

export default MostPopularSection;
