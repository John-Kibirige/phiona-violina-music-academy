import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectCoverflow, Thumbs, Navigation, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';



const Programs = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);
  return (
    <section className="h-screen font-sans text-white">
      <Swiper
        className="w-full h-full"
        loop={true}
        speed={1200}
        direction="vertical"
        mousewheel={true}
        spaceBetween={0}
        slidesPerView={1}
        effect="coverflow"
        modules={[Mousewheel, EffectCoverflow, Thumbs]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 10,
          modifier: 1,
          slideShadows: true,
        }}
        thumbs={{ swiper: thumbsSwiper }}
      >
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center text-white text-[18px] bg-gradient-to-b from-orange-500 to-gray-900 ">
          <h2 className="absolute top-10 right-80 transform rotate-90 translate-x-[45%] translate-y-full font-p22 text-[40px]">
            Phiona Violin Music Academy
          </h2>
          <div className="absolute text-[14px] left-20 bottom-40 leading-[2]">
            <p className="font-semibold mt-10">We are coming</p>
            <span className="block leading-[1.5] font-extralight">
              @ Muhumuza Muhuan meets innovation
            </span>
            <p>MILES LEGEND</p>
            <span>Bold, modern, and technical</span>
          </div>
          <div className="absolute text-[14px] right-10 bottom-40">
            <p className="font-semibold mt-10">True</p>
            <span className="block leading-[1.5] font-extralight mb-10">
              @ Ye Ye Ye
            </span>
            <h3 className="text-[30px]">MILES LEGEND</h3>
            <div className="flex mt-10">
              <button className="px-6 py-4 font-sans  bg-white/10 text-white text-xs cursor-pointer">
                Buy Now
              </button>
              <button className="px-6 py-4 font-sans  bg-black/25 text-white text-xs cursor-pointer">
                Add to cart
              </button>
            </div>
          </div>
          <img src="image/1.png" alt="1" className="object-cover h-full"></img>
        </SwiperSlide>

        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center text-white text-[18px] bg-gradient-to-b from-blue-900 to-gray-900 ">
          <h2 className="absolute top-10 right-80 transform rotate-90 translate-x-[45%] translate-y-full font-p22 text-[40px]">
            Phiona Violin Music Academy
          </h2>
          <div className="absolute text-[14px] left-20 bottom-40 leading-[2]">
            <p className="font-semibold mt-10">We are coming</p>
            <span className="block leading-[1.5] font-extralight">
              @ Muhumuza Muhuan meets innovation
            </span>
            <p>MILES LEGEND</p>
            <span>Bold, modern, and technical</span>
          </div>
          <div className="absolute text-[14px] right-10 bottom-40">
            <p className="font-semibold mt-10">True</p>
            <span className="block leading-[1.5] font-extralight mb-10">
              @ Ye Ye Ye
            </span>
            <h3 className="text-[30px]">MILES LEGEND</h3>
            <div className="flex mt-10">
              <button className="px-6 py-4 font-sans  bg-white/10 text-white text-xs cursor-pointer">
                Buy Now
              </button>
              <button className="px-4 py-4 font-sans  bg-black/25 text-white text-xs cursor-pointer">
                Add to cart
              </button>
            </div>
          </div>
          <img src="image/2.png" alt="2" className="object-cover h-full"></img>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center text-white text-[18px] bg-gradient-to-b from-pink-300 to-gray-900 ">
          <h2 className="absolute top-10 right-80 transform rotate-90 translate-x-[45%] translate-y-full font-p22 text-[40px]">
            Phiona Violin Music Academy
          </h2>
          <div className="absolute text-[14px] left-20 bottom-40 leading-[2]">
            <p className="font-semibold mt-10">We are coming</p>
            <span className="block leading-[1.5] font-extralight">
              @ Muhumuza Muhuan meets innovation
            </span>
            <p>MILES LEGEND</p>
            <span>Bold, modern, and technical</span>
          </div>
          <div className="absolute text-[14px] right-10 bottom-40">
            <p className="font-semibold mt-10">True</p>
            <span className="block leading-[1.5] font-extralight mb-10">
              @ Ye Ye Ye
            </span>
            <h3 className="text-[30px]">MILES LEGEND</h3>
            <div className="flex mt-10">
              <button className="px-6 py-4 font-sans  bg-white/10 text-white text-xs cursor-pointer">
                Buy Now
              </button>
              <button className="px-6 py-4 font-sans  bg-black/25 text-white text-xs cursor-pointer">
                Add to cart
              </button>
            </div>
          </div>
          <img src="image/3.png" alt="3" className="object-cover h-full"></img>
        </SwiperSlide>
      </Swiper>

      <div className="fixed top-80 right-30 py-4 px-20 justify-center items-center z-10 w-72 overflow-hidden">
        <Swiper className="justify-center items-center">
          <SwiperSlide className="h-12 cursor-pointer  bg-orange-500">
            <img
              src="image/1.png"
              alt="Thumbnail-1"
              className="object-cover h-full flex items-center justify-center"
            ></img>
          </SwiperSlide>
          <SwiperSlide className="h-12 cursor-pointer justify-center items-center bg-blue-900">
            <img
              src="image/2.png"
              alt="Thumbnail-2"
              className="object-cover h-full flex items-center justify-center"
            ></img>
          </SwiperSlide>
          <SwiperSlide className="h-12 cursor-pointer justify-center items-center bg-pink-300">
            <img
              src="image/3.png"
              alt="Thumbnail-3"
              className="object-cover h-full flex items-center justify-center"
            ></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Programs
