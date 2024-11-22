import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Students = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  return (
    <>
     <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-white font-bold text-5xl leading-tight mb-6">
                Meet some of our students
              </h1>
              <p className="text-white text-xl mb-8">
              we take immense pride in our talented students who embody passion, creativity, and dedication to their musical journeys. 
              </p>
              <a
                href="#"
                className="px-6 py-3 bg-white text-primary font-bold rounded-full hover:bg-blue-700 hover:text-white transition duration-200"
              >
                Join them
              </a>
            </div>
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="https://res.cloudinary.com/dedzljzlc/image/upload/v1732286450/william-recinos-qtYhAQnIwSE-unsplash_vd9bmn.jpg"
                alt="Coffee beans"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-full h-1/2 mx-auto  bg-primary" // width and height of the main Swiper container
        onSwiper={setMainSwiper} // Set the main swiper instance
      >
        <SwiperSlide className="text-center flex justify-center items-center"> {/* Align slide text */}
          <img src="https://res.cloudinary.com/dedzljzlc/image/upload/v1731678586/student-1.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dedzljzlc/image/upload/v1731678586/student-2.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dedzljzlc/image/upload/v1731678586/student-3.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dedzljzlc/image/upload/v1731678586/student-4.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dedzljzlc/image/upload/v1731678586/student-5.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dedzljzlc/image/upload/v1731678586/student-6.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dedzljzlc/image/upload/v1731678586/student-7.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dedzljzlc/image/upload/v1731678587/student-8.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dedzljzlc/image/upload/v1731679535/student-9.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dedzljzlc/image/upload/v1731679625/student-10.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-full h-1/5 box-border py-2.5 mx-auto" // Thumbnail Swiper container
      >
        {Array.from({ length: 10 }, (_, index) => (
          <SwiperSlide
            key={index}
            className="w-1/4 h-full opacity-1/2" // Thumbnail width, height, and opacity
          >
            <img
              src={`https://res.cloudinary.com/dedzljzlc/image/upload/v1731678587/student-${index + 1}.jpg`}
              onClick={() => mainSwiper.slideTo(index)} // Navigate to the corresponding slide on click
              className="block w-full h-full object-cover cursor-pointer" // Thumbnail image style
              alt={`Student ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Students;
