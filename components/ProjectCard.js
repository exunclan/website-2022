import Image from "next/image";

export default function ProjectCard({ title, link, bg }) {
  return (
    // <div style={{backgroundImage: `url(${bg})`}} className="bg-cover bg-center w-90 h-56 rounded-md flex items-center justify-center">
    <div className="w-90 h-56 rounded-md flex items-center justify-center relative">
      <Image
        src={bg}
        alt={`${title}'s image`}
        fill
        className="top-0 left-0 object-cover overflow-hidden"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw,33vw"
      />
      <a
        className="rounded-md w-full h-full flex items-center justify-center transition ease-in-out duration-500 opacity-0 hover:bg-black/60 hover:opacity-100 z-10"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h4 className="text-[#F4F8FF] text-xl font-semibold">{title}</h4>
      </a>
    </div>
  );
}
