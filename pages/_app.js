import '../styles/globals.css'
import { ChainId, IpfsStorage, ThirdwebProvider } from "@thirdweb-dev/react"

function MyApp({ Component, pageProps }) {
  return(
    <ThirdwebProvider 
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
