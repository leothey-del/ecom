import React from 'react';
import { Link } from 'react-router-dom';
import Menus from './Menus';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';
import { links } from './data';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 bg-gradient-to-r from-blue-900 to-purple-900 backdrop-blur w-full z-10">
      <div className="max-w-7xl mx-auto h-16 p-4">
        <div className="flex items-center justify-between mx-8 md:mx-12">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between gap-12 h-full w-full">
            <div className="w-1/3 flex items-center space-x-6">
              <Link
                to="/"
                className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                My App
              </Link>
              {links.map((data) => (
                <Link
                  key={data.name}
                  to={data.href}
                  className="font-bold text-gray-200 text-base transition-colors duration-200 hover:text-blue-500 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {data.name}
                </Link>
              ))}
            </div>
            <div className="w-2/3 flex items-center justify-end space-x-4">
              <SearchBar />
              <NavIcons />
            </div>
          </div>

          <div className="flex items-center justify-between w-full md:hidden">
            <Link
              to="/"
              className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              My App
            </Link>
            <Menus links={links} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;