import Head from "next/head";
import Fireside2020 from "../components/talks/Fireside2020";
import TalksHeader from "../components/talks/TalksHeader";
import YearTalks from "../components/talks/YearTalks";
import talks from "../data/talks";

export default function Talks() {
  return (
    <>
      <Head>
        <title>Exun Clan | Talks</title>
      </Head>
      <TalksHeader />
      <div className="px-5 md:px-20 mx-auto max-w-[1400px] w-full">
        {talks.map(({ year, talks }, i) => (
          <YearTalks key={i} year={year} talks={talks} />
        ))}
        <Fireside2020 />
      </div>
    </>
  );
}
