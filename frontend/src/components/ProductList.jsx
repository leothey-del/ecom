import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Vintage Camera',
      price: 49,
      description: 'A classic film camera with a retro design.',
      primaryImage: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
      secondaryImage: 'https://images.pexels.com/photos/1183428/pexels-photo-1183428.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Vintage Camera - Front View',
      secondaryAlt: 'Vintage Camera - Side View',
    },
    {
      id: 2,
      name: 'Leather Notebook',
      price: 29,
      description: 'Handcrafted leather notebook for journaling.',
      primaryImage: 'https://images.pexels.com/photos/159750/open-book-book-pages-literature-159750.jpeg?auto=compress&cs=tinysrgb&w=800',
      secondaryImage: 'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Leather Notebook - Cover',
      secondaryAlt: 'Leather Notebook - Open',
    },
    {
      id: 3,
      name: 'Ceramic Mug',
      price: 15,
      description: 'Handmade ceramic mug with a minimalist design.',
      primaryImage: 'https://images.pexels.com/photos/903661/pexels-photo-903661.jpeg?auto=compress&cs=tinysrgb&w=800',
      secondaryImage: 'https://images.pexels.com/photos/1098378/pexels-photo-1098378.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Ceramic Mug - Front',
      secondaryAlt: 'Ceramic Mug - Side',
    },
    {
      id: 4,
      name: 'Wooden Watch',
      price: 89,
      description: 'Eco-friendly wooden watch with quartz movement.',
      primaryImage: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=800',
      secondaryImage: 'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Wooden Watch - Face',
      secondaryAlt: 'Wooden Watch - Band',
    },
  ];

  return (
    <div className="pt-20 mt-0 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
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