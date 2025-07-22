import Header from "../../layout/Header/Header";
import { ButtonForm } from "@shared";

import dataProject from "../../../shared/data/dataProject";

import cn from "./SectionHero.module.scss";

const SectionHero = () => {
  return (
    <section className={cn.heroSection}>
      <span className={cn.phoneNumbers}>{dataProject.phoneNumbers}</span>
      <ButtonForm />
      <h1 className={cn.companyName}>{dataProject.companyName}</h1>

      <Header />
    </section>
  );
};

export default SectionHero;
