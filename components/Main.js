import Minting from "./Minting";
import Hero from "./Hero";
import Image from "next/image";
import Logout from "./Logout";
const myLoader = ({ src, width }) => {
  return `${src}?w=${width}}`;
};

const Main = () => {
  return (
    <>
      <div className="z-10  fixed top-0 right-0 w-1/6 h-fit ">
        <div className="relative max-w-fit w-full h-full   float-right  ">
          <Logout />
        </div>
      </div>

      <div className="flex flex-col items-center ">
        <div className="lg:h-[75vh] container lg:w-screen h-[500px] w-full relative">
          <Image
            loader={myLoader}
            src="/UUC_final_bg.gif"
            alt="UUC_city-of-shadows"
            layout="fill"
            className="absolute w-full h-full"
          />
          <Minting />
        </div>
        <Hero />
      </div>
    </>
  );
};

export default Main;
