import React from "react";
import Partnerships from "./Partnerships";
import { useState } from "react";
import { useAddress } from "@thirdweb-dev/react";

function Hero() {
  const [isShown, setIsShown] = useState(false);
  const address = useAddress();

  const styles = {
    CenterElement: `top-0 bottom-0 left-0 right-0 absolute m-auto`,
    UCCPrimeCTABtn: `bg-[#05cc47] hover:bg-sky-300 w-fit m-auto center`,
    UCCBtnDefaults: `max-w-[350px] font-bold  px-20 w-full text-sm px-3 h-[50px] border-none capitalize text-center flex-1 inline-flex items-center text-white text-sm rounded-md `,
  };
  return (
    <div className="max-w-screen-lg w-full pt-20">
      <div
        className="relative w-full h-[350px] mt-28 blur-2xl hover:blur-none transition-all ease-in duration-300"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <img
          src="https://urbanuprisecrew.com/wp-content/uploads/2022/07/BannerUpdated.png"
          className="absolute top-0 left-0 right-0 bottom-0 m-auto w-full cover "
        />
        {isShown ? (
          <>
            <span className="m-auto top-0 w-fit left-0 right-0 font-black text-sm uppercase tracking-widest text-center absolute">
              Free a soul from captivity
            </span>
          </>
        ) : (
          <>
            <div className="h-[350px] w-[350px] relative m-auto left-0 right-0 mt-11">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7d8dff] opacity-25"></span>
            </div>
          </>
        )}
      </div>
      <div className="w-3/4 max-w-[500px] m-auto text-center relative">
        <div className="my-20">
          <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r capitalize from-red-300 to-sky-500 leading-snug mb-2">
            The story of the Urban Uprise Crew
          </h3>
          <p>
            An army of 10,000 musicians, artists, and their fans who had their
            creative souls stolen by the tricky money-hungry Shadow Dwellers.
          </p>
          <h3 className="mt-20 text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r capitalize from-red-300 to-sky-500 leading-snug mb-2">
            Why Join UUC
          </h3>
          <p>
            We call on you to mint a Crew Member which will free a soul from
            captivity. The more we free, the bigger our creative power becomes,
            revealing a fury of talent that will destroy the Shadow Dwellers'
            rule, forever.
          </p>
        </div>
      </div>

      <Partnerships />
    </div>
  );
}

export default Hero;
