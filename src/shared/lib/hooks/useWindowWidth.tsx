import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const vwOnFirstRender = window.innerWidth;
  const [viewportWidth, setViewportWidth] = useState(vwOnFirstRender);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewportWidth;
};

export default useWindowWidth;
