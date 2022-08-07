import PageHeader from "../components/PageHeader";
import contacts from "../data/contacts.json";
import PersonCard from "../components/PersonCard";

export default function Contact() {
  return (
    <div className="px-5 md:px-20 mx-auto max-w-[1400px] w-full">
      <PageHeader
        title="Contact Us"
        description="Members of Exun Clan are really accessible and very easy to reach out to."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {contacts.map(({ name, role, email }) => (
          <PersonCard key={name} name={name} subtitle={role} role={email} />
        ))}
      </div>
    </div>
  );
}
