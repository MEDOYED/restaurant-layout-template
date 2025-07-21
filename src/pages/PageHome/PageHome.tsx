import SectionOpeningHours from "../../widgets/sections/SectionOpeningHours/SectionOpeningHours";
import Header from "../../widgets/layout/Header/Header";
import SectionHero from "../../widgets/sections/SectionHero/SectionHero";

import s from "./PageHome.module.scss";

const PageHome = () => {
  return (
    <main className={s.pageHome}>
      <SectionHero />
      <Header />
      <SectionOpeningHours />
    </main>
  );
};

export default PageHome;
