import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const Menus = ({ links }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpenMenu(!openMenu)}
        aria-label="Toggle menu"
        aria-expanded={openMenu}
        className="text-gray-400 focus:outline-none"
      >
        {openMenu ? <X size={28} /> : <Menu size={28} />}
      </button>
      {openMenu && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4">
          {links && links.length > 0 ? (
            links.map((data) => (
              <Link
                key={data.name}
                to={data.href}
                onClick={() => setOpenMenu(false)}
                className="font-bold text-gray-700 text-base transition-colors duration-200 hover:text-blue-500"
              >
                {data.name}
              </Link>
            ))
          ) : (
            <p>No links available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Menus;