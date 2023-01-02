import ProductCard from '../../product-card/ProductCard';
import {
  SectionContainer,
  SectionNameContainer,
  SectionName,
  ProductCardsContainer,
} from './MostPopularSection.styles';

const MostPopularSection = () => {
  return (
    <SectionContainer maxWidth={false}>
      <SectionNameContainer>
        <SectionName variant="h6">Most Popular</SectionName>
      </SectionNameContainer>
      <ProductCardsContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductCardsContainer>
    </SectionContainer>
  );
};

export default MostPopularSection;
