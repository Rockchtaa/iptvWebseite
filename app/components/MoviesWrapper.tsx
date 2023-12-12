"use server";

import React, { Suspense } from "react";
import { getMovies } from "../api";
import { MoviesSwiper } from "./MoviesSwiper";
import { SportSwiper } from "./SportSwiper";

export interface IMoviesResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async function () {
  const movies = await getMovies();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MoviesSwiper movies={movies.results as IMoviesResult[]} />
    </Suspense>
  );
}
