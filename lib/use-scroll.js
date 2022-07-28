import { useRef } from "react";

const useScroll = () => {
  const ref = useRef(null);
  const scrollToRef = () => ref.current.scrollIntoView({ behavior: "smooth" });

  return [ref, scrollToRef];
};

export default useScroll;
