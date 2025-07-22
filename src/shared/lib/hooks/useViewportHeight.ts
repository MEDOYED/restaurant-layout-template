import { useState, useEffect } from "react";

const useViewportHeight = () => {
  const vhOnFirstRender = window.innerHeight;
  const [viewportHeight, setViewportHeight] = useState(vhOnFirstRender);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewportHeight;
};

export default useViewportHeight;
