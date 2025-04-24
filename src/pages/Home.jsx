import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';

const Home = () => {
 

  const features = [
    {
      title: 'Feature One',
      description: 'Discover powerful tools to enhance your productivity with ease.',
      icon: '🚀',
    },
    {
      title: 'Feature Two',
      description: 'Seamless integration with your favorite platforms.',
      icon: '🔗',
    },
    {
      title: 'Feature Three',
      description: 'Secure and reliable performance for all your needs.',
      icon: '🔒',
    },
  ];

  return (
 

    <>
    <Slider/>
    </>
       
  );
};

export default Home;