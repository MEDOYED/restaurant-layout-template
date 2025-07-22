import dataProject from "../../../shared/data/dataProject.ts";

import s from "./SectionOpeningHours.module.scss";

const SectionOpeningHours = () => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>— GODZINY PRACY —</h2>
      <ul className={s.list}>
        {dataProject.openHours.map((item, index) => (
          <li
            className={s.list__item}
            key={index}
          >
            <span>{item.day}</span>
            <span className={s.hours}>{item.time}</span>
          </li>
        ))}
      </ul>
      <p className={s.subtitle}>
        Zapraszamy do naszej restauracji w godzinach otwarcia
      </p>
    </section>
  );
};

export default SectionOpeningHours;
