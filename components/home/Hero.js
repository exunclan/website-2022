import Image from "next/image";

export default function Hero({ scrollToAboutRef }) {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-20 py-10 px-2">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-5xl md:text-7xl mt-6 md:mt-0 text-accent font-semibold leading-tight md:leading-tight text-center md:text-left">
          Celebrating 33 years
          <br /> of <span className="text-primary">Exun</span>
        </h1>
        <div className="flex items-center gap-3 mt-10 md:mt-20">
          
          {/* <button className="button" onClick={scrollToAboutRef}>
            Read More
          </button> */}
         
          <a
            href="https://reg.exunclan.com"
            className="button text-lg font-medium"
            target="_blank"
            rel="noreferrer"
          >
            Register for Exun 2024
          </a>
        </div>
      </div>
      <Image
        className="z-[1]"
        src="/illus2024.png"
        width={350}
        height={620}
        alt="Hero Image"
      />
    </div>
  );
}
