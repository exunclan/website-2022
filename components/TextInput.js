export default function TextInput({
  placeholder = "Search",
  onChange,
  value,
  className,
}) {
  return (
    <input
      type="text"
      className={`bg-light-input rounded px-4 py-2 w-full max-w-[300px] mt-4 ${
        className || ""
      }`}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
