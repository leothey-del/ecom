import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, ShoppingCart } from 'lucide-react';
import CartModal from './CartModal';

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const profileRef = useRef(null);
  const cartRef = useRef(null);

  const handleProfileClick = () => {
    setIsProfileOpen((prev) => !prev);
    setIsCartOpen(false); // Close cart modal if open
  };

  const handleCartClick = () => {
    setIsCartOpen((prev) => !prev);
    setIsProfileOpen(false); // Close profile dropdown if open
  };

  // Close dropdown and modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        cartRef.current &&
        !cartRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
        setIsCartOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center space-x-4">
      {/* Notifications Icon */}
      <div className="relative">
        <button
          type="button"
          className="relative text-gray-200 hover:text-blue-500 transition-colors duration-200 focus:outline-none"
        >
          <Bell size={24} />
        </button>
      </div>

      {/* Profile Icon with Dropdown */}
      <div className="relative" ref={profileRef}>
        <button
          type="button"
          onClick={handleProfileClick}
          className="relative text-gray-200 hover:text-blue-500 transition-colors duration-200 focus:outline-none"
        >
          <User size={24} />
        </button>
        {isProfileOpen && (
          <div className="absolute top-10 right-0 bg-blue-900 text-gray-200 rounded-md shadow-lg py-2 w-48 text-sm z-50">
            <Link
              to="/profile"
              onClick={() => setIsProfileOpen(false)}
              className="block px-4 py-2 hover:bg-blue-800 transition-colors duration-150"
            >
              Profile
            </Link>
            <Link
              to="/logout"
              onClick={() => setIsProfileOpen(false)}
              className="block px-4 py-2 hover:bg-blue-800 transition-colors duration-150"
            >
              Logout
            </Link>
          </div>
        )}
      </div>

      {/* Cart Icon with Modal */}
      <div className="relative" ref={cartRef}>
        <button
          type="button"
          onClick={handleCartClick}
          className="relative text-gray-200 hover:text-blue-500 transition-colors duration-200 focus:outline-none"
        >
          <ShoppingCart size={24} />
        </button>
      </div>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default NavIcons;