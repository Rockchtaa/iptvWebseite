"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const sports = [
  "/images/sport-boundesliga.jpg",
  "/images/sport-espana.jpg",
  "/images/sport-liga-1.jpg",
  "/images/sport-liga.jpg",
  "/images/sport-nba.jpg",
  "/images/sport-premier-league.jpg",
  "/images/sport-seriea.jpg",
];
export const SportSwiper = () => {
  return (
    <div className="w-full mt-16">
      <Swiper
        className="w-full"
        slidesPerView={"auto"}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 7,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
        spaceBetween={20}
        modules={[Autoplay]}
        speed={500}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {sports.map((path, index) => (
          <SwiperSlide key={index} className="">
            <Image
              className="m-auto"
              width={300}
              height={300}
              src={path}
              alt={`brand-item ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
