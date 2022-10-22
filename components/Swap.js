import { darkTheme, SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import {
  useChainId,
  useAddress,
} from "@thirdweb-dev/react";
import { providers, ethers } from 'ethers';
import { useState } from "react";
import detectEthereumProvider from '@metamask/detect-provider';


function Swap(){


const chainId = useChainId();
const address = useAddress();
const TOKEN_LIST = "https://gateway.ipfs.io/ipns/tokens.uniswap.org";
//const WETH="0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";
const jsonRpcEndpoint = `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_POLYGON_ALCHEMY}`;
const jsonRpcProvider = new providers.JsonRpcProvider(chainId);
const provider = new ethers.providers.Web3Provider(jsonRpcProvider);
  const [account, setAccount] = useState({
      address:address,
      provider:provider ,
  })

  async function isWalletConnected() {
//check if Metamask is installed in the browser
const ethereumProvider = await detectEthereumProvider();
  if (ethereumProvider) {
  //prompt user to connect their wallet
     setAccount({
        address: address,
        provider: ethereumProvider
     })
  }
}
isWalletConnected();

 return(
<>  

  <label htmlFor="my-modal-3"  title="Swap Token"className="btn modal-button btn-md btn-circle border-0 bg-transparent" >
                  <div className=" relative flex w-auto ">
                    <img
                      src="/assets/swapbutton.png"
                      className="float-left w-12 rounded-full"
                      alt="Swap Token"
                    />
                  </div>
  </label>
  <input type="checkbox" id="my-modal-3" className="modal-toggle" />
  <div className="modal modal-middle sm:modal-middle mx-auto backdrop-blur-md sm:backdrop-blur-sm  "> 
  <div className="modal-box mx-auto bg-[#191B1F] ">
  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle z-20 absolute right-1 top-1 bg-transparent text-lg font-bold hover:bg-transparent border-0">✕</label>
      <div className="Uniswap mx-auto">
        <SwapWidget
        theme={darkTheme} 
        jsonRpcEndpoint={jsonRpcEndpoint} 
        tokenList={TOKEN_LIST}
        provider={account.provider}
        hideConnectionUI={true}
        defaultOutputTokenAddress="NATIVE"
        width="100%"
        darkMode={true}

         />
     </div>
  </div>
  </div>
</>
  )
}
export default Swap;