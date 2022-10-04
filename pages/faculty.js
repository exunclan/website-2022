import PageHeader from "../components/PageHeader";
import HeadingWithIllustration from "../components/HeadingWithIllustration";
import faculty from "../data/faculty.json";
import PersonCard from "../components/PersonCard";
import Head from "next/head";

export default function Faculty() {
  return (
    <>
      <Head>
        <title>Exun Clan | Faculty</title>
      </Head>
      <div className="px-5 md:px-20 mx-auto max-w-[1400px] w-full">
        <PageHeader
          title="Faculty"
          description="The Exun faculty forms the bedrock of all of its activities."
        />
        {faculty.map((section) => (
          <>
            <HeadingWithIllustration title={section.title} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {section.members.map(({ name, role }) => (
                <PersonCard key={name} name={name} role={role} />
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
