import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import {
  useMetamask,
  useAddress,
  useNFTDrop,
  useWalletConnect,
  useCoinbaseWallet,
  useClaimNFT,
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
  const address = useAddress();

  const nftDrop = useNFTDrop("0x42BECaFf3737CbB691894059717503bc1F03e316");

  const amount = 1;

  const totalQuantity = "100";
  const totalPrice = "17730";

  const { mutate: claimNft, isLoading, error } = useClaimNFT(nftDrop);

  if (error) {
    console.error("💩 Error claiming NFT: ", error);
  } else {
    console.log("🎉 NFT claimed successfully!");
  }

  return (
    <div className=" w-full ">
      <div className="absolute bottom-2 left-0 right-0 m-auto z-50 w-full bg-[#AE13E3] bg-opacity-20 flex flex-col p-20 pb-7">
        <div className="title-container flex mb-7">
          <p className="text-5xl uppercase italic font-black   text-sky-200 ">
            Welcome to the
            <br />
            Urban Uprise Crew
          </p>
        </div>
        <div className="button-container grid grid-cols-1 gap-3 sm:grid-cols-2  lg:grid-cols-4 mt-7 md:mt-24">
          {address ? (
            <>
              <button
                className="flex-1 items-center bg-indigo-500 hover:bg-white hover:text-indigo-500 text-white text-md font-bold rounded-md uppercase"
                disabled={isLoading}
                onClick={() => claimNft({ to: address, quantity: amount })}
              >
                Mint
              </button>
            </>
          ) : (
            <>
              <label
                htmlFor="my-modal"
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
                      htmlFor="my-modal"
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
            collectionTitle="Urban Uprise Crew"
            collectionDescription="The UUC was formed to showcase the amazing creative talents throughout the world. The story of the underdog, finding that diamond in the rough, those are the key points of interest behind our process. Through the purchase of a UUC PFP, we in turn curate talents from all ends of the earth and bring them front and center, every week, every month, every year, to you. This process allows for a dynamic NFT gallery, filled with designers and musicians, with surprise VIP guests, cross-community collaboration and charity auctions that will help generate proceeds for inner-city youth art & music programs. Join us as we make NFT history together, with you."
            collectionPhoto="https://discord.com/channels/@me/941731903982170112/1005132131464380477"
            clientId="a1a33379-1866-43ec-8313-8bf81c5e79d7"
            mintConfig={{
              type: "thirdweb-drop",
              totalPrice: totalPrice,
              quantity: totalQuantity,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Minting;
