import React from "react";
import Banner from "./components/banner";
import Skills from "./components/skills";
import Languages from "./components/languages";
import AboutPage from "../about/page";
import Contect from "../contect/components/contect";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Banner />
      <Languages />
      <Skills />
      <AboutPage />
      <Contect />
    </>
  );
};

export default HomePage;
