import { useDistanceFromTop } from "../../../shared/lib/hooks/useDistanceFromTop";
import { useScrollPosition } from "../../../shared/lib/hooks/useScrollPosition";

import s from "./Header.module.scss";

const menuItems = [
  "Menu",
  "Promocje",
  "Rezerwacja",
  "Galeria",
  "Co nowego?",
  "Kontakt",
];

const Header = () => {
  const [headerRef, distanceFromTop] = useDistanceFromTop();
  const scrollPosition = useScrollPosition();

  // const styleFixed = distanceFromTop <= 0 ? s.fixedHeader : s.header;
  let headerClassName = s.header;

  if (distanceFromTop <= 0) {
    headerClassName = s.fixedHeader;
  }

  if (scrollPosition <= 865) {
    headerClassName = s.header;
  }

  return (
    <header
      className={headerClassName}
      ref={headerRef}
    >
      <div
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          background: "red",
          color: "white",
          padding: "5px",
        }}
      >
        Distance: {distanceFromTop}px
      </div>

      <div
        style={{
          position: "fixed",
          top: 10,
          right: 150,
          background: "red",
          color: "white",
          padding: "5px",
        }}
      >
        Distance: {scrollPosition}px
      </div>

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
