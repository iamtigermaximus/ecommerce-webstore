import { Box, Typography } from '@mui/material';
import {
  ProdCard,
  ProductCardButton,
  ProductCardContent,
  ProductCardName,
  ProductCardPrice,
  CardImageContainer,
} from './ProductCard.styles';
import { useAppDispatch } from '../../hooks/reduxHook';
import { addToCart } from '../../redux/reducers/cartSlice';
import { useNavigate } from 'react-router-dom';
import { ProductCardProps } from '../../types/product';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/reducers/favoriteSlice';
import { useState } from 'react';

const ProductCard = ({
  _id,
  name,
  price,
  description,
  image,
  category,
}: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const product = { _id, name, price, description, image, category };

  const handleAddToFavorites = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (isFavorite) {
      dispatch(removeFromFavorites(_id));
    } else {
      dispatch(addToFavorites(product));
    }

    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  const handleImageClick = () => {
    navigate(`/category/${name}`);
  };

  return (
    <ProdCard key={_id}>
      <CardImageContainer onClick={handleImageClick}>
        {/* <CardMedia component="img" height="200" image={product.image} /> */}
        <LazyLoadImage effect="blur" src={image} alt={name} height={200} />

        <Box
          sx={{
            position: 'absolute',
            top: 3,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            zIndex: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: '8px',
              textTransform: 'uppercase',
              color: 'white',
              padding: '2px',
              background: '#32CD32',
              width: '100px',
              height: '20px',

              display: 'flex',
              borderRadius: '10px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {category.name}
          </Typography>
          <Box
            onClick={handleAddToFavorites}
            sx={{
              fontSize: '8px',
              padding: '2px',
              height: '20px',
              display: 'flex',
              borderRadius: '10px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {isFavorite ? (
              <FavoriteOutlinedIcon sx={{ color: 'red', cursor: 'pointer' }} />
            ) : (
              <FavoriteBorderOutlinedIcon
                sx={{ color: 'black', cursor: 'pointer' }}
              />
            )}
          </Box>
        </Box>
      </CardImageContainer>

      <ProductCardContent>
        <ProductCardButton
          variant="outlined"
          color="inherit"
          onClick={() => dispatch(addToCart(product))}
        >
          ADD TO CART
        </ProductCardButton>
        <ProductCardName
          sx={{
            textTransform: 'uppercase',
          }}
        >
          {name}
        </ProductCardName>
        <ProductCardPrice>$ {price}</ProductCardPrice>
      </ProductCardContent>
    </ProdCard>
  );
};

export default ProductCard;
