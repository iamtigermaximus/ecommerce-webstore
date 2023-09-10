import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHook';
import { fetchAllProducts } from '../../../redux/reducers/productSlice';
import {
  SectionContainer,
  SectionNameContainer,
  SectionName,
  ProductCardsContainer,
} from './MostPopularSection.styles';
import ProductCard from '../../product-card/ProductCard';

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
        {products.length > 0 &&
          products.slice(8, 14).map((product) => (
            <ProductCard
              _id={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
              category={{
                _id: product.category._id,
                name: product.category.name,
              }}
            />
          ))}
      </ProductCardsContainer>
    </SectionContainer>
  );
};

export default MostPopularSection;
