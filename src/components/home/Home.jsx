import React from 'react';
import Hero from './Hero';
import About from './About';
import Categories from './Categories';

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
      <Categories />
    </main>
  );
};

export default Home;
