import { CardMedia, CardContent, Container } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHook';
import { fetchAllCategories } from '../../../redux/reducers/categorySlice';
import {
  CategorySectionContainer,
  CategoryCardContainer,
  CategoryCard,
  CategoryName,
} from './CategorySection.styles';

const CategorySection = () => {
  const categories = useAppSelector((state) => state.categoryReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);
  return (
    <CategorySectionContainer maxWidth={false}>
      {/* <SectionNameContainer>
        <SectionName variant="h6">Categories</SectionName>
      </SectionNameContainer> */}

      {categories.slice(0, 5).map((category) => (
        <Container onClick={() => navigate(`${category.name}`)}>
          <CategoryCardContainer key={category.id}>
            <CategoryCard key={category.id}>
              <CardMedia
                sx={{ height: 250, width: '100%' }}
                image={category.image}
              />
              <CardContent>
                <CategoryName>{category.name}</CategoryName>
              </CardContent>
            </CategoryCard>
          </CategoryCardContainer>
        </Container>
      ))}
    </CategorySectionContainer>
  );
};

export default CategorySection;
