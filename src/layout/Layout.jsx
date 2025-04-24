import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppRoute from '../route/AppRoute';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <AppRoute />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;