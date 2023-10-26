import { useState, useEffect } from "react";

const sponsors = [
    {
        imageUrl: "/sponsors/khulke.png",
        alt: "Khulke",
        link: "https://www.khulke.com/",
        height: "200px",
    },
    {
        imageUrl: "/sponsors/Safexpress_Logo.png",
        alt: "Safexpress",
        link: "https://www.safexpress.com/",
        height: "200px",
    },
    {
        imageUrl: "/sponsors/playstation_logo.png",
        alt: "Safexpress",
        link: "https://www.playstation.com/",
        height: "70px",
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
            <div className="flex flex-wrap items-center justify-center gap-4">
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
        </div>
    );
}
