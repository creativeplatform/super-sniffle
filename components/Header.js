import Image from 'next/image'
import logo from "../assets/WhiteUUC.png"

const Header = () => {
  return (
    <div className="flex flex-wrap p-0 m-auto w-2/12 items-center justify-center">
      <Image
        width={100}
        height={100}
        src={logo}
        alt="UUC Logo"
      />
      <div className="text-center uppercase text-3xl font-bold">Urban Uprise Crew</div>
  </div>
   
  )
}

export default Header