export default function PersonCard({ name, subtitle, role }) {
  return (
    <div className="w-full bg-[#F4F8FF] rounded-lg flex flex-col justify-center items-center p-8">
      <h4 className="text-xl font-semibold tracking-wider text-[#194A6D]">
        {name}
      </h4>
      {subtitle && (
        <h5 className="text-lg font-regular tracking-wider text-accent-dark text-center">
          {subtitle}
        </h5>
      )}
      <h5 className="mb-2 text-lg font-semibold tracking-wider text-accent-dark mt-3">
        {role.includes("@") ? (
          <a href={`mailto:${role}`} target="_blank" rel="noreferrer">
            {role}
          </a>
        ) : (
          role
        )}
      </h5>
    </div>
  );
}
