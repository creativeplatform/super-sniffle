import { darkMode,darkTheme, lightTheme, Theme,SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import {
  useChainId ,
  ChainId,
  useMetamask,
  useAddress,
  useNetwork,
} from "@thirdweb-dev/react";
import { providers, ethers } from 'ethers';
import { useState } from "react";
import detectEthereumProvider from '@metamask/detect-provider';


function Swap(){


const chainId = useChainId();
const address = useAddress();
const TOKEN_LIST = "https://gateway.ipfs.io/ipns/tokens.uniswap.org";
const UNI="0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa";
const jsonRpcEndpoint = "https://polygon-mumbai.g.alchemy.com/v2/7wb7qVDk3TfD9A1QaZsXdAvnLZ93ZXXf";
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

  <label htmlFor="my-modal-3" className="btn modal-button btn-md border-2 bg-transparent" >Swap</label>
  <input type="checkbox" id="my-modal-3" className="modal-toggle" />
  <div className="modal modal-middle sm:modal-middle mx-auto backdrop-blur-sm ">
  <div className="modal-box mx-auto bg-[#191B1F] ">
  <label htmlFor="my-modal-3" className="btn btn-mds btn-circle z-20 absolute right-0 top-0 bg-transparent  ">✕</label>
      <div className="Uniswap mx-auto">
        <SwapWidget
        theme={darkTheme} 
        jsonRpcEndpoint={jsonRpcEndpoint} 
        tokenList={TOKEN_LIST}
        provider={account.provider}
        hideConnectionUI={true}
        defaultInputTokenAddress="NATIVE"
        defaultInputAmount="1"
        defaultOutputTokenAddress={UNI}
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