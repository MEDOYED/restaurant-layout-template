import { dataProject } from "@shared";

import s from "./SectionAboutUs.module.scss";

const SectionAboutUs = () => {
  return (
    <section className={s.aboutSection}>
      <div className={s.bannerImage}></div>
      <div className={s.contentWrapper}>
        <article className={s.aboutContent}>
          <header className={s.contentHeader}>
            <h2>O Nas</h2>
          </header>
          <div className={s.description}>
            <p className={s.leadParagraph}>
              <strong>
                Zapraszamy do {dataProject.companyName} – miejsca, gdzie
                tradycja spotyka się z nowoczesnością. Od lat tworzymy wyjątkowe
                doświadczenia kulinarne, łącząc najwyższej jakości składniki z
                pasją do gotowania.
              </strong>
            </p>
            <p>
              Nasz zespół codziennie pracuje nad tym, aby każdy posiłek był nie
              tylko smakowity, ale również przygotowany z dbałością o szczegóły.
              Wierzymy, że dobra kuchnia to podstawa wspólnych chwil – czy to
              rodzinnego obiadu, romantycznej kolacji, czy spotkania z
              przyjaciółmi. {dataProject.companyName} to więcej niż restauracja
              – to miejsce, gdzie każdy gość czuje się wyjątkowo. Nasze wnętrze
              emanuje ciepłem i gościnnością, tworząc idealną atmosferę na każdą
              okazję.
            </p>
          </div>
        </article>
        <figure className={s.aboutImage}>
          <img
            src="/imgs/asset-cutting-meat.jpg"
            alt="Szef kuchni przygotowujący mięso w kuchni restauracji"
          />
        </figure>
      </div>
    </section>
  );
};

export default SectionAboutUs;
