import { useEffect, useRef, useState } from "react";

export const useDistanceFromTop = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [distance, setDistance] = useState(10);

  useEffect(() => {
    const updateDistance = () => {
      if (ref.current) {
        const distance = ref.current.getBoundingClientRect().top;
        setDistance(distance);
      }
    };

    updateDistance();

    window.addEventListener("scroll", updateDistance);
    window.addEventListener("resize", updateDistance);

    return () => {
      window.removeEventListener("scroll", updateDistance);
      window.removeEventListener("resize", updateDistance);
    };
  }, []);

  return [ref, distance] as const;
};
