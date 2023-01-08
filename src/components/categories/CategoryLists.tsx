import { Box, Button } from '@mui/material';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHook';
import { fetchAllCategories } from '../../redux/reducers/categorySlice';
import { filterBy } from '../../redux/reducers/productSlice';

const CategoryLists = () => {
  const categories = useAppSelector((state) => state.categoryReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', m: 1 }}>
      {categories &&
        categories.slice(0, 5).map((category) => (
          <Button
            variant="contained"
            sx={{ m: 1, width: '120px' }}
            key={category.id}
            onClick={() => dispatch(filterBy(category.id))}
          >
            {category.name}
          </Button>
        ))}
    </Box>
  );
};

export default CategoryLists;
