import dataProject from "../../../shared/data/dataProject";

import cn from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={cn.heroSection}>
      <h1 className={cn.companyName}>{dataProject.companyName}</h1>
    </section>
  );
};

export default HeroSection;
