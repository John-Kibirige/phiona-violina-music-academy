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
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-full h-4/5 mx-auto" // width and height of the main Swiper container
        onSwiper={setMainSwiper} // Set the main swiper instance
      >
        <SwiperSlide className="text-center flex justify-center items-center bg-white"> {/* Align slide text */}
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" className="block w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-full h-1/5 box-border py-2.5 mx-auto" // Thumbnail Swiper container
      >
        {Array.from({ length: 10 }, (_, index) => (
          <SwiperSlide
            key={index}
            className="w-1/4 h-full opacity-40" // Thumbnail width, height, and opacity
          >
            <img
              src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`}
              onClick={() => mainSwiper.slideTo(index)} // Navigate to the corresponding slide on click
              className="block w-full h-full object-cover cursor-pointer" // Thumbnail image style
              alt={`Nature ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Students;
