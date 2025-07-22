import { useDistanceFromTop } from "../../../shared/lib/hooks/useDistanceFromTop";
import { useScrollPosition } from "../../../shared/lib/hooks/useScrollPosition";

import cn from "classnames";

import s from "./Header.module.scss";

const menuItems = [
  "Menu",
  "Promocje",
  "Rezerwacja",
  "Galeria",
  "Co nowego",
  "Kontakt",
];

const Header = () => {
  const [headerRef, distanceFromTop] = useDistanceFromTop();
  const scrollPosition = useScrollPosition();

  const headerClassName = cn(s.header, {
    [s.fixed]: distanceFromTop <= 0 && scrollPosition >= 865,
  });

  return (
    <header
      className={headerClassName}
      ref={headerRef}
    >
      <ul className={s.list}>
        {menuItems.map((item, index) => (
          <li
            className={s.list__item}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
