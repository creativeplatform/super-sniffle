import Minting from "./Minting";
import Hero from "./Hero";
import Image from "next/image";

import NavBar from "./NavBar";
const myLoader = ({ src, width }) => {
  return `${src}?w=${width}}`;
};

const Main = () => {
  return (
    <>
      <NavBar />

      <div className="   h-[100vh] w-full relative">
        <Image
          loader={myLoader}
          src="assets/UUC_mint_bg.jpg"
          alt="UUC_city-of-shadows"
          layout="fill"
          className="absolute w-full h-full"
          priority
        />
        <Minting />
      </div>
      <Hero />
    </>
  );
};

export default Main;
