import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHook';
import { fetchAllProducts } from '../../../redux/reducers/productSlice';
import {
  ProductCardsContainer,
  SectionContainer,
  SectionName,
  SectionNameContainer,
} from '../new-arrivals-section/NewArrivalsSection.styles';
import ProductCard from '../../product-card/ProductCard';
import { CircularProgress } from '@mui/material';

const NewArrivalsSection = () => {
  const products = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchAllProducts())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  return (
    <SectionContainer maxWidth={false}>
      <SectionNameContainer>
        <SectionName variant="h6">New Arrivals</SectionName>
      </SectionNameContainer>
      {loading ? (
        <CircularProgress />
      ) : (
        <ProductCardsContainer>
          {products.length > 0 &&
            products.slice(1, 7).map((product) => (
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
      )}
    </SectionContainer>
  );
};

export default NewArrivalsSection;
