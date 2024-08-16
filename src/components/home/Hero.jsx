import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { useRef, useState } from 'react';

import manSinging from '../../assets/photos/man-singing.jpg';
import brassBand from '../../assets/photos/brassband.jpg';
import drumKit from '../../assets/photos/drum-kit.jpg';
import guitarLessons from '../../assets/photos/guitar-lessons.jpg';
import saxophone from '../../assets/photos/saxophone.jpg';
import womanLearningViolin from '../../assets/photos/woman-learning-violin.jpg';
import womanPlayingPiano from '../../assets/photos/woman-playing-piano.jpg';
import womanSinging from '../../assets/photos/woman-singing.jpg';

const slidesData = [
  {
    imgSrc: manSinging,
    alt: 'Man singing',
    title: 'Voices That Inspire',
    description:
      "Every voice is unique, and we're here to help you find yours. Our vocal lessons are designed to enhance your vocal range, control, and confidence, whether you’re singing solo or as part of a choir.",
    cta: 'Enroll today',
  },
  {
    imgSrc: guitarLessons,
    alt: 'Guitar lessons',
    title: 'Strum Your Way to Stardom',
    description:
      'The guitar is more than just an instrument. It’s a gateway to endless musical possibilities. Join our guitar classes and learn to strum, pick, and play with confidence, whether you’re aiming for the stage or just want to play your favorite tunes.',
    cta: 'Enroll Today',
  },
  {
    imgSrc: womanLearningViolin,
    alt: 'Woman learning violin',
    title: 'Elegance in Every Note',
    description:
      'The violin is the epitome of grace and precision. Our violin lessons are designed to help you refine your technique, develop your ear, and play with passion. Perfect for those who appreciate the delicate art of string music.',
    cta: 'Learn More',
  },
  {
    imgSrc: saxophone,
    alt: 'Saxophone',
    title: 'The Sound of Soulful Expression',
    description:
      'Dive into the world of jazz and blues with our saxophone classes. Learn to create soulful tunes and express yourself with the rich, warm tones of the saxophone. Perfect for those who want to add a touch of sophistication to their musical repertoire.',
    cta: 'Get Started',
  },
  {
    imgSrc: womanSinging,
    alt: 'Woman singing',
    title: 'Empowering Voices, Enriching Lives',
    description:
      'Unlock the full potential of your voice with our singing lessons. We focus on technique, expression, and stage presence, empowering you to sing with confidence and share your talent with the world.',
    cta: 'Get Started',
  },
  {
    imgSrc: brassBand,
    alt: 'Brass band',
    title: 'Bold Brass, Brilliant Sound',
    description:
      'Experience the power and unity of playing in a brass band. Our classes will teach you how to harmonize with other instruments and create a powerful, resonant sound that stands out in any musical ensemble.',
    cta: 'Discover More',
  },
  {
    imgSrc: drumKit,
    alt: 'Drum kit',
    title: 'Feel the Beat, Lead the Rhythm',
    description:
      'The heartbeat of any band lies within the drums. Our drum lessons are tailored to help you master rhythm, timing, and coordination, whether you’re looking to rock out on stage or keep the beat in a studio setting.',
    cta: 'Get Started',
  },
  {
    imgSrc: womanPlayingPiano,
    alt: 'Woman playing piano',
    title: 'Unleash the Harmony Within',
    description:
      'Discover the joy of piano playing at our music school. Whether you’re a beginner or an experienced musician, our expert instructors will guide you through every step, helping you master the keys and express yourself through beautiful melodies.',
    cta: 'Start Your Journey',
  },
];

const SlideContent = ({ imgSrc, alt, title, description, cta, isActive }) => (
  <>
    <img
      src={imgSrc}
      alt={alt}
      className="object-cover w-full block rounded-md"
    />
    {isActive && (
      <div className="absolute w-[90%] h-fit rounded bg-white shadow-lg  border-lg flex flex-col gap-3 items-center text-base z-20 p-4 bottom-[-152px] left-[5%]">
        <h3 className="text-lg font-semibold text-center text-secondary-dark">
          {title}
        </h3>
        <p>{description}</p>
        <button className="px-2 py-1 text-sm rounded-sm bg-secondary text-white active:scale-95 active:transition-transform active:ease-in-out active:duration-100">
          {cta}
        </button>
      </div>
    )}
  </>
);

const Hero = () => {
  const [, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="hero-container w-screen h-screen border-2 border-primary">
      <h1 className="font-league-spartan text-center text-primary font-semibold text-5xl leading-10 mt-10">
        Transforming Dreams Into Melodies
      </h1>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1.2,
          slideShadows: true,
        }}
        pagination={true}
        spaceBetween={40}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, EffectCoverflow]}
        className="border-2 border-green-500 w-full pt-[50px] pb-[190px] relative"
        onInit={() => setInit(true)}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative bg-center bg-cover w-[350px] h-[350px] select-none"
          >
            {({ isActive }) => <SlideContent {...slide} isActive={isActive} />}
          </SwiperSlide>
        ))}

        <div className="buttons absolute bottom-[106px] left-0 right-0 border-2 border-purple-600 flex justify-between px-24">
          <button
            className="py-1 bg-pink-800 px-3 text-lg active:scale-95 text-white rounded tracking-wide"
            ref={prevRef}
          >
            Previous
          </button>
          <button
            className="py-1 bg-pink-800 px-3 text-lg active:scale-95 text-white rounded tracking-wide"
            ref={nextRef}
          >
            Next
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
