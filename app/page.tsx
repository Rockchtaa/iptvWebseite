import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Description from "./components/Description";
import { CustomSwiper } from "./components/Swiper";
import { MoviesSwiper } from "./components/MoviesSwiper";
import MoviesWrapper from "./components/MoviesWrapper";

export default function Home() {
  return (
    <>
      <Hero />
      <MoviesWrapper />
      <Description />
      <Pricing />
    </>
  );
}
