import { Pagination, PaginationItem } from '@mui/material';
import ProductCard from '../../components/product-card/ProductCard';
import {
  PageContainer,
  CardsWrapper,
  PaginationContainer,
} from './Shop.styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Shop = () => {
  return (
    <PageContainer>
      <CardsWrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
