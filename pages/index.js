import Head from "next/head";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="h-fit bg-black text-white pb-10">
      <Head>
        <title>Urban Uprise Crew</title>
        <meta
          name="description"
          content="The UUC was formed to showcase the amazing creative talents throughout the world. The story of the underdog, finding that diamond in the rough, those are the key points of interest behind our process. Through the purchase of a UUC PFP, we in turn curate talents from all ends of the earth and bring them front and center, every week, every month, every year, to you. This process allows for a dynamic NFT gallery, filled with designers and musicians, with surprise VIP guests, cross-community collaboration and charity auctions that will help generate proceeds for inner-city youth art & music programs. Join us as we make NFT history together, with you.
"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Footer className="p-4 bg-white sm:p-6 dark:bg-gray-900" />
    </div>
  );
}