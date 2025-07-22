import { dataProject } from "@shared";

import s from "./SectionAboutUs.module.scss";

const SectionAboutUs = () => {
  return (
    <section className={s.sectionAboutUs}>
      <div className={s.bannerImage}></div>
      <div className={s.contentWrapper}>
        <article className={s.aboutContent}>
          <div className={s.container}>
            <header className={s.contentHeader}>
              <h2>» O Nas</h2>
            </header>

            <div className={s.description}>
              <p className={s.leadParagraph}>
                Zapraszamy do {dataProject.companyName} – miejsca, gdzie
                tradycja spotyka się z nowoczesnością.
              </p>
              <p className={s.secondaryParagraph}>
                Od lat tworzymy wyjątkowe doświadczenia kulinarne, łącząc
                najwyższej jakości składniki z pasją do gotowania. Nasz zespół
                codziennie pracuje nad tym, aby każdy posiłek był nie tylko
                smakowity, ale również przygotowany z dbałością o szczegóły.
                Wierzymy, że dobra kuchnia to podstawa wspólnych chwil – czy to
                rodzinnego obiadu, romantycznej kolacji, czy spotkania z
                przyjaciółmi.
              </p>
            </div>
          </div>
        </article>

        <figure className={s.aboutImage}>
          <img
            src={
              dataProject.restaurantPhoto
                ? dataProject.restaurantPhoto
                : "/imgs/asset-cutting-meat.jpg"
            }
            alt="Szef kuchni przygotowujący mięso w kuchni restauracji"
          />
        </figure>
      </div>
    </section>
  );
};

export default SectionAboutUs;
