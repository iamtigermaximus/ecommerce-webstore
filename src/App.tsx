import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Product from './pages/product/Product';
import Profile from './pages/profile/Profile';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import NotFound from './pages/not-found/NotFound';
import Category from './pages/category/Category';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop">
            <Route path="" element={<Shop />} />
            <Route path=":title" element={<Product />} />
          </Route>
          <Route path="/category" element={<Category />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
          <Route path=":title" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
