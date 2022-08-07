export default function PersonCard({ name, role }) {
  return (
    <div className="w-full bg-[#F4F8FF] rounded-lg flex flex-col justify-center items-center p-8">
      <h4 className="mb-2 text-xl font-semibold tracking-wider text-[#194A6D] mb-3">
        {name}
      </h4>
      <h5 className="mb-2 text-lg font-semibold tracking-wider text-accent-dark">
        {role}
      </h5>
    </div>
  );
}
