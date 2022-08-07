import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui"
import { useMetamask, useAddress, useDisconnect, useNFTDrop, useWalletConnect, useCoinbaseWallet, useClaimNFT } from "@thirdweb-dev/react"


const Minting = () => {

    const connectWithMetamask = useMetamask();
    const connectWithWalletConnect = useWalletConnect();
    const connectWithCoinbaseWallet = useCoinbaseWallet();
    const address = useAddress();
    const disconnectWallet = useDisconnect();

    const nftDrop = useNFTDrop("0x69E6E2b637B694D6d465E3256e25a03948f9E901");

    const amount = 1;

    const { mutate: claimNft, isLoading, error } = useClaimNFT(nftDrop);
    

  if (error) {
    console.error("💩 Error claiming NFT: ", error);
  }
  else {
    console.log("🎉 NFT claimed successfully!")
  }

  return (
    <div className="max-w-screen-lg w-full">
        <div className="mint-container mt-[-200px] z-50 w-auto max-w-screen-sm bg-black opacity-75 flex flex-col pb-4 pr-4">
            <div className="title-container flex">
                <p className="text-3xl uppercase italic font-bold mt-3">Welcome to<br/>the Urban Uprise<br/>Crew</p>
            </div>
            <div className="button-container flex mt-2 gap-4">
                {
                    address
                        ? 
                        <>
                            <button className="flex-1 items-center bg-indigo-500 hover:bg-white hover:text-indigo-500 text-white text-md font-bold rounded-md uppercase" disabled={isLoading} onClick={() => claimNft({ to: address, quantity: amount })}>Mint</button>
                            <button className="unfilled-button flex-1 items-center bg-black border-2 text-red-600 hover:text-white hover:border-red-700 text-md font-bold rounded-md uppercase" onClick={disconnectWallet}>Disconnect</button>
                        </>
                        :<div className="dropdown dropdown-left">
                        <label tabIndex="0" className="btn m-1 flex-1 items-center bg-indigo-500 hover:bg-white hover:text-indigo-500 text-white text-md font-bold rounded-md uppercase">Connect Wallet</label>
                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                          <button className="text-indigo-500 hover:border-2 py-4 hover:border-white" onClick={connectWithMetamask}>Metamask</button>
                          <button className="text-indigo-500 hover:border-2 py-4 hover:border-white" onClick={connectWithWalletConnect}>Wallet Connect</button>
                          <button className="text-indigo-500 hover:border-2 py-4 hover:border-white" onClick={connectWithCoinbaseWallet}>Coinbase Wallet</button>
                        </ul>
                      </div>
                }
                <CrossmintPayButton
                    className="my-custom-crossmint-button capitalize flex-1 inline-flex items-center px-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm rounded-md"
                    collectionTitle="Urban Uprise Crew"
                    collectionDescription="The UUC was formed to showcase the amazing creative talents throughout the world. The story of the underdog, finding that diamond in the rough, those are the key points of interest behind our process. Through the purchase of a UUC PFP, we in turn curate talents from all ends of the earth and bring them front and center, every week, every month, every year, to you. This process allows for a dynamic NFT gallery, filled with designers and musicians, with surprise VIP guests, cross-community collaboration and charity auctions that will help generate proceeds for inner-city youth art & music programs. Join us as we make NFT history together, with you."
                    collectionPhoto="https://discord.com/channels/@me/941731903982170112/1005132131464380477"
                    clientId="a1a33379-1866-43ec-8313-8bf81c5e79d7"
                    mintConfig={{"type":"thirdweb-drop","totalPrice":"0.1","quantity":"2"}}
                />
            </div>
        </div>
       
        
    </div>
  )
}

export default Minting
  