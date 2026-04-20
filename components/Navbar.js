import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Talks",
    href: "/talks",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Members",
    href: "/members",
  },
  {
    label: "Alumni",
    href: "/alumni",
  },
  {
    label: "Faculty",
    href: "/faculty",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [showMobile, setShowMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowMobile(false);
  }, []);

  return (
    <div className="flex justify-center py-4 px-12 shadow-[0_-8px_35px_0_rgba(41,119,245,0.26)]">
      <div className="flex justify-between items-center text-lg font-medium text-accent max-w-[1400px] w-full lg:justify-evenly">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={170}
            height={70}
            className="cursor-pointer"
          />
        </Link>
        {links.map(({ label, href }) => (
          <Link key={label} href={href} className="hidden lg:inline-block">
            <p
              className={
                "cursor-pointer" +
                (router.pathname === href
                  ? " underline decoration-[#D0E2FF] decoration-8"
                  : "")
              }
            >
              {label}
            </p>
          </Link>
        ))}
        <a
          href="//lnexun.com"
          target="_blank"
          rel="noreferrer"
          className="button hidden lg:inline-block"
        >
          ln(exun)
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline-block lg:hidden cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={() => setShowMobile(!showMobile)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      {showMobile && (
        <MobileNavbar
          currentRoute={router.pathname}
          close={() => setShowMobile(false)}
        />
      )}
    </div>
  );
}

const MobileNavbar = ({ currentRoute, close }) => {
  return (
    <div className="z-[2] fixed top-0 left-0 h-screen w-full bg-primary/75">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 absolute top-9 right-12 text-white cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        onClick={close}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <div className="flex flex-col h-full justify-center items-center">
        <ul className="text-xl text-white text-regular flex flex-col items-center">
          {links.map(({ label, href }) => (
            <li key={label} className="my-4">
              <Link href={href} onClick={close}>
                <p
                  className={
                    "cursor-pointer" + (currentRoute === href ? "" : "")
                  }
                >
                  {label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-white flex">
          <a
            href="https://facebook.com/ExunClan"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              style={{ width: "24px", height: "24px", marginRight: "12px" }}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
              />
            </svg>
          </a>
          <a
            href="https://instagram.com/exunclan"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              style={{ width: "24px", height: "24px", marginRight: "12px" }}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/exun-clan/mycompany/"
            target="_blank"
            rel="noreferrer"
          >
            <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
