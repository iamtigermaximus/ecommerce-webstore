import React from 'react';
import { Product } from '../../types/product';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

interface SearchResultsProps {
  filteredProducts: Product[];
  searchTerm: string;
  onItemClick: () => void;
  showSearchResults: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  filteredProducts,
  searchTerm,
  onItemClick,
  showSearchResults,
}) => {
  const navigate = useNavigate();

  const handleClick = (productTitle: string) => {
    navigate(`/product/${productTitle}`);
    onItemClick();
  };

  const startsWithResults = filteredProducts.filter((product) =>
    product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const exactMatchResults = filteredProducts.filter(
    (product) => product.title.toLowerCase() === searchTerm.toLowerCase()
  );

  const results = [...startsWithResults, ...exactMatchResults];

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 5,
        width: '300px',
        color: 'black',
        display: showSearchResults ? 'block' : 'none',
      }}
    >
      {results.map((product) => (
        <div key={product.id}>
          <div onClick={() => handleClick(product.title)}>
            <Box sx={{ px: 1, mx: 2, border: 'none' }}>{product.title}</Box>
          </div>
        </div>
      ))}
    </Box>
  );
};

export default SearchResults;
