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
    <div className="max-w-screen-lg w-full mx-auto ">
      <div
        className="relative w-full h-[350px] mt-28 blur-2xl hover:blur-none transition-all ease-in duration-300"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <img
          src="https://bafybeiaaen7gjezwhnrp5sbjbbcbw6iqr2geqfqsdnby6apxmkv3m6bcrq.ipfs.nftstorage.link/"
          className="absolute top-0 left-0 right-0 bottom-0 m-auto w-full cover "
        />
        {isShown ? (
          <>
            <span className="m-auto top-0 w-fit left-0 right-0 font-black text-sm uppercase tracking-widest text-center absolute">
              Free a creative soul from captivity
            </span>
          </>
        ) : (
          <>
            {/*   <div className="h-[350px] w-[350px] relative m-auto left-0 right-0 mt-11">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7d8dff] opacity-25"></span>
            </div> */}
          </>
        )}
      </div>
      <div className="w-3/4 max-w-[500px] m-auto text-center relative">
        <div className="my-20">
          <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r capitalize from-red-300 to-sky-500 leading-snug mb-2">
            The story of the Urban Uprise Crew
          </h3>
          <p>
            10,000 musicians, artists, and their fans had their creative souls
            captured by the Shadow Dweller Corporation who takes creativity from
            the world for their own financial gain. We call on you to mint a
            Crew Member and free a soul from captivity.
          </p>
          <h3 className="mt-20 text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r capitalize from-red-300 to-sky-500 leading-snug mb-2">
            Why Join UUC
          </h3>
          <p>
            The UUC is 10K PFP community of international musicians and NFT
            artists, centered around revolutionizing the future of the web3
            music industry. The UUC is engineering an ecosystem that provides
            opportunities, resources, and income for its holders.
          </p>
        </div>
      </div>

      <Partnerships />
    </div>
  );
}

export default Hero;
