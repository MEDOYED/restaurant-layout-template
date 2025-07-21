import dataProject from "../../shared/data/dataProject";

import s from "./SectionOpeningHours.module.scss";

const SectionOpeningHours = () => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>— GODZINY PRACY —</h2>
      <ul className={s.list}>
        <li className={s.list__item}>
          <span>Poniedziałek</span>
          <span className={s.hours}>{dataProject.openHours.monday}</span>
        </li>

        <li className={s.list__item}>
          <span>Wtorek</span>
          <span className={s.hours}>{dataProject.openHours.tuesday}</span>
        </li>

        <li className={s.list__item}>
          <span>Środa</span>
          <span className={s.hours}>{dataProject.openHours.wednesday}</span>
        </li>

        <li className={s.list__item}>
          <span>Czwartek</span>
          <span className={s.hours}>{dataProject.openHours.thursday}</span>
        </li>

        <li className={s.list__item}>
          <span>Piątek</span>
          <span className={s.hours}>{dataProject.openHours.friday}</span>
        </li>

        <li className={s.list__item}>
          <span>Sobota</span>
          <span className={s.hours}>{dataProject.openHours.saturday}</span>
        </li>

        <li className={s.list__item}>
          <span>Niedziela</span>
          <span className={s.hours}>{dataProject.openHours.sunday}</span>
        </li>
      </ul>
      <p className={s.subtitle}>
        Zapraszamy do naszej restauracji w godzinach otwarcia
      </p>
    </section>
  );
};

export default SectionOpeningHours;
