import Image from "next/image";
const sponsors = [
  {
    imageUrl: "/sponsors/Digital_India_logo.png",
    alt: "Digital India",
  },
  /*{
    imageUrl: "/sponsors/athena.png",
    alt: "Athena Education",
  },
  {
    imageUrl: "/sponsors/plaksha.png",
    alt: "Plaksha",
  },
  */
  {
    imageUrl: "/sponsors/devfolio.png",
    alt: "Devfolio",
    link: "https://devfolio.co",
  },
  {
    imageUrl: "/sponsors/polygon.png",
    alt: "Polygon",
    link: "https://polygon.technology",
  },
];

const partners = [
  // {
  //   imageUrl: "/sponsors/balsamiq.png",
  //   alt: "Balsamiq",
  // },
  // {
  //   imageUrl: "/sponsors/rosenfield.png",
  //   alt: "Rosenfeld",
  // },
  {
    imageUrl: "/sponsors/solana.png",
    alt: "Solana",
    link: "https://solana.com",
  },
  {
    imageUrl: "/sponsors/filecoin.png",
    alt: "Filecoin",
    link: "https://filecoin.io",
  },
  {
    imageUrl: "/sponsors/replit.png",
    alt: "Repl.it",
    link: "https://replit.com",
  },
  {
    imageUrl: "/sponsors/wolfram.png",
    alt: "Wolfram",
    link: "https://wolfram.com",
  },
  // {
  //   imageUrl: "/sponsors/aops.png",
  //   alt: "AOPS",
  // },
  {
    imageUrl: "/sponsors/taskade.png",
    alt: "Taskade",
    link: "https://taskade.com",
  },
  {
    imageUrl: "/sponsors/interview-cake.svg",
    alt: "Interview Cake",
    link: "https://interviewcake.com",
  },
  {
    imageUrl: "/sponsors/streamyard.png",
    alt: "StreamYard",
    link: "https://streamyard.com",
  },
  {
    imageUrl: "/sponsors/ndss.png",
    alt: "New Delhi Space Society",
    link: "https://newdelhi.nss.org",
  },
];

function SponsorImage({ imageUrl, alt }) {
  return (
    <img src={imageUrl} alt={alt} className="h-[70px] w-auto object-contain" />
  );
}

export default function Sponsors() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* <h2 className="text-4xl font-bold text-accent-dark">Our Sponsors</h2> */}
      <div className="flex flex-wrap items-center justify-center mt-5 gap-4">
        {sponsors.map(({ imageUrl, alt, link }, i) =>
          link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <SponsorImage imageUrl={imageUrl} alt={alt} />
            </a>
          ) : (
            <SponsorImage imageUrl={imageUrl} alt={alt} />
          )
        )}
      </div>
      <h2 className="text-4xl font-bold text-accent-dark mt-4">Partners</h2>
      <div className="flex flex-wrap items-center justify-center mt-5 gap-4">
        {partners.map(({ imageUrl, alt, link }, i) =>
          link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <SponsorImage imageUrl={imageUrl} alt={alt} />
            </a>
          ) : (
            <SponsorImage imageUrl={imageUrl} alt={alt} />
          )
        )}
      </div>
    </div>
  );
}
