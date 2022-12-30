import ProductCard from '../../product-card/ProductCard';
import {
  ProductCardsContainer,
  SectionContainer,
  SectionName,
  SectionNameContainer,
} from '../new-arrivals-section/NewArrivalsSection.styles';

const NewArrivalsSection = () => {
  return (
    <SectionContainer maxWidth={false}>
      <SectionNameContainer>
        <SectionName variant="h6">New Arrivals</SectionName>
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

export default NewArrivalsSection;
