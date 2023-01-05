import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHook';
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
  ProductCardsContainer,
  SectionContainer,
  SectionName,
  SectionNameContainer,
} from '../new-arrivals-section/NewArrivalsSection.styles';

const NewArrivalsSection = () => {
  const products = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return (
    <SectionContainer maxWidth={false}>
      <SectionNameContainer>
        <SectionName variant="h6">New Arrivals</SectionName>
      </SectionNameContainer>
      <ProductCardsContainer>
        {products.slice(1, 7).map((product) => {
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

export default NewArrivalsSection;
