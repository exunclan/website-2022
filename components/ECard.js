import Link from "next/link";

export default function ECard({
  bgColor,
  image,
  name,
  description,
  buttonText,
  link,
}) {
  return (
    <div
      href="#"
      className={`flex flex-col items-center rounded-lg shadow-md lg:flex-row lg:max-w-xl`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex justify-center w-full rounded-t-lg p-4 h-auto w-11/12 lg:rounded-none lg:rounded-l-lg">
        <img className="object-cover" src={image} alt="" />
      </div>
      <div className="flex flex-col justify-evenly p-4 leading-normal bg-[#F4F8FF]">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-accent">
          {name}
        </h5>
        <p className="mb-3 text-gray-400 text-xs mt-1">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="bg-primary text-sm text-white rounded p-2 uppercase self-end"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
