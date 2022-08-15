import PageHeader from "../PageHeader";

export default function TalksHeader() {
  return (
    <PageHeader
      title="Exun talks"
      description="Exun Talks are a series of semi-professional sessions relating to technology, with speakers including Exun and DPS RKP alumni, YouTubers among others."
      descriptionTwo={
        <>
          We have an exciting lineup in store and more speakers to be confirmed
          soon! Register at{" "}
          <a
            href="//exun.co/talkreg"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            exun.co/talkreg
          </a>{" "}
          to receive all information and latest updates regarding Exun Talks. To
          attend any talk, you can visit{" "}
          <a
            href="//exun.co/exuntalks"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            exun.co/exuntalks
          </a>{" "}
          at the scheduled time.{" "}
        </>
      }
    />
  );
}
