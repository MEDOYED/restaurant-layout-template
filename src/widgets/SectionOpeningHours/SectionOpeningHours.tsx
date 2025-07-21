import s from "./SectionOpeningHours.module.scss";

const SectionOpeningHours = () => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>- ГОДИНИ РОБОТИ -</h2>
      <ul className={s.list}>
        <li className={s.list__item}></li>
      </ul>
      <p>Запрошуємо до нашого закладу у відкриті години.</p>
    </section>
  );
};

export default SectionOpeningHours;
