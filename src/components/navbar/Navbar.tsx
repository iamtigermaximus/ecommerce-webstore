import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import {
  MenuContainer,
  NavigationBar,
  MenuLink,
  BrandLink,
  CartLink,
} from './Navbar.styles';
import { useAppSelector } from '../../hooks/reduxHook';
import { RootState } from '../../redux/store';
// import { searchByName } from '../../redux/reducers/productSlice';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  width: '400px',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar = () => {
  const { cartItems } = useAppSelector((state: RootState) => state.cartReducer);

  const getItemsCount = () => {
    return cartItems.reduce(
      (accumulator, item) => accumulator + item.itemQuantity,
      0
    );
  };
  return (
    <>
      <NavigationBar position="static">
        <Toolbar>
          <Box
            sx={{
              width: '150px',
            }}
          >
            <Typography variant="h6" noWrap component="div">
              <BrandLink to="/">eSHOP</BrandLink>
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              width: '150px',
            }}
          >
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={'0'} color="error">
                <CartLink to="/">
                  <FavoriteBorderIcon />
                </CartLink>
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={getItemsCount() || '0'} color="error">
                <CartLink to="/cart">
                  <ShoppingCartOutlinedIcon />
                </CartLink>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <CartLink to="/">
                <AccountBoxOutlinedIcon />
              </CartLink>
            </IconButton>
          </Box>
        </Toolbar>
      </NavigationBar>
      <MenuContainer>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box>
            <Typography variant="h6" noWrap sx={{ m: 1 }}>
              <MenuLink to="/">HOME</MenuLink>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" noWrap sx={{ m: 1 }}>
              <MenuLink to="/shop">SHOP</MenuLink>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" noWrap sx={{ m: 1 }}>
              <MenuLink to="/blog">BLOG</MenuLink>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" noWrap sx={{ m: 1 }}>
              <MenuLink to="/about">ABOUT</MenuLink>
            </Typography>
          </Box>
        </Box>
      </MenuContainer>
    </>
  );
};
export default Navbar;
