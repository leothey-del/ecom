import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
      fallbackImage: 'https://images.pexels.com/photos/1183428/pexels-photo-1183428.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Electronics Category - Camera',
      href: '/category/electronics',
    },
    {
      id: 2,
      name: 'Fashion',
      image: 'https://images.pexels.com/photos/159750/open-book-book-pages-literature-159750.jpeg?auto=compress&cs=tinysrgb&w=800',
      fallbackImage: 'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Fashion Category - Notebook',
      href: '/category/fashion',
    },
    {
      id: 3,
      name: 'Home & Decor',
      image: 'https://images.pexels.com/photos/903661/pexels-photo-903661.jpeg?auto=compress&cs=tinysrgb&w=800',
      fallbackImage: 'https://images.pexels.com/photos/1098378/pexels-photo-1098378.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Home & Decor Category - Mug',
      href: '/category/home-decor',
    },
    {
      id: 4,
      name: 'Accessories',
      image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=800',
      fallbackImage: 'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Accessories Category - Watch',
      href: '/category/accessories',
    },
  ];

  const handleImageError = (e, fallback) => {
    console.error(`Image failed to load: ${e.target.src}. Switching to fallback: ${fallback}`);
    e.target.src = fallback;
  };

  return (
    <div className="pt-20 mt-0 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={category.href}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80 bg-gray-200 flex items-center justify-center">
            <img
              src={category.image}
              alt={category.alt}
              className="absolute object-cover rounded-md z-0 hover:opacity-80 transition-opacity ease duration-500 w-full h-full"
              sizes="25vw"
              loading="lazy"
              onError={(e) => handleImageError(e, category.fallbackImage)}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-md hover:bg-opacity-50 transition-all duration-500">
              <span className="text-white text-xl font-semibold">{category.name}</span>
            </div>
            <span className="text-gray-500 text-sm">Image not available</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;