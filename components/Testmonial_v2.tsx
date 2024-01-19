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
    <div className="py-10">
      <div className="flex flex-col px-5 mx-10 items-center justify-center text-5xl text-cyan-400 font-semibold">
          What our patients say
      </div>
      <div className="flex flex-row items-center justify-center">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView='auto'
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints = {{
            480: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            780: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            1330: {
              slidesPerView: 3,
              spaceBetween: 0
            }
          }}
        >
          <SwiperSlide><Testimonycard quote="Fix Health worked wonders for me! In just a few sessions, their physiotherapy team eased my pain and improved my mobility. I can now live life without discomfort." name="Anirban" profession="SDE" issue="Ankle injury" p_image={img1}/></SwiperSlide>
          <SwiperSlide><Testimonycard quote="I had amazing results with Fix Health! Their physiotherapy team restored my mobility and reduced my pain in a matter of few sessions. I'm comfortable living my life now." name="Prerna" profession="UI/UX Designer" issue="Neck pain" p_image={img2}/></SwiperSlide>
          <SwiperSlide><Testimonycard quote="My experience with Fix Health was fantastic! My mobility was enhanced and my discomfort was reduced in a matter of short sessions by their physiotherapy staff." name="Amman" profession="Aerospace Engineer" issue="Shoulder Pain" p_image={img3}/></SwiperSlide>
          <SwiperSlide><Testimonycard quote="Choosing Fix Health for physiotherapy was a game-changer. Their expertise and genuine concern for my well-being were evident in every session." name="Justin" profession="Pilot" issue="Back Pain" p_image={img4}/></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Testmonial_v2
