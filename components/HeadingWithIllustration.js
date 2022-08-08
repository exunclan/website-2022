export default function HeadingWithIllustration({
  title,
  illustration = "/resources-illustration-1.png",
}) {
  return (
    <div className="flex items-center justify-between my-12">
      <h2 className="text-3xl font-semibold md:text-4xl text-accent">
        {title}
      </h2>
      <img
        src={illustration}
        alt="Illustration"
        className="absolute right-0 w-[70%] sm:w-[60%] lg:w-[50%]"
      />
    </div>
  );
}
