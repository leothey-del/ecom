import React from 'react';
import { Link } from 'react-router-dom';

const CartModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-blue-900 text-gray-200 rounded-md shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-200 hover:text-blue-500 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mb-4">Cart is empty</div>
        <Link
          to="/cart"
          onClick={onClose}
          className="block text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-150"
        >
          View Cart
        </Link>
      </div>
    </div>
  );
};

export default CartModal;