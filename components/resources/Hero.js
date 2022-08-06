import TextInput from "../TextInput";

export default function Hero({ query, setQuery }) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-24">
      <h2 className="text-5xl font-medium md:text-6xl text-primary">
        Learning Resources
      </h2>
      <p className="text-accent-dark mt-12 text-lg max-w-[500px] text-center">
        An archive of resources assembled by current Exun members and alumni to
        help newcomers navigate the various fields of technology
      </p>
      <p className="text-accent-dark mt-6 text-lg max-w-[500px] text-center">
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
      </p>
      <TextInput onChange={setQuery} value={query} />
    </div>
  );
}
