import React from 'react';
import SingleService from './SingleService';
import PianoSvg from '../../svgs/instruments/Piano';
import GuitarSvg from '../../svgs/instruments/Guitar';
import ViolinSvg from '../../svgs/instruments/Violin';
import DrumsSvg from '../../svgs/instruments/Drums';
import SaxophoneSvg from '../../svgs/instruments/Saxophone';
import Microphone from '../../svgs/instruments/Microphone';

const Instruments = () => {
  const instrumentsData = [
    {
      name: 'Piano',
      icon: PianoSvg,
      description:
        'Discover the joy of playing the piano, from classical pieces to modern songs. Our lessons are designed to develop your technique and musical expression.',
      cta: 'Learn Piano Today',
    },
    {
      name: 'Guitars (Electric, Bass, Acoustic, Classical)',
      icon: GuitarSvg,
      description:
        "Whether you're into rock, jazz, or classical, our guitar lessons cover everything from basics to advanced techniques, for all styles and preferences.",
      cta: 'Start Your Guitar Journey',
    },
    {
      name: 'Violin',
      icon: ViolinSvg,
      description:
        'Learn the art of the violin with personalized lessons that guide you from beginner to advanced levels. Refine your skills and play with confidence.',
      cta: 'Play the Violin Now',
    },
    {
      name: 'Drums',
      icon: DrumsSvg,
      description:
        'From basic beats to complex rhythms, our drum lessons will have you keeping time like a pro. Learn to create dynamic and energetic music',
      cta: 'Learn Drumming Today',
    },
    {
      name: 'Saxophone',
      icon: SaxophoneSvg,
      description:
        "Explore the vibrant tones of the saxophone. Our lessons help you master control, tone, and improvisation, whether you're a beginner or experienced.",
      cta: 'Start Saxophone Lessons',
    },
    {
      name: 'Vocals (Singing)',
      icon: Microphone,
      description:
        'Our vocal coaching helps you unlock your singing potential, covering technique, range, and performance skills to shine in any genre.',
      cta: 'Start today',
    },
  ];
  return (
    <div className="px-4">
      <h3 className="text-xl md:text-2xl text-primary font-semibold leading-10 mt-2">Lessons </h3>
      <div className="my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 sm:px-2 md:grid-cols-3 md:px-5 md:gap-5 lg:gap-6 xl:gap-7 ">
          {instrumentsData.map(({ name, icon, description, cta }) => (
            <SingleService
              name={name}
              Icon={icon}
              description={description}
              cta={cta}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instruments;
