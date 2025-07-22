import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerRef, distanceFromTop] = useDistanceFromTop();
  const scrollPosition = useScrollPosition();

  const headerClassName = cn(s.header, {
    [s.fixed]: distanceFromTop <= 0 && scrollPosition >= 865,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={headerClassName}
      ref={headerRef}
    >
      <button 
        className={s.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={cn(s.hamburger__line, { [s.open]: isMenuOpen })}></span>
        <span className={cn(s.hamburger__line, { [s.open]: isMenuOpen })}></span>
        <span className={cn(s.hamburger__line, { [s.open]: isMenuOpen })}></span>
      </button>

      <ul className={cn(s.list, { [s.open]: isMenuOpen })}>
        {menuItems.map((item, index) => (
          <li
            className={s.list__item}
            key={index}
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
