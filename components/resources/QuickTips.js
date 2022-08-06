import ECard from "../ECard";

export default function QuickTips({ quickTips }) {
  return (
    <div>
      <div className="relative flex justify-between items-center mt-12">
        <h2 className="text-3xl font-semibold md:text-4xl text-accent">
          Quick Tips
        </h2>
        <img
          src="/resources-illustration-1.png"
          alt="Illustration"
          className="absolute left-[720px] h-[70px]"
        />
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {quickTips.map((resource, i) => (
          <ECard
            bgColor="#385B7E"
            key={i}
            image={`quicktips/${resource.image}`}
            name={resource.name}
            description={resource.description}
            link={resource.link}
            buttonText="Read More"
          />
        ))}
      </div>
      <a
        href="https://www.instagram.com/exunclan/guide/learning-resources/17961372220794971/"
        className="text-left w-full flex justify-end mt-6 text-accent"
        target="_blank"
        rel="noreferrer"
      >
        View More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </a>
    </div>
  );
}
