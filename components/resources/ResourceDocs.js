import { useState, useEffect } from "react";
import ECard from "../ECard";
import HeadingWithIllustration from "../HeadingWithIllustration";

export default function ResourceDocs({ resources }) {
  const [showAll, setShowAll] = useState(false);
  const [_resources, setResources] = useState(
    resources.slice(0, Math.min(resources.length, 4))
  );

  useEffect(() => {
    setResources(resources.slice(0, Math.min(resources.length, 4)));
  }, [resources]);

  const showAllResources = (show) => {
    setShowAll(show);
    if (show) {
      setResources(resources);
    } else {
      setResources(resources.slice(0, Math.min(resources.length, 4)));
    }
  };

  return (
    <div>
      <HeadingWithIllustration title="Check These Out!" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {_resources.map((resource, i) => (
          <ECard
            bgColor="white"
            key={i}
            image={`/resources/${resource.image}`}
            name={resource.name}
            description={resource.description}
            link={resource.link}
            buttonText="Read More"
          />
        ))}
      </div>
      <a
        className="text-left w-full flex justify-end mt-6 text-accent cursor-pointer"
        target="_blank"
        rel="noreferrer"
        onClick={() => showAllResources(!showAll)}
      >
        {resources.length > 4 &&
          (showAll ? (
            <>
              <span>View Less</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </>
          ) : (
            <>
              <span>View More</span>
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
            </>
          ))}
      </a>
    </div>
  );
}
