import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react"
import { Mumbai, Polygon } from "@thirdweb-dev/chains"

function MyApp({ Component, pageProps }) {
  return(
    <ThirdwebProvider
    activeChain={Polygon}
    autoConnect={false} 
    dAppMeta={{
      name: "Urban Uprise Crew",
      description: "Join the Revolution, Free Your Creative Soul",
      isDarkMode: true,
      logoUrl: "https://bafybeicnyw5sjja4ul6wk7r2pjyxb3se3uxxxo66mxii6zg7szmzwhodka.ipfs.nftstorage.link/",
      url: "https://urbanuprisecrew.com",
    }}
    supportedChains={[Mumbai, Polygon]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
    
  )
}

export default MyApp