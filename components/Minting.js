import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import toast, {Toaster} from 'react-hot-toast';
import { useReward } from 'react-rewards';
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

const Minting = () => {
  const styles = {
    BtnWIconsDefault: `relative tracking-wider text-indigo-500 hover:border-2 max-w-[270px] py-4 my-2 hover:border-white btn text-left`,
    UCCPrimeCTABtn: `bg-[#05cc47] hover:bg-slate-700 hover:text-[#05cc47] flex-none`,
    UCCBtnDefaults: `lg:max-w-[350px] max-w-[100%] font-bold px-20 w-full text-sm  h-[50px] border-none capitalize text-center flex-1 inline-flex  items items-center text-white rounded-md `,
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
  const totalPrice = "17730";

  const { mutate: claimNft, isLoading, error } = useClaimNFT(nftDrop);

  
  const {reward: confettiReward, isAnimating: isConfettiAnimating} = useReward('confettiReward', 'confetti');//for confetti celebration animation on successfully miniting
  

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
      toast.error("Switch Network to Mumbai")
      return;
    }

    const tid=toast.loading("Confirm on Wallet !")
    toast.custom(<span id="confettiReward"/>,{duration: 5000,});
    try {
      claimNft(
        {  
          quantity:amount,
          to: address,
          tokenId:0,
         
        },
        {
          onSuccess: (data) => {
            toast.success("Successfully minted NFT", {id:tid,duration: 5000,}),
             toast.custom(<span id="confettiReward"/>,{duration: 8000,}),
            confettiReward();
          },
          onError: (error) => {
            toast.error("Something went wrong", {id:tid,});
          },
        }
      );
    } catch (error) {
      toast.error("Something went wrong", {id:tid,});
    }
  };


  if (error) {
    console.error("💩 Error claiming NFT: ", error);
  } else {
    console.log("🎉 NFT claimed successfully!");
  }

  return (
    <div className=" w-full ">
    <Toaster position="bottom-center" reverseOrder={true}/>
      <div className="absolute bottom-2 left-0 right-0 m-auto z-50 w-full bg-[#AE13E3] bg-opacity-20 flex flex-col p-20 pb-7">
        <div className="title-container flex mb-7 justify-center" >
          <p className="text-5xl text-center uppercase italic font-black text-sky-200 glitch " data-text="Urban Uprise Crew">
            Welcome to the
            <br />
            <span>Urban Uprise Crew
          </span></p>
        </div>
             {/* Amount claimed so far */}
        <div className="button-container grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mt-7 md:mt-24 ">
                  <div className=" col-start-1  col-span-4 inline-flex gap-8 justify-center  ">
              <p>Total Minted</p>
              {activeClaimCondition ? (
                <p>
                  {/* Claimed supply so far */}
                  <b>{activeClaimCondition.currentMintSupply}</b>
                  {" / "}
                  {activeClaimCondition.maxQuantity}
                </p>
              ) : (
                // Show loading state if we're still loading the supply
                <p>Loading...</p>
              )}
          </div>
  
          {address ? (
            <>

              <button
                className="flex-1  bg-indigo-500 hover:bg-white hover:text-indigo-500 text-white text-md font-bold rounded-md uppercase disabled:bg-gray-400"
                disabled={ isLoading }
                onClick={() => mint()}
              >
              {isLoading ?(<>Minting...</>):(<span>Mint</span>)}
              
              </button>
            </>
          ) : (
            <>
              <label
                for="my-modal"
                className={`btn modal-button ${styles.UCCBtnDefaults} ${styles.UCCPrimeCTABtn}`}
              >
                Connect Wallet
              </label>
              <input type="checkbox" id="my-modal" className="modal-toggle" />
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
                      for="my-modal"
                      className="btn min-w-[120px] tracking-wider"
                    >
                      Close
                    </label>
                  </div>
                </div>
              </div>
            </>
          )}
          <CrossmintPayButton
            className={styles.UCCBtnDefaults}
            collectionTitle="Urban Uprise Crew (Test)"
            collectionDescription="This is a test collection"
            collectionPhoto="https://hidden-wave-4411.on.fleek.co/_next/static/media/WhiteUUC.9c066b7e.png"
            clientId="2ecfdea0-b3f0-4f91-9689-3f9a06b92fbd"
            mintConfig={{"type":"thirdweb-drop","totalPrice": totalPrice,"quantity": totalQuantity}}
            environment="staging"
          />
        </div>
      </div>
    </div>
  );
};

export default Minting;
