import React from 'react';
import aboutPhoto from '../../assets/photos/about-us-photo.jpg';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <section className=" about-home-background lg:py-5 relative">
      <div className=" px-4 text-white flex flex-col gap-5 my-6 lg:px-[2vw]">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
          About Our Music Academy
        </h2>

        <div className="main-content flex flex-col gap-5 sm:grid sm:grid-cols-2 px-[3vw] lg:gap-[3vw]">
          <div className="text-sm tracking-wide leading-6 flex flex-col gap-4 lg:text-lg">
            <div className="flex flex-col gap-4 lg:gap-5">
              <p>
                At Phiona Violina Music Academy, we are dedicated to nurturing
                musical talents in a supportive and inclusive environment. Our
                vision is to empower creative expression, enrich lives, and
                build a harmonious community through the joy of music. We offer
                high-quality music education that emphasizes technique, theory,
                and performance for students of all ages and skill levels.
              </p>
              <p>
                We believe in fostering creativity, confidence, and
                self-expression, helping each student grow into their unique
                musical potential. Join us to explore your passion for music,
                and develop the skills needed for personal and artistic success.
              </p>
            </div>
            <NavLink to={'/about-us'} className="block ml-auto">
              <button className=" px-3 py-1 bg-secondary text-white active:scale-95 w-fit ml-auto rounded mt-5">
                About Us
              </button>
            </NavLink>
          </div>
          <div className="relative w-full h-[350px] max-w-[420px] lg:absolute mx-auto lg:top-16 lg:right-9 xl:top-2 xl:right-12 lg:w-[44vw] lg:h-[37vw] about-bg-2 lg:max-w-[600px] lg:max-h-[500px] rounded">
            <div className="overlay w-full h-full bg-primary opacity-40 absolute top-0 left-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
