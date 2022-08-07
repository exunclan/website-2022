import PageHeader from "../PageHeader";
import TextInput from "../TextInput";

export default function ResourcesHeader({ query, setQuery }) {
  return (
    <PageHeader
      title="Learning Resources"
      description="An archive of resources assembled by current Exun members and alumni to help newcomers navigate the various fields of technology"
      descriptionTwo={
        <>
          Before you begin, you may find it useful to learn{" "}
          <a
            href="https://docs.google.com/document/d/1ON_SZS_0msRgfo8sB7jjtHDztXiqV17c8TmW22q-MSI/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            {" "}
            how to learn
          </a>
          .
        </>
      }
      custom={<TextInput onChange={setQuery} value={query} />}
    />
  );
}
