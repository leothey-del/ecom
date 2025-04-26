import React from 'react';
import { Link } from 'react-router-dom'; // If you need links
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3 h-full">
          <img
            src="https://images.pexels.com/photos/1572878/pexels-photo-1572878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Woman"
            className="object-contain absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
       <Filter/>
      {/* Add your product listing or other content below the campaign section */}
      <div className="py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Products</h2>
        {/* Example Product List */}
       <ProductList/>
      </div>
    </div>
  );
};

export default ListPage;