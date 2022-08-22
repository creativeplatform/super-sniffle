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
    UCCPrimeCTABtn: `bg-[#05cc47] hover:bg-sky-300 flex-none`,
    UCCBtnDefaults: `lg:max-w-[350px] max-w-[100%] font-bold px-20 w-full text-sm  h-[50px] border-none capitalize text-center flex-1 inline-flex  items items-center text-white rounded-md `,
  };
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const address = useAddress();

  const nftDrop = useNFTDrop("0x42BECaFf3737CbB691894059717503bc1F03e316");

  const amount = 1;

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
        <div className="button-container flex mt-2 gap-4 ">
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
            <div className="dropdown dropdown-left">
              <label
                tabIndex="0"
                className={`${styles.UCCBtnDefaults} ${styles.UCCPrimeCTABtn}`}
              >
                Connect Wallet
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <button
                  className="text-indigo-500 hover:border-2 py-4 hover:border-white"
                  onClick={connectWithMetamask}
                >
                  Metamask
                </button>
                <button
                  className="text-indigo-500 hover:border-2 py-4 hover:border-white"
                  onClick={connectWithWalletConnect}
                >
                  Wallet Connect
                </button>
                <button
                  className="text-indigo-500 hover:border-2 py-4 hover:border-white"
                  onClick={connectWithCoinbaseWallet}
                >
                  Coinbase Wallet
                </button>
              </ul>
            </div>
          )}
          <CrossmintPayButton
            className={styles.UCCBtnDefaults}
            collectionTitle="Urban Uprise Crew"
            collectionDescription="The UUC was formed to showcase the amazing creative talents throughout the world. The story of the underdog, finding that diamond in the rough, those are the key points of interest behind our process. Through the purchase of a UUC PFP, we in turn curate talents from all ends of the earth and bring them front and center, every week, every month, every year, to you. This process allows for a dynamic NFT gallery, filled with designers and musicians, with surprise VIP guests, cross-community collaboration and charity auctions that will help generate proceeds for inner-city youth art & music programs. Join us as we make NFT history together, with you."
            collectionPhoto="https://discord.com/channels/@me/941731903982170112/1005132131464380477"
            clientId="a1a33379-1866-43ec-8313-8bf81c5e79d7"
            mintConfig={{
              type: "thirdweb-drop",
              totalPrice: "0.1",
              quantity: "2",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Minting;
