import SectionOpeningHours from "../../widgets/sections/SectionOpeningHours/SectionOpeningHours";
import SectionHero from "../../widgets/sections/SectionHero/SectionHero";

import s from "./PageHome.module.scss";

const PageHome = () => {
  return (
    <main className={s.pageHome}>
      <SectionHero />

      <SectionOpeningHours />
    </main>
  );
};

export default PageHome;
