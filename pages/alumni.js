import PageHeader from "../components/PageHeader";
import HeadingWithIllustration from "../components/HeadingWithIllustration";
import alumni from "../data/alumni.json";
import PersonCard from "../components/PersonCard";
import Head from "next/head";

export default function Alumni() {
  return (
    <>
      <Head>
        <title>Alumni | Exun Clan</title>
      </Head>
      <div className="px-5 md:px-20 mx-auto max-w-[1400px] w-full">
        <PageHeader
          title="Alumni"
          description="Exun has an immense, well-connected alumni network that provides mentorship and support to its members."
        />
        {alumni.map((batch) => (
          <>
            <HeadingWithIllustration title={batch.year} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {batch.alumni.map(({ name, role }) => (
                <PersonCard key={name} name={name} role={role} />
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
