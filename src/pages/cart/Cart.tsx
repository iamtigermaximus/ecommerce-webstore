import { Box, Typography, Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  PageContainer,
  CartItemContainer,
  CartItem,
  CartItemDetails,
  CartImage,
  ProductCardName,
  ProductCardPrice,
  QuantityContainer,
} from './Cart.styles';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const Cart = () => {
  const { total, amount } = useSelector((state: RootState) => state.cart);

  return (
    <PageContainer>
      <Box
        sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 4 }}
      >
        <Typography variant="h4">YOUR BAG</Typography>
      </Box>
      {amount < 1 ? (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            my: 4,
          }}
        >
          <Typography variant="h6">is currently empty!</Typography>
        </Box>
      ) : (
        <>
          <CartItemContainer>
            <CartItem>
              <CartItemDetails>
                <CartImage image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot" />
              </CartItemDetails>

              <CartItemDetails>
                <ProductCardName>Nike shoes</ProductCardName>
                <ProductCardPrice>$100</ProductCardPrice>
                <Button variant="contained">remove</Button>
              </CartItemDetails>
              <QuantityContainer>
                <button>
                  <KeyboardArrowUpIcon />
                </button>
                <div>1</div>
                <button>
                  <KeyboardArrowDownIcon />
                </button>
              </QuantityContainer>
            </CartItem>
          </CartItemContainer>
          <CartItemContainer>
            <CartItem>
              <CartItemDetails>
                <CartImage image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot" />
              </CartItemDetails>

              <CartItemDetails>
                <ProductCardName>Nike shoes</ProductCardName>
                <ProductCardPrice>$100</ProductCardPrice>
                <Button variant="contained">Remove</Button>
              </CartItemDetails>
              <QuantityContainer>
                <button>
                  <KeyboardArrowUpIcon />
                </button>
                <div>1</div>
                <button>
                  <KeyboardArrowDownIcon />
                </button>
              </QuantityContainer>
            </CartItem>
          </CartItemContainer>
          <CartItemContainer>
            <CartItem>
              <CartItemDetails>
                <CartImage image="https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot" />
              </CartItemDetails>

              <CartItemDetails>
                <ProductCardName>Nike shoes</ProductCardName>
                <ProductCardPrice>$100</ProductCardPrice>
                <Button variant="contained">remove</Button>
              </CartItemDetails>
              <QuantityContainer>
                <button>
                  <KeyboardArrowUpIcon />
                </button>
                <div>1</div>
                <button>
                  <KeyboardArrowDownIcon />
                </button>
              </QuantityContainer>
            </CartItem>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: '100%',
              }}
            >
              <Box>
                <Typography variant="h5" sx={{ m: 2 }}>
                  Total:${total}
                </Typography>
                <Button variant="contained" sx={{ width: '100%' }}>
                  Checkout
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center ',
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: '400px',
                  backgroundColor: 'red',
                  m: 4,
                }}
              >
                Clear Cart
              </Button>
            </Box>
          </CartItemContainer>
        </>
      )}
    </PageContainer>
  );
};

export default Cart;
