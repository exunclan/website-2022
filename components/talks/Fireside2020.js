export default function Fireside2020() {
  return (
    <div className="mt-12">
      <h1 className="text-3xl font-semibold text-primary">
        Exun Fireside 2020
      </h1>
      <p className="text-accent-dark mt-6 text-lg max-w-[500px]">
        Join us for an interactive session with Exun alumni at{" "}
        <a
          href="//exun.co/fireside"
          target="_blank"
          rel="noreferrer"
          className="underline text-primary"
        >
          exun.co/fireside
        </a>
        . We encourage you to ask questions about building good products,
        working in technology landscape and much more!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col items-center p-12 bg-[#F4F8FF] rounded-xl text-center">
          <img
            src="/talks/saif.jpeg"
            alt="Saif Hasan"
            className="rounded-full max-w-[250px]"
          />
          <h3 className="mt-4 text-2xl font-bold text-accent-dark">
            Saif Hasan
          </h3>
          <p className="text-lg font-medium text-accent">
            Exun President &apos;95
          </p>
          <p className="text-[#5B5B5B] text-lg">
            Engineering Manager Facebook, Seattle
          </p>
        </div>
        <div className="flex flex-col items-center p-12 bg-[#F4F8FF] rounded-xl text-center">
          <img
            src="/talks/gaurav.jpeg"
            alt="Gaurav Lochan"
            className="rounded-full max-w-[250px]"
          />
          <h3 className="mt-4 text-2xl font-bold text-accent-dark">
            Gaurav Lochan
          </h3>
          <p className="text-lg font-medium text-accent">
            Exun President &apos;95
          </p>
          <p className="text-[#5B5B5B] text-lg">
            Engineering Manager Whatsapp, Palo Alto
          </p>
        </div>
        <div className="flex flex-col items-center p-12 bg-[#F4F8FF] rounded-xl">
          <img
            src="/talks/manas.jpeg"
            alt="Manas Mittal"
            className="rounded-full max-w-[250px]"
          />
          <h3 className="mt-4 text-2xl font-bold text-accent-dark">
            Manas Mittal
          </h3>
          <p className="text-lg font-medium text-accent">
            Exun President &apos;01
          </p>
          <p className="text-[#5B5B5B] text-lg text-center">
            Head of Product (Ads) Uber, San Francisco
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <a
          href="//exun.co/fireside"
          className="bg-primary text-center py-3 text-md uppercase text-white tracking-wider font-medium rounded-lg w-full max-w-[400px]"
        >
          Watch
        </a>
      </div>
    </div>
  );
}
