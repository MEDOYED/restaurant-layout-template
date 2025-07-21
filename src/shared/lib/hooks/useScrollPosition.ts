import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollY(window.scrollY); // або window.pageYOffset для старих браузерів
    };

    // Встановлюємо початкове значення
    updateScrollPosition();

    // Додаємо слухач події скролу
    window.addEventListener("scroll", updateScrollPosition, { passive: true });

    // Прибираємо слухач при розмонтуванні
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return scrollY;
};
