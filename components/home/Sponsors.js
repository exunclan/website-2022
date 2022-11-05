import { useState, useEffect } from "react";
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
    imageUrl: "/sponsors/devfolio.png",
    alt: "Devfolio",
    link: "https://devfolio.co",
  },
  {
    imageUrl: "/sponsors/polygon.png",
    alt: "Polygon",
    link: "https://polygon.technology",
  },
  {
    imageUrl:
      "https://codechef_shared.s3.amazonaws.com/download/New%20CodeChef%20Logo/cc-logo.svg",
    alt: "Codechef",
    link: "https://codechef.com",
  },
  {
    imageUrl: "/sponsors/echo3d.png",
    alt: "Echo 3D",
    link: "https://echo3d.co",
  },
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
    imageUrl: "/sponsors/xyz.png",
    alt: ".xyz Domains",
    link: "https://gen.xyz",
  },
  {
    imageUrl: "/sponsors/ndss.png",
    alt: "New Delhi Space Society",
    link: "https://newdelhi.nss.org",
  },
];

function SponsorImage({ imageUrl, alt, small, img_height }) {
  console.log(img_height)
  return (
    <img
      src={imageUrl}
      alt={alt}
      className={`w-auto object-contain`}
      style={{
        height: small ? img_height : "70px",
      }}
    />
  );
}

export default function Sponsors() {
  const [ImgHeight, setImgHeight] = useState("45px")

  useEffect(() => {
    if(typeof window !== undefined){
      if(window.matchMedia('(max-width: 480px)').matches) {
        setImgHeight("30px")
      }
    }
  }, [])
  
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* <h2 className="text-4xl font-bold text-accent-dark">Our Sponsors</h2> */}
      <div className="flex flex-wrap items-center justify-center mb-5 gap-4">
        {sponsors.map(({ imageUrl, alt, link }, i) =>
          link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <SponsorImage imageUrl={imageUrl} alt={alt} small={false} />
            </a>
          ) : (
            <SponsorImage imageUrl={imageUrl} alt={alt} />
          )
        )}
      </div>
      <h2 className="text-4xl font-bold text-accent-dark my-8">
        Community Partners
      </h2>
      <div className="flex flex-wrap items-center justify-center mt-5 gap-8">
        {partners.map(({ imageUrl, alt, link }, i) =>
          link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <SponsorImage imageUrl={imageUrl} alt={alt} small img_height={ImgHeight} />
            </a>
          ) : (
            <SponsorImage imageUrl={imageUrl} alt={alt} small img_height={ImgHeight} />
          )
        )}
      </div>
    </div>
  );
}
