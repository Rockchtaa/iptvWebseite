"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { IMoviesResult } from "./MoviesWrapper";

export const MoviesSwiper = async ({
  movies,
}: {
  movies: IMoviesResult[];
}) => {
  return (
    <div className="mt-16">
      <Swiper
        className="w-screen px-10"
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
        {movies.map((movie, index) => (
          <SwiperSlide key={index} className="">
            <Image
              className="m-auto"
              width={300}
              height={300}
              src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
              alt={`brand-item ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
