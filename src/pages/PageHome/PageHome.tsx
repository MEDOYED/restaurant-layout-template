import SectionOpeningHours from "../../widgets/SectionOpeningHours/SectionOpeningHours";
import SectionHero from "../../widgets/sections/SectionHero/SectionHero";

import "./PageHome.module.scss";

const PageHome = () => {
  return (
    <main>
      <SectionHero />
      <SectionOpeningHours />
    </main>
  );
};

export default PageHome;
