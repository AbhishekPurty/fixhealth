import React from 'react'
import Testimonycard from './Testimonycard';
import img1 from '@/public/p1.jpg';
import img2 from '@/public/p2.jpg';
import img3 from '@/public/p3.jpg';
import img4 from '@/public/p4.jpg';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testmonial_v2 = () => {
  return (
    <div className="">
        <div className="flex items-center justify-center text-5xl text-cyan-400 font-semibold">
            Testimonials
        </div>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Testimonycard quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tortor non massa lacinia iaculis. Aliquam feugiat lacus tellus, ac tempus lorem sagittis ut. Sed ut orci accumsan, sollicitudin lacus sed, pretium mi." name="Abhishek" profession="Student" issue="Chest Pain" p_image={img1}/></SwiperSlide>
      <SwiperSlide><Testimonycard quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tortor non massa lacinia iaculis. Aliquam feugiat lacus tellus, ac tempus lorem sagittis ut. Sed ut orci accumsan, sollicitudin lacus sed, pretium mi." name="Anirban" profession="Student" issue=" Pain" p_image={img2}/></SwiperSlide>
      <SwiperSlide><Testimonycard quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tortor non massa lacinia iaculis. Aliquam feugiat lacus tellus, ac tempus lorem sagittis ut. Sed ut orci accumsan, sollicitudin lacus sed, pretium mi." name="Amman" profession="Student" issue="Leg Pain" p_image={img3}/></SwiperSlide>
      <SwiperSlide><Testimonycard quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tortor non massa lacinia iaculis. Aliquam feugiat lacus tellus, ac tempus lorem sagittis ut. Sed ut orci accumsan, sollicitudin lacus sed, pretium mi." name="Justin" profession="Student" issue="Back Pain" p_image={img4}/></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Testmonial_v2
