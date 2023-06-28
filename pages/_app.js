import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react"

function MyApp({ Component, pageProps }) {
  return(
    <ThirdwebProvider
    chainRpc={{ [ChainId.Polygon]: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_POLYGON_ALCHEMY}` }} 
    desiredChainId={ChainId.Polygon}
    dAppMeta={{
      name: "Urban Uprise Crew",
      description: "Join the Revolution, Free Your Creative Soul",
      isDarkMode: true,
      logoUrl: "https://bafybeicnyw5sjja4ul6wk7r2pjyxb3se3uxxxo66mxii6zg7szmzwhodka.ipfs.nftstorage.link/",
      url: "https://urbanuprisecrew.com",
    }}
    supportedChains={[ChainId.Mumbai, ChainId.Polygon]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
    
  )
}

export default MyApp