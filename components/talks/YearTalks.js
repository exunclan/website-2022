import { useState } from "react";

import ECard from "../ECard";
import HeadingWithIllustration from "../HeadingWithIllustration";

export default function YearTalks({ year, talks }) {
  const [showAll, setShowAll] = useState(false);
  const [_talks, setTalks] = useState(
    talks.slice(0, Math.min(talks.length, 2))
  );

  const showAllTalks = (show) => {
    setShowAll(show);
    if (show) {
      setTalks(talks);
    } else {
      setTalks(talks.slice(0, Math.min(talks.length, 2)));
    }
  };

  return (
    <>
      <HeadingWithIllustration title={year} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {_talks.map((talk, i) => (
          <ECard
            bgColor="white"
            key={i}
            image={`/talks/${talk.by.image}`}
            imageClassName="rounded-full max-w-[250px] md:max-w-full"
            imageSubtitle={talk.by.name}
            name={talk.name}
            description={talk.description}
            link={talk.link}
            buttonText="Watch"
          />
        ))}
      </div>
      <a
        className="text-left w-full flex justify-end mt-6 text-accent cursor-pointer"
        target="_blank"
        rel="noreferrer"
        onClick={() => showAllTalks(!showAll)}
      >
        {showAll ? (
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
        )}
      </a>
    </>
  );
}
