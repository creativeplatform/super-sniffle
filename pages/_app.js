import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react"

const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  return(
    <ThirdwebProvider 
    desiredChainId={activeChainId}
    dAppMeta={{
      name: "Urban Uprise Crew",
      description: "Join the Revolution, Free Your Creative Soul",
      isDarkMode: true,
      logoUrl: "https://urbanuprisecrew.com/wp-content/uploads/2022/02/UUClogoWeb.png",
      url: "https://urbanuprisecrew.com",
    }}
    supportedChains={[ChainId.Mumbai, ChainId.Polygon]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
    
  )
}

export default MyApp