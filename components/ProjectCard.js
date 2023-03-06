export default function ProjectCard({ title, link, bg }) {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className="bg-cover bg-center w-90 h-56 rounded-md flex items-center justify-center">
      <a className="rounded-md w-full h-full flex items-center justify-center transition ease-in-out duration-500 opacity-0 hover:bg-black/60 hover:opacity-100" href={link} target="_blank" rel="noopener noreferrer">
        <h4 className="text-[#F4F8FF] text-xl font-semibold">{title}</h4>
      </a>
    </div>
  )
}