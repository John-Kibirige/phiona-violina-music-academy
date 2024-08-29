import React from 'react';
import Hero from './Hero';
import About from './About';

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
    </main>
  );
};

export default Home;
