import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="md:px-20 mx-auto max-w-[1400px] w-full">{children}</main>
    </>
  );
}
