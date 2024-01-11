'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SliderBanner.css';
import { IoPauseOutline, IoPlaySharp } from 'react-icons/io5';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import SliderBannerItem from './SliderBannerItem';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { SwiperOptions } from 'swiper/types';

const swiperOptions: SwiperOptions = {
  autoplay: { disableOnInteraction: false },
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 15,
  navigation: {
    prevEl: '.banner-inner-prev-btn',
    nextEl: '.banner-inner-next-btn',
  },
  pagination: {
    type: 'fraction',
    el: '.banner-pagination',
    renderFraction: (currentClass, totalClass) => {
      return (
        '<span class="mx-2 text-black inline-block w-7 text-center ' +
        currentClass +
        '"></span>' +
        '<span class="inline-block w-[1px] h-3 bg-zinc-400 "></span>' +
        '<span class="inline-block mx-2 text-zinc-400 w-7 text-center ' +
        totalClass +
        '"></span>'
      );
    },
  },
  loop: true,
};

// 아이템 크기 350 * 448
export default function SliderBanner() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass>();
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  // 마운트 시 swiper autopaly 시작
  useEffect(() => {
    swiperInstance?.autoplay.start();
  }, [swiperInstance]);

  return (
    <div className=' max-w-screen-xl mx-auto  select-none'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={setSwiperInstance}
        onAutoplayStart={() => {
          setIsAutoPlay(true);
        }}
        onAutoplayStop={() => {
          setIsAutoPlay(false);
        }}
        {...swiperOptions}
      >
        <SwiperSlide style={{ marginRight: '15px' }}>
          <SliderBannerItem
            src={'/assets/slide/banner-img2.jpeg'}
            description={{
              title1: '애슐리 홈스토랑',
              title2: '맛있는 2024년',
              text: '간편식&밀키트',
            }}
            className='relative w-[370px] h-[450px]'
          />
        </SwiperSlide>
        <SwiperSlide style={{ marginRight: '15px' }}>
          <SliderBannerItem
            src={'/assets/slide/banner-img1.jpeg'}
            description={{
              title1: '요즘 맘카페에서',
              title2: '인기 있어요',
              text: '몰리엘리',
            }}
            className='relative w-[370px] h-[450px]'
          />
        </SwiperSlide>
        <SwiperSlide style={{ marginRight: '15px' }}>
          <SliderBannerItem
            src={'/assets/slide/banner-img3.jpeg'}
            className='relative w-[370px] h-[450px]'
          />
        </SwiperSlide>
        <SwiperSlide style={{ marginRight: '15px' }}>
          <SliderBannerItem
            src={'/assets/slide/banner-img4.jpeg'}
            className='relative w-[370px] h-[450px]'
          />
        </SwiperSlide>
        <SwiperSlide style={{ marginRight: '15px' }}>
          <SliderBannerItem
            src={'/assets/slide/banner-img5.jpeg'}
            className='relative w-[370px] h-[450px]'
            description={{
              title1: 'HELLO 2024',
              title2: '뷰티풀한 혜택',
              text: '설화수,오쏘몰,피지오겔',
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ marginRight: '15px' }}>
          <SliderBannerItem
            src={'/assets/slide/banner-img6.jpeg'}
            description={{
              title1: '따뜻한 행복으로',
              title2: '겨울을 채워봐요',
              text: '이머스아동',
            }}
            className='relative w-[370px] h-[450px]'
          />
        </SwiperSlide>

        {/* 사이드 prev, next button */}
        <div className='banner-inner-prev-btn absolute top-[50%] left-0 z-50 bg-black bg-opacity-30 -translate-y-1/2 text-white rounded-r-full p-2 cursor-pointer'>
          <MdKeyboardArrowLeft size={40} />
        </div>
        <div className='banner-inner-next-btn absolute top-[50%] right-0 z-50 bg-black bg-opacity-30 -translate-y-1/2 text-white rounded-l-full p-2 cursor-pointer'>
          <MdKeyboardArrowRight size={40} />
        </div>
      </Swiper>
      {/* pagenation, interaction part */}
      <div className='flex text-zinc-400 justify-center items-center mt-2'>
        <button onClick={() => swiperInstance?.slideNext()}>
          <MdKeyboardArrowLeft size={20} />
        </button>
        <div
          className='banner-pagination flex-grow-0  '
          style={{ width: 'auto' }}
        ></div>
        <button onClick={() => swiperInstance?.slideNext()}>
          <MdKeyboardArrowRight size={20} />
        </button>
        {!isAutoPlay ? (
          <button onClick={() => swiperInstance?.autoplay.start()}>
            <IoPlaySharp size={20} />
          </button>
        ) : (
          <button
            onClick={() => {
              swiperInstance?.autoplay.stop();
            }}
          >
            <IoPauseOutline size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
