export default function PageHeader({
  title,
  description,
  descriptionTwo,
  custom,
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-24">
      <h2 className="text-center text-5xl font-semibold md:text-6xl text-primary">
        {title}
      </h2>
      <p className="text-accent-dark mt-12 text-lg max-w-[500px] text-center">
        {description}
      </p>
      {descriptionTwo && (
        <p className="text-accent-dark mt-6 text-lg max-w-[500px] text-center">
          {descriptionTwo}
        </p>
      )}
      {custom}
    </div>
  );
}
