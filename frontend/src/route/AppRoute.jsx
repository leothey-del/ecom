import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Shop from '../pages/Shop';
import Deals from '../pages/Deals';
import Notifications from '../pages/Notifications';
import Logout from '../pages/Logout';
import Cart from '../pages/Cart';
import List from '../pages/List';
import NotFound from '../pages/NotFound';
import ListPage from '../pages/ListPage';
import SinglePage from '../components/SinglePage';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/product/:productId" element={<SinglePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;