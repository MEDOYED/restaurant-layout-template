import s from "./SectionOpeningHours.module.scss";

const SectionOpeningHours = () => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>— ГОДИНИ РОБОТИ —</h2>
      <ul className={s.list}>
        <li className={s.list__item}>
          <span>Понеділок</span>
          <span className={s.hours}>12h — 15h</span>
        </li>

        <li className={s.list__item}>
          <span>Вівторок</span>
          <span className={s.hours}>12h — 15h</span>
        </li>

        <li className={s.list__item}>
          <span>Середа</span>
          <span className={s.hours}>12h — 15h</span>
        </li>
        <li className={s.list__item}>
          <span>Четвер</span>
          <span className={s.hours}>12h — 15h</span>
        </li>
        <li className={s.list__item}>
          <span>П'ятниця</span>
          <span className={s.hours}>12h — 15h</span>
        </li>
        <li className={s.list__item}>
          <span>Субота</span>
          <span className={s.hours}>12h — 15h</span>
        </li>
        <li className={s.list__item}>
          <span>Неділя</span>
          <span className={s.hours}>12h — 15h</span>
        </li>
      </ul>
      <p className={s.subtitle}>
        Запрошуємо до нашого закладу у відкриті години.
      </p>
    </section>
  );
};

export default SectionOpeningHours;
