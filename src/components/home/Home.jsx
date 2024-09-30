import React from 'react';
import Hero from './Hero';
import About from './About';
import Categories from './Categories';
import Services from './Services';

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
      <Categories />
      <Services />
    </main>
  );
};

export default Home;
