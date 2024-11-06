import Head from "next/head";
import About from "../components/home/About";
import Hero from "../components/home/Hero";
import Videos from "../components/home/Videos";
import Sponsors from "../components/home/Sponsors";
import useScroll from "../lib/use-scroll";

export default function Home() {
  const [aboutRef, scrollToAboutRef] = useScroll();

  return (
    <>
      <Head>
        <title>Home | Exun Clan</title>
      </Head>
      <div>
        <div className="px-5 md:px-20 mx-auto max-w-[1400px] w-full">
          <Hero scrollToAboutRef={scrollToAboutRef} />
          <Sponsors />
          <About aboutRef={aboutRef} />
          <Videos />
        </div>
      </div>
    </>
  );
}
