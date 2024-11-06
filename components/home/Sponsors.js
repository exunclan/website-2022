import { useState, useEffect } from "react";

const sponsors = [
  {
    imageUrl: "/sponsors/athena.png",
    alt: "Athena Education",
    link: "https://www.athenaeducation.co.in/",
    height: "200px",
  },
  {
    imageUrl: "/sponsors/playstation.png",
    alt: "Playstation",
    link: "https://www.playstation.com/",
    height: "75px",
  },
  {
    imageUrl: "/sponsors/cubelelo.png",
    alt: "Cubelelo",
    link: "https://www.cubelelo.com/",
    height: "150px",
  },
  {
    imageUrl: "/sponsors/pebble.webp",
    alt: "Pebble",
    link: "",
    height: "150px",
  }
];

const partners = [];

function SponsorImage({ key, imageUrl, alt, img_height }) {
    return (
        <img
            key={key}
            src={imageUrl}
            alt={alt}
            className={`w-auto object-contain`}
            style={{
                height: img_height,
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
                Event Partners
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-5">
                {sponsors.map(({ imageUrl, alt, link, height }, i) => (
                    <a key={i} href={link} target="_blank" rel="noreferrer">
                        <SponsorImage
                            key={i}
                            imageUrl={imageUrl}
                            alt={alt}
                            img_height={height ? height : ImgHeight}
                        />
                    </a>
                ))}
            </div>

            {
                partners && partners.length
                    ? <>
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
                                        img_height={height ? height : ImgHeight}
                                    />
                                </a>
                            ))}
                        </div>
                    </>
                    : null
            }
        </div>
    );
}
