import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative">
      <div
        ref={sliderRef}
        className="w-full h-full flex transition-transform ease-in-out duration-500"
        style={{ width: `${slides.length * 100}%` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="w-full h-full flex flex-col xl:flex-row"
          >
            <div className="h-1/2 xl:w-1/2 flex flex-col justify-center items-center p-6 text-center xl:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-2">{slide.description}</h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-600 mb-4">{slide.title}</h1>
              <Link to={slide.url}>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="w-full xl:w-1/2 h-1/2 xl:h-full relative">
              <img
                src={slide.img}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Add navigation dots or arrows if you want manual control */}
      {/* <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-indigo-500' : 'bg-gray-300 hover:bg-gray-400'
            } cursor-pointer transition-colors duration-300`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Slider;