import React from "react";
import Link from "next/link";
import Logout from "./Logout";
//import Swap from "./Swap";
import { useAddress,ConnectWallet } from "@thirdweb-dev/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
function NavBar() {
  const address = useAddress();
  const styles = {
    headerLink: `text-base font-medium text-white hover:text-KeenIcyBlue-80 mr-4`,
  };
const Swap = dynamic( () => {return import("./Swap");},{ ssr: false });

  return (
    <>
      <div className="flex flex-wrap border-b-slate-900/40">
        <div className="w-full">
          {address ? (
            <>
              <nav className="relative flex flex-wrap items-center justify-between py-3">
                <div className="w-full mx-auto flex flex-wrap items-center justify-between px-7">
                  <div className=" relative flex justify-between w-auto lg:static lg:block lg:justify-start">
                    <img
                      src="/assets/Logo.jpg"
                      className="float-left w-11 h-11 rounded-full"
                      alt="Urban Uprise Crew"
                    />
                  </div>

                  <ul className="flex flex-col-3 py-2 mx-auto sm:ml-auto sm:mr-3 sm:py-0" >
                  <li className="nav-item mr-3">
                  <Swap/>
                  </li>
                    <li className="nav-item mr-3 ">
                            <ConnectWallet />
                    </li>

                    <AuthenticatedHeader />
                      
                  </ul>
                </div>
              </nav>
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.33 }}
              >
                <div className=" relative  h-16 w-full  py-3 px-4 ">
                  <img
                    src="/assets/Logo.jpg"
                    className="absolute m-auto left-0 right-0 top-0 bottom-0 w-11 h-11 rounded-full"
                    alt="Urban Uprise Crew"
                  />
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

const AuthenticatedHeader = () => (
  <>
    <li className="nav-item ">
      <Logout />
    </li>
  </>
);
export default NavBar;
