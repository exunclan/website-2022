export default function PageHeader({
  title,
  description,
  descriptionTwo,
  custom,
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-24 px-6 text-justify">
      <h2 className="text-5xl md:text-6xl text-primary font-semibold">
        {title}
      </h2>
      <p className="text-accent-dark mt-12 text-lg max-w-[500px]">
        {description}
      </p>
      {descriptionTwo && (
        <p className="text-accent-dark mt-6 text-lg max-w-[500px]">
          {descriptionTwo}
        </p>
      )}
      {custom}
    </div>
  );
}
