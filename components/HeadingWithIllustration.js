export default function HeadingWithIllustration({
  title,
  illustration = "/resources-illustration-1.png",
}) {
  return (
    <div className="my-12 relative flex justify-between items-center">
      <h2 className="text-3xl font-semibold md:text-4xl text-accent">
        {title}
      </h2>
      <img
        src={illustration}
        alt="Illustration"
        className="absolute left-[720px] h-[70px]"
      />
    </div>
  );
}
