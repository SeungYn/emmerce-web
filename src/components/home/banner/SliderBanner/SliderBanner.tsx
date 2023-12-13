'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SliderBanner.css';

// 아이템 크기 350 * 448
export default function SliderBanner() {
  return (
    <div className=' max-w-screen-xl mx-auto h-full py-6'>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={10}
        navigation
        pagination={{ type: 'fraction' }}
        loop={true}
      >
        <SwiperSlide>
          <Image
            src='/assets/slide/1.png'
            width={350}
            height={448}
            alt='배너 이미지'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/assets/slide/1.png'
            width={350}
            height={448}
            alt='배너 이미지'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/assets/slide/1.png'
            width={350}
            height={448}
            alt='배너 이미지'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/assets/slide/1.png'
            width={350}
            height={448}
            alt='배너 이미지'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/assets/slide/1.png'
            width={350}
            height={448}
            alt='배너 이미지'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/assets/slide/1.png'
            width={350}
            height={448}
            alt='배너 이미지'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
