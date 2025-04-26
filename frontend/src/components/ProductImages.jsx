import React, { useState } from 'react';

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/164687/pexels-photo-164687.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1559181/pexels-photo-1559181.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
];

const ProductImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].id}
          className="object-cover rounded-md w-full h-full"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((image, index) => (
          <div
            className="w-1/4 h-32 relative cursor-pointer overflow-hidden rounded-md"
            key={image.id}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={image.url}
              alt={image.id}
              className="object-cover w-full h-full transition-opacity duration-300 opacity-70 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;