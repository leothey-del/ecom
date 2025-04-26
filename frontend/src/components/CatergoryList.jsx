import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const CategoryList = () => {

  const [categories,setCategories] = useState([]);

  // Parse category slug from URL
  const searchParams = new URLSearchParams(location.search);
  const categorySlug = searchParams.get("cat");

  const fetchCategory = async () => {
    try {
    const res = await axios.get("http://localhost:5000/api/categories", {
    params: categorySlug ? { category: categorySlug } : {}
  });
    setCategories(res.data);
  } catch (err) {
    console.error("Error fetching category:", err);
  }
};

  useEffect(() => {
    fetchCategory();
  },[]);

  const navigate = useNavigate();
  
  const handleImageError = (e, fallback) => {
    console.error(`Image failed to load: ${e.target.src}. Switching to fallback: ${fallback}`);
    e.target.src = fallback;
  };

  return (
    <div className="pt-20 mt-0 overflow-x-auto scroll-smooth">
      <div className="flex gap-x-8 gap-y-16 justify-start flex-nowrap">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/list?cat=${category.slug}`}
            className="flex-shrink-0 w-72 sm:w-60 md:w-52 lg:w-48 flex flex-col gap-4"
          >
            <div className="relative w-full h-56 sm:h-48 md:h-44 lg:h-40 bg-gray-200 flex items-center justify-center">
              <img
                src={category.image}
                alt={category.alt}
                className="absolute object-cover rounded-md z-0 hover:opacity-80 transition-opacity ease duration-500 w-full h-full"
                loading="lazy"
                onError={(e) => handleImageError(e, category.fallbackImage)}
              />
            </div>
            <span className="text-center text-sm font-semibold">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;