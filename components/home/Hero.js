import Image from "next/image";

export default function Hero({ scrollToAboutRef }) {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center py-20 px-2">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-5xl md:text-6xl mt-6 md:mt-0 text-accent font-semibold md:leading-tight text-center md:text-left">
          Celebrating
          <br /> 31 years of
          <br /> <span className="text-primary">Exun</span>
        </h1>
        <div className="flex items-center gap-3 mt-5">
          {/*
          <button className="button" onClick={scrollToAboutRef}>
            Read More
          </button>
          */}
          <a
            href="https://reg.exunclan.com"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Register for Exun 2023
          </a>
        </div>
      </div>
      <Image
        className="z-[1]"
        src="/hero.png"
        width={800}
        height={500}
        alt="Hero Image"
      />
    </div>
  );
}
