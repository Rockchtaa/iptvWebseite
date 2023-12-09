"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// const firstRowimagePaths = [
//   "/images/brand_item06.webp",
//   "/images/brand_item07.webp",
//   "/images/brand_item08.webp",
//   "/images/brand_item09.webp",
//   "/images/brand_item10.webp",
//   "/images/brand_item11.webp",
//   "/images/brand_item12.webp",
// ];

const secondRowimagePaths = [
  "/images/brand_item13.webp",
  "/images/brand_item14.webp",
  "/images/brand_item15.webp",
  "/images/brand_item16.webp",
  "/images/brand_item18.webp",
  "/images/brand_item19.webp",
  "/images/brand_item06.webp",
  "/images/brand_item07.webp",
  "/images/brand_item08.webp",
  "/images/brand_item09.webp",
  "/images/brand_item10.webp",
  "/images/brand_item11.webp",
  "/images/brand_item12.webp",
];

export const CustomSwiper = () => {
  return (
    <div className="space-y-9 mt-16 flex justify-center items-center flex-col">
      <Swiper
        className="w-screen px-10 h-full"
        slidesPerView={8}
        breakpoints={{
          0: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 8,
          },
          768: {
            slidesPerView: 8,
          },
          1024: {
            slidesPerView: 8,
          },
          1280: {
            slidesPerView: 8,
          },
          1536: {
            slidesPerView: 8,
          },
        }}
        modules={[Autoplay]}
        speed={500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {secondRowimagePaths.map((path, index) => (
          <SwiperSlide key={index} className="overflow-hidden">
            <Image
              className="m-auto"
              width={120}
              height={70}
              src={path}
              alt={`brand-item ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
