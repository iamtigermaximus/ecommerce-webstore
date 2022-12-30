import { CardMedia, CardContent } from '@mui/material';
import {
  CategorySectionContainer,
  SectionNameContainer,
  SectionName,
  CategoryCardContainer,
  CategoryCard,
  CategoryName,
} from './CategorySection.styles';

const CategorySection = () => {
  return (
    <CategorySectionContainer maxWidth={false}>
      <SectionNameContainer>
        <SectionName variant="h6">Categories</SectionName>
      </SectionNameContainer>
      <CategoryCardContainer>
        <CategoryCard>
          <CardMedia
            sx={{ height: 250, width: '100%' }}
            image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
          />
          <CardContent>
            <CategoryName>Clothes</CategoryName>
          </CardContent>
        </CategoryCard>
        <CategoryCard>
          <CardMedia
            sx={{ height: 250, width: '100%' }}
            image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
          />
          <CardContent>
            <CategoryName>Shoes</CategoryName>
          </CardContent>
        </CategoryCard>
        <CategoryCard>
          <CardMedia
            sx={{ height: 250, width: '100%' }}
            image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
          />
          <CardContent>
            <CategoryName>Furniture</CategoryName>
          </CardContent>
        </CategoryCard>
        <CategoryCard>
          <CardMedia
            sx={{ height: 250, width: '100%' }}
            image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"
          />
          <CardContent>
            <CategoryName>Others</CategoryName>
          </CardContent>
        </CategoryCard>
      </CategoryCardContainer>
    </CategorySectionContainer>
  );
};

export default CategorySection;
