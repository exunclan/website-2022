import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex justify-between mt-24">
        <div>
          <h2 className="text-4xl text-primary font-semibold">About Us</h2>
          <div className="text-lg text-accent mt-12 md:mr-3 lg:mr-12">
            <p>
              Founded in 1992, Exun is the technology club at Delhi Public
              School R.K. Puram. The word ‘Exun’ is short for Experts Unlimited,
              and that’s exactly what we are: young technology enthusiasts
              excelling in diverse fields of technology, from research,
              development, and programming to tech quizzing, debating and
              design.
            </p>
            <p className="mt-8">
               Under the mentorship of Mr. Mukesh Kumar, its founder &
              teacher-in-charge, Exun has emerged as the foremost high-school
              technology club of India, with its members winning inter-school,
              national, and international competitions on a regular basis. Exun
              is a fifty-five member organization, bestowing less than 2% of the
              student body with its prestigious membership.
            </p>
            <p className="mt-8">
              With an alumni network of 350+ individuals at companies and
              universities around the world, Exun is well connected to the
              contemporary technology landscape.
            </p>
          </div>
        </div>
        <img
          src="/aboutillustration.png"
          alt="Illustration"
          height={600}
          width={300}
          className="hidden lg:block"
        />
      </div>
    </>
  );
}
