//@ts-ignore
import freekeys from "freekeys";

export const getMovies = async () => {
  const { tmdb_key } = await freekeys();
  const result = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${tmdb_key}`,
    { cache: "force-cache" }
  );
  console.log("done");

  return result.json();
};
