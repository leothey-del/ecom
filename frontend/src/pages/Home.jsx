import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CatergoryList';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Slider Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Slider />
        </div>
      </div>

      {/* First Product List Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductList />
        </div>
      </div>

      {/* Category List Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryList />
        </div>
      </div>

      {/* Second Product List Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductList />
        </div>
      </div>
    </motion.main>
  );
};

export default Home;