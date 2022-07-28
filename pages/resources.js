import { useState } from "react";
import ECard from "../components/ECard";
import { resources, quickTips } from "../data/resources";

export default function Resources() {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full py-24">
        <h2 className="text-5xl font-medium md:text-6xl text-primary">
          Learning Resources
        </h2>
        <p className="text-accent-dark mt-12 text-lg max-w-[500px] text-center">
          An archive of resources assembled by current Exun members and alumni
          to help newcomers navigate the various fields of technology
        </p>
        <p className="text-accent-dark mt-6 text-lg max-w-[500px] text-center">
          Before you begin, you may find it useful to learn{" "}
          <a
            href="https://docs.google.com/document/d/1ON_SZS_0msRgfo8sB7jjtHDztXiqV17c8TmW22q-MSI/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            {" "}
            how to learn.
          </a>
        </p>
        <input
          type="text"
          className="bg-light-input rounded px-4 py-2 w-full max-w-[300px] mt-4"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="relative flex justify-between items-center">
        <h2 className="text-3xl font-semibold md:text-4xl text-accent">
          Check These Out!
        </h2>
        <img
          src="/resources-illustration-1.png"
          alt="Illustration"
          className="absolute left-[720px] h-[70px]"
        />
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {resources
          .filter(({ name }) =>
            name.toLowerCase().includes(query.toLowerCase())
          )
          .map((resource, i) => (
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
        {quickTips
          .filter(({ name }) =>
            name.toLowerCase().includes(query.toLowerCase())
          )
          .map((resource, i) => (
            <ECard
              bgColor="#42587B"
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
    </>
  );
}
