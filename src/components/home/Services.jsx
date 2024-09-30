import React from 'react';
import Instruments from './Instruments';
import OtherServices from './OtherServices';

const Services = () => {
  return (
    <section className="px-4 sm:px-5 py-5">
      <h2 className="text-xl md:text-2xl lg:text-3xl md:leading-10 text-secondary-dark font-bold tracking-wide">
        What we offer you
      </h2>
      <Instruments />
      <OtherServices />
    </section>
  );
};

export default Services;
