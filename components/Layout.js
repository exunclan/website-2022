import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-5 md:px-20 mx-auto max-w-[1400px] w-full">
        {children}
      </main>
      <Footer />
    </>
  );
}
