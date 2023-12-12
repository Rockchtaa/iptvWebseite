import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Description from "./components/Description";
import MoviesWrapper from "./components/MoviesWrapper";
import { SportSwiper } from "./components/SportSwiper";

export default function Home() {
  return (
    <>
      <Hero />
      <MoviesWrapper />
      <Description />
      <SportSwiper />
      <Pricing />
    </>
  );
}
