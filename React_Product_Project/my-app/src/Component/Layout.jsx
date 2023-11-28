
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './ProductPage';
import AboutPage from './AboutPage';
import CartPage from './CartPage';
import NavigationBar from './NAvigationBar';
import MyBagPage from './MyBagPage';

const Layout = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/my-bag" element={<MyBagPage/>} />

        </Routes>
      </div>
    </Router>
  );
};

export default Layout;
