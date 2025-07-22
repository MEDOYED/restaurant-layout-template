import SectionHero from "../../widgets/sections/SectionHero/SectionHero";
import Header from "../../widgets/layout/Header/Header";
import SectionOpeningHours from "../../widgets/sections/SectionOpeningHours/SectionOpeningHours";
import { SectionAboutUs } from "@widgets";

import s from "./PageHome.module.scss";

const PageHome = () => {
  return (
    <main className={s.pageHome}>
      <SectionHero />
      <Header />
      <SectionOpeningHours />
      <SectionAboutUs />
    </main>
  );
};

export default PageHome;
