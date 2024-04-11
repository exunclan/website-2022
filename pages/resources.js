import { useState } from "react";
import ResourcesHeader from "../components/resources/ResourcesHeader";
import QuickTips from "../components/resources/QuickTips";
import ResourceDocs from "../components/resources/ResourceDocs";
import { resources, quickTips } from "../data/resources";
import Head from "next/head";

export default function Resources() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Head>
        <title>Resources | Exun Clan</title>
      </Head>
      <ResourcesHeader query={query} setQuery={setQuery} />
      <div className="px-5 md:px-20 mx-auto max-w-[1400px] w-full">
        <ResourceDocs
          resources={resources.filter(({ name }) =>
            name.toLowerCase().includes(query.toLowerCase())
          )}
        />
        <QuickTips
          quickTips={quickTips.filter(({ name }) =>
            name.toLowerCase().includes(query.toLowerCase())
          )}
        />
      </div>
      <div className="sm:mt-12 py-12 sm:py-0 sm:relative flex flex-col-reverse justify-center items-center sm:block">
        <img
          src="/resources-illustration-2.png"
          alt="Illustration"
          className="w-full hidden sm:inline-block"
        />
        <div className="flex flex-col sm:block text-center sm:text-left items-center sm:absolute sm:top-10 md:top-14 lg:top-1/4 sm:left-24 mt-3 sm:mt-0">
          <h2 className="text-2xl lg:text-3xl font-semibold md:text-4xl hidden sm:block text-primary">
            Feedback
          </h2>
          <p className="text-lg text-accent-dark text-light mt-2 md:mt-3 lg:mt-6 tracking-wider">
            Let us know if the resources were helpful in your
            <br></br>
            learning experience by mailing to us at{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
              href="mailto:exun@dpsrkp.net"
            >
              exun@dpsrkp.net
            </a>
            .
          </p>
        </div>
        <p
          className="text-center text-5xl md:text-6xl text-primary bg-[linear-gradient(90deg,#D0E2FF,#D0E2FF)] bg-bottom bg-no-repeat sm:absolute sm:bottom-14 md:bottom-24 lg:bottom-1/3 sm:left-24"
          style={{ backgroundSize: "100% 30%" }}
        >
          Happy Learning!
        </p>
      </div>
    </>
  );
}
