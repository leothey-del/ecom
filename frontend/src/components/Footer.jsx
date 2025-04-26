import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* top */}
        <div className="flex mb-8">
          {/* left */}
          <div className="w-1/4 pr-4">
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="list-none space-y-2">
              <li><Link to="/about" className="hover:text-gray-100">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gray-100">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-gray-100">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gray-100">Terms of Service</Link></li>
            </ul>
          </div>
          {/* center */}
          <div className="w-1/2 px-4">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link to="#" className="hover:text-gray-100"><FaFacebook size={24} /></Link>
              <Link to="#" className="hover:text-gray-100"><FaTwitter size={24} /></Link>
              <Link to="#" className="hover:text-gray-100"><FaInstagram size={24} /></Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="mb-2">Subscribe to our newsletter for updates and special offers.</p>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-700 text-white rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md mt-2 w-full transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-1/4 pl-4">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="mb-2">123 Main Street, Anytown, USA 12345</p>
            <p className="mb-2">Email: info@example.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        {/* bottom */}
        <div className="py-4 border-t border-gray-700 flex items-center justify-between text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <div className="flex space-x-4">
            <FaCcVisa size={28} />
            <FaCcMastercard size={28} />
            <FaCcPaypal size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;