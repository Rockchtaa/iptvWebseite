import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Description from "./components/Description";
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
