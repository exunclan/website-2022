import Image from "next/image";
const sponsors = [
  {
    imageUrl: "/sponsors/Digital_India_logo.png",
    alt: "Digital India",
  },
  {
    imageUrl: "/sponsors/athena.png",
    alt: "Athena Education",
  },
  {
    imageUrl: "/sponsors/plaksha.png",
    alt: "Plaksha",
  },
  {
    imageUrl: "/sponsors/codechef.svg",
    alt: "Codechef",
  },
];

const partners = [
  {
    imageUrl: "/sponsors/balsamiq.png",
    alt: "Balsamiq",
  },
  {
    imageUrl: "/sponsors/rosenfield.png",
    alt: "Rosenfeld",
  },
  {
    imageUrl: "/sponsors/replit.png",
    alt: "Repl.it",
  },
  {
    imageUrl: "/sponsors/wolfram.png",
    alt: "Wolfram",
  },
  {
    imageUrl: "/sponsors/aops.png",
    alt: "AOPS",
  },
  {
    imageUrl: "/sponsors/taskade.png",
    alt: "Taskade",
  },
  {
    imageUrl: "/sponsors/interview-cake.svg",
    alt: "Interview Cake",
  },
  {
    imageUrl: "/sponsors/streamyard.png",
    alt: "StreamYard",
  },
  {
    imageUrl: "/sponsors/ndss.png",
    alt: "New Delhi Space Society",
  },
];

export default function Sponsors() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="text-4xl font-semibold text-accent-dark">Our Sponsors</h2>
      <div className="flex flex-wrap items-center justify-center mt-5">
        {sponsors.map(({ imageUrl, alt }, i) => (
          <img
            src={imageUrl}
            alt={alt}
            key={i}
            className="h-[100px] w-auto mx-10 mb-5"
          />
        ))}
      </div>
      <h2 className="text-4xl font-semibold text-accent-dark mt-10">
        Community Partners
      </h2>
      <div className="flex flex-wrap items-center justify-center mt-5">
        {partners.map(({ imageUrl, alt }, i) => (
          <img
            src={imageUrl}
            alt={alt}
            key={i}
            className="h-[60px] w-auto mx-10 mb-5"
          />
        ))}
      </div>
    </div>
  );
}
