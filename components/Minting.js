import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import toast, { Toaster } from "react-hot-toast";
import { useReward } from "react-rewards";
import { BigNumber } from "ethers";
import {
  ChainId,
  useMetamask,
  useContractMetadata,
  useAddress,
  useNFTDrop,
  useNFT,
  useWalletConnect,
  useCoinbaseWallet,
  useClaimNFT,
  useEditionDrop,
  connectWithMetamask,
  useNetworkMismatch,
  useNetwork,
  useActiveClaimCondition,
} from "@thirdweb-dev/react";
import { useState } from "react";
import { motion } from "framer-motion";

const Minting = () => {
  const styles = {
    BtnWIconsDefault: `relative tracking-wider text-indigo-500 hover:border-2 max-w-[270px] py-4 my-2 hover:border-white btn text-left`,
    UCCPrimeCTABtn: `bg-[#05cc47] hover:bg-slate-700 hover:text-[#05cc47] `,
    UCCBtnDefaults: `max-w-fit hover:indigo-500 md:max-w-[100%] font-bold px-14 md:px-20   m-auto mb-4 text-sm  h-[50px] border-none capitalize text-center text-white rounded-md `,
  };
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const isOnWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  const address = useAddress();

  const nftDrop = useNFTDrop("0x42BECaFf3737CbB691894059717503bc1F03e316");


  const amount = 1;

  const totalQuantity = "100";
  const totalPrice = "0.9";

  const { mutate: claimNft, isLoading, error } = useClaimNFT(nftDrop);

  const { reward: confettiReward, isAnimating: isConfettiAnimating } =
    useReward("confettiReward", "confetti"); //for confetti celebration animation on successfully miniting

  // Load the active claim condition
  const { data: activeClaimCondition } = useActiveClaimCondition(
    nftDrop,
    BigNumber.from(0)
  );

  async function mint() {
    // Make sure the user has their wallet connected.
    if (!address) {
      connectWithMetamask();
      return;
    }

    // Make sure the user is on the correct network (same network as your NFT Drop is).
    if (isOnWrongNetwork) {
      switchNetwork && switchNetwork(ChainId.Mumbai);
      toast.error("Switch Network to Mumbai");
      return;
    }

    const tid = toast.loading("Confirm on Wallet !");
    toast.custom(<span id="confettiReward" />, { duration: 5000 });
    try {
      claimNft(
        {
          quantity: amount,
          to: address,
          tokenId: 0,
        },
        {
          onSuccess: (data) => {
            toast.success("Successfully minted NFT", {
              id: tid,
              duration: 5000,
            }),
              toast.custom(<span id="confettiReward" />, { duration: 8000 }),
              confettiReward();
            revealMint();
          },
          onError: (error) => {
            toast.error("Something went wrong", { id: tid });
          },
        }
      );
    } catch (error) {
      toast.error("Something went wrong", { id: tid });
    }
  }
  const [revealState, setRevealState] = useState(false);
  async function revealMint() {
    console.log("Reveal Click >> Do something else");
    setRevealState(true);
  }
  if (error) {
    console.error("💩 Error claiming NFT: ", error);
  } else {
    console.log("🎉 NFT claimed successfully!");
  }

  return (
    <div className=" w-full ">
      <Toaster position="bottom-center" reverseOrder={true} />
      <div className="absolute top-0 bottom-0 left-0 right-0 m-auto z-50 w-full bg-[#AE13E3] bg-opacity-20 flex flex-col ">
        <div className="relative w-full h-full ">
          <div className="absolute m-auto left-0 top-0 bottom-0 right-0 max-w-fit max-h-fit mt-10 z-30 overflow-hidden ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-base text-center uppercase italic font-bold text-purple-300  tracking-widest">
                Welcome to the
              </p>
            </motion.div>

            <motion.div
             initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1 }}
            >
              <div
                className="glitch max-w-lg opacity-60 overflow-hidden"
                data-text="Urban Uprise Crew"
              >
                <span className="glitch__color glitch__color--red">
                  Urban Uprise Crew
                </span>
                <span className="glitch__color glitch__color--blue">
                  Urban Uprise Crew
                </span>
                <span className="glitch__color glitch__color--green">
                  Urban Uprise Crew
                </span>
                <span className="glitch__main ">Urban Uprise Crew</span>
                <span className="glitch__line glitch__line--first"></span>
                <span className="glitch__line glitch__line--second"></span>
              </div>
            </motion.div>

            {address ? (
              <></>
            ) : (
              <>
                <div className="pt-20 md:pt-10 md:inline-flex md:gap-6 w-full  text-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <label
                      htmlFor="my-modal"
                      className={`btn modal-button ${styles.UCCBtnDefaults} ${styles.UCCPrimeCTABtn}`}
                    >
                      Connect Wallet
                    </label>
                    <input
                      type="checkbox"
                      id="my-modal"
                      className="modal-toggle"
                    />
                    <div className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box p-0">
                        <div className="modal-header font-medium border-b-4 border-slate-700/30   capitalize px-7 py-5">
                          <h3 className="uppercase italic font-black text-sky-200/70 ">
                            Choose your wallet
                          </h3>
                        </div>
                        <ul
                          tabIndex="0"
                          className="menu text-left w-fit py-3 my-7  m-auto"
                        >
                          <label
                            className={styles.BtnWIconsDefault}
                            onClick={connectWithMetamask}
                          >
                            <img
                              className="absolute left-5 h-[23px] mr-3"
                              src="/assets/Wallets/metamask.svg"
                            />
                            <span className="ml-0">MetaMask</span>
                          </label>
                          <label
                            className={styles.BtnWIconsDefault}
                            onClick={connectWithWalletConnect}
                          >
                            <img
                              className="absolute left-3 h-[23px] mr-3"
                              src="/assets/Wallets/WalletConnect-icon.svg"
                            />
                            <span className="ml-11"> Wallet Connect</span>
                          </label>
                          <label
                            className={styles.BtnWIconsDefault}
                            onClick={connectWithCoinbaseWallet}
                          >
                            <img
                              className="absolute left-3 h-[30px] mr-3"
                              src="/assets/Wallets/cbw.svg"
                            />
                            <span className="ml-11"> Coinbase Wallet</span>
                          </label>
                        </ul>
                        <div className="modal-action border-t-4 border-slate-700/30 py-5 px-7">
                          <label
                            htmlFor="my-modal"
                            className="btn min-w-[120px] tracking-wider"
                          >
                            Close
                          </label>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 2 }}
                    whileHover={{
                      filter: [
                        "hue-rotate(0) contrast(100%)",
                        "hue-rotate(320deg) contrast(200%)",

                        "hue-rotate(45deg) contrast(300%)",

                        "hue-rotate(0) contrast(100%)",
                      ],
                    }}
                  >
                    <CrossmintPayButton
                      className={styles.UCCBtnDefaults}
                      clientId="2ecfdea0-b3f0-4f91-9689-3f9a06b92fbd"
                      mintConfig={{
                        type: "thirdweb-drop",
                        totalPrice: totalPrice,
                        quantity: totalQuantity,
                      }}
                    />{" "}
                  </motion.div>
                </div>
              </>
            )}
          </div>
          {address ? (
            <>
              <motion.div
                animate={{
                  fontSize: 50,

                  opacity: 1,
                }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.22 }}
              >
                <div className=" mt-8 md:mt-1.5 relative  max-w-fit m-auto z-50">
                  {isLoading ? (
                    <>
                      <div className="text-center rounded-xl z-50 bg-black/90 w-full h-full absolute left-0 right-0 top-0 bottom-0 m-auto">
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ delay: 1 }}
                          className="h-20 w-fit text-center absolute m-auto left-0 right-0 top-0 bottom-0"
                        >
                          <span className=" text-xs font-bold uppercase text-green-400 tracking-widest ">
                            <div
                              className="glitch max-w-[120px]  text-xs opacity-60"
                              data-text="Minting"
                            >
                              <span className="text-xs glitch__main ">
                                {"<"} Minting {">"}
                              </span>
                            </div>
                          </span>
                        </motion.span>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  <motion.div
                    initial={{ rotate: [0, 0, 0, 0] }}
                    animate={{
                      filter: [
                        "hue-rotate(0) contrast(100%)",
                        "hue-rotate(320deg) contrast(200%)",

                        "hue-rotate(45deg) contrast(300%)",

                        "hue-rotate(0) contrast(100%)",
                      ],
                    }}
                    exit={{ rotate: [0, 0, 0, 0] }}
                    whileHover={{ rotate: [0, 1, -1, 0] }}
                    transition={{ delay: 0.0, duration: 0.22 }}
                  >
                    <div className="w-fit bg-white bg-gray-800 rounded-xl shadow-lg dark:bg-gray-800 m-auto">
                      <div className=" text-center">
                        {revealState == false ? (
                          <>
                            <h1 className="text-xl tracking-wider font-black italic my-2 uppercase dark:text-white">
                              <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 1 }}
                              >
                                <span className="text-center p-3 text-xs font-bold uppercase text-purple-400 tracking-widest ">
                                  Free a creative soul from captivity
                                </span>
                              </motion.span>{" "}
                              <br />
                              <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 1.25 }}
                              >
                                URBAN UPRISE CREW
                              </motion.span>
                            </h1>
                          </>
                        ) : (
                          <>
                            <motion.span
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ delay: 1 }}
                            >
                              <span className="text-center p-3 text-xs font-bold uppercase text-green-400 tracking-widest ">
                                You have successfully
                              </span>
                              <br />
                              <span className="text-center p-3 text-xs font-bold uppercase text-purple-300 tracking-widest ">
                                freed a soul from captivity
                              </span>
                            </motion.span>{" "}
                          </>
                        )}
                      </div>
                      {revealState == false ? (
                        <>
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 1.35 }}
                          >
                            <img
                              className="object-scale-down pb-2 w-full max-h-80   "
                              src="/assets/UUCmint.gif"
                              alt="UUC Animation" 
                            />
                          </motion.span>
                        </>
                      ) : (
                        <>
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 1.35 }}
                          >
                            <video
                              autoPlay
                              loop
                              controls
                              className="object-scale-down max-w-fit max-h-[21rem]"
                              alt="UUC Animation"
                            >
                              <source
                                type="video/mp4"
                                src="/assets/GenericReveal.mp4"
                              />
                            </video>
                          </motion.span>
                        </>
                      )}

                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.45 }}
                        className="text-center bg-gray-900 max-w-full "
                      >
                        {revealState == false ? (
                          <>
                            <motion.span
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ delay: 1.55 }}
                            >
                              <h3 className="text-center p-3 text-xs font-bold uppercase text-KeenLight-70 tracking-widest text-LightGreen-100">
                                Total Minted
                              </h3>
                            </motion.span>
                            <motion.span
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ delay: 1.75 }}
                            >
                              <span className="block m-auto w-fit bg-slate-300/10  text-xs font-bold  px-3 py-2 rounded text-green-400">
                                {activeClaimCondition ? (
                                  <p>
                                    <b>
                                      {activeClaimCondition.currentMintSupply}
                                    </b>
                                    {" / "}
                                    {activeClaimCondition.maxQuantity}
                                  </p>
                                ) : (
                                  <p>Loading...</p>
                                )}
                              </span>
                            </motion.span>
                          </>
                        ) : (
                          <>
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ delay: 1 }}
                              className="pt-7"
                            >
                              <span className="text-center  p-3 text-base font-bold uppercase text-purple-300 italic tracking-widest ">
                                Welcome to the UUC <br />
                              </span>
                              <p>Start your creative journey</p>
                            </motion.div>{" "}
                          </>
                        )}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.95 }}
                      >
                        <div className="flex items-center rounded-b-xl justify-between px-4 py-2 bg-gray-900 h-20">
                          {revealState == false ? (
                            <>
                              <motion.button
                                whileHover={{
                                  filter: [
                                    "hue-rotate(0) contrast(100%)",
                                    "hue-rotate(320deg) contrast(200%)",

                                    "hue-rotate(45deg) contrast(300%)",

                                    "hue-rotate(0) contrast(100%)",
                                  ],
                                }}
                                transition={{ delay: 0.0, duration: 0.22 }}
                                className="flex-1 py-3  bg-green-500/50 hover:bg-indigo-500/50 hover:text-slate-200/80 hover:tracking-widest text-white text-md font-bold rounded-md uppercase disabled:bg-gray-400 transition-all ease-in"
                                disabled={isLoading}
                                onClick={() => mint()}
                              >
                                {isLoading ? (
                                  <>Minting...</>
                                ) : (
                                  <span>Mint</span>
                                )}
                              </motion.button>
                            </>
                          ) : (
                            <>
                              <motion.a
                                whileHover={{
                                  filter: [
                                    "hue-rotate(0) contrast(100%)",
                                    "hue-rotate(320deg) contrast(200%)",

                                    "hue-rotate(45deg) contrast(300%)",

                                    "hue-rotate(0) contrast(100%)",
                                  ],
                                }}
                                transition={{ delay: 0.0, duration: 0.22 }}
                                className="bg-indigo-500/50 py-3 px-5 w-full text-center rounded uppercase tracking-widest font-bold text-green-400"
                                href="https://discord.gg/WKp3Enj8Ff"
                              >
                                Join The Crew
                              </motion.a>
                            </>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Minting;
