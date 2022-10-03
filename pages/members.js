import PageHeader from "../components/PageHeader";
import HeadingWithIllustration from "../components/HeadingWithIllustration";
import members from "../data/members.json";
import PersonCard from "../components/PersonCard";
import Head from "next/head";

export default function Members() {
  return (
    <>
      <Head>
        <title>Exun Clan | Members</title>
      </Head>
      <div className="px-5 md:px-20 mx-auto max-w-[1400px] w-full">
        <PageHeader
          title="Members"
          description="Exun’s members form an elite team of technology enthusiasts, with skills ranging from design and programming to quizzing and hardware."
        />
        {members.map((cls) => (
          <>
            <HeadingWithIllustration title={cls.year} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {cls.members.map(({ name, role }) => (
                <PersonCard key={name} name={name} role={role} />
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
