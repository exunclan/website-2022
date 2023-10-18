import { useState, useEffect } from "react";

const sponsors = [
  {
    imageUrl: "/sponsors/khulke.png",
    alt: "Khulke",
    link: "",
    height: "200px",
  },
];

const partners = [
  {
    imageUrl: "/sponsors/rosenfield.png",
    alt: "Rosenfeld",
    link: "https://rosenfeldmedia.com/",
    height: "90px",
  },
  {
    imageUrl: "/sponsors/echo3d.png",
    alt: "Echo 3D",
    link: "https://echo3d.co",
  },
  {
    imageUrl: "/sponsors/interview-cake.png",
    alt: "Interview Cake",
    link: "https://www.interviewcake.com/",
    height: "70px",
  },
  {
    imageUrl: "/sponsors/xyz.png",
    alt: ".xyz Domains",
    link: "https://gen.xyz",
    height: "70px",
  },
  {
    imageUrl: "/sponsors/cubelelo.png",
    alt: "Cubelelo",
    link: "https://www.cubelelo.com/",
    height: "160px",
  },
  {
    imageUrl: "/sponsors/wolfram.png",
    alt: "Wolfram Language",
    link: "https://www.wolframalpha.com/",
    height: "90px",
  },
];

function SponsorImage({ imageUrl, alt, small, img_height }) {
  return (
    <img
      src={imageUrl}
      alt={alt}
      className={`w-auto object-contain`}
      style={{
        height: small ? img_height : alt === "Playstation" ? "80px" : "120px",
      }}
    />
  );
}

export default function Sponsors() {
  const [ImgHeight, setImgHeight] = useState("45px");

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.matchMedia("(max-width: 480px)").matches) {
        setImgHeight("30px");
      }
    }
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* <h2 className="text-4xl font-bold text-accent-dark">Our Sponsors</h2> */}
      <h1 className="text-3xl md:text-6xl font-bold text-accent-dark my-8 mt-[130px]">
        Exun 2023 - Partners
      </h1>
      <div className="flex flex-wrap items-center justify-center mb-5 gap-4">
        {sponsors.map(({ imageUrl, alt, link }, i) => (
          <a key={i} href={link} target="_blank" rel="noreferrer">
            <SponsorImage key={i} imageUrl={imageUrl} alt={alt} small={false} />
          </a>
        ))}
      </div>

      <h1 className="text-3xl md:text-6xl font-bold text-accent-dark my-8 mt-[130px]">
        Community Partners
      </h1>
      <div className="flex flex-wrap items-center justify-center mt-5 gap-8">
        {partners.map(({ imageUrl, alt, link, height }, i) => (
          <a key={i} href={link} target="_blank" rel="noreferrer">
            <SponsorImage
              key={i}
              imageUrl={imageUrl}
              alt={alt}
              small
              img_height={height ? height : ImgHeight}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
