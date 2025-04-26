import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Extract query parameters
  const category = searchParams.get('cat');
  const type = searchParams.get('type');
  const min = searchParams.get('min');
  const max = searchParams.get('max');
  const sort = searchParams.get('sort');

  const fetchProducts = async () => {
    try {
      // Build params object for the API
      const params = {};
      if (category) params.category = category;
      if (type) params.type = type;
      if (min) params.min = min;
      if (max) params.max = max;
      if (sort) params.sort = sort;

      const res = await axios.get('http://localhost:5000/api/products', {
        params,
      });
      setProducts(res.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch products. Please try again.');
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category, type, min, max, sort]);

  return (
    <div className="pt-20 mt-0 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {error && <div className="text-red-500">{error}</div>}
      {products.map((product) => (
        <Link
          key={product._id}
          to={`/product/${product._id}`}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <img
              src={product.primaryImage}
              alt={product.alt}
              className="absolute object-cover rounded-md z-0 hover:opacity-0 transition-opacity ease duration-500 w-full h-full"
              sizes="25vw"
            />
            <img
              src={product.secondaryImage}
              alt={product.secondaryAlt}
              className="absolute object-cover rounded-md w-full h-full"
              sizes="25vw"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price}</span>
          </div>
          <div className="text-sm text-gray-500">{product.description}</div>
          <button className="rounded-2xl ring-1 w-max ring-lama text-lama py-2 px-4 hover:bg-red-400 hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;