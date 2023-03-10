import React from "react";
import Accordians from "./Accordians";
import Cards from "./Cards";
import Expertise from "./Expertise";
import Pythonassemble from "./Pythonassemble";
import PythonBanner from "./Pythonbanner";
import PythonDevCard from "./PythonDevCard";
import SectionWhy from "./Sectionwhy";
import Senior from "./Senior";

const Page = () => {
  return (
    <div>
      <PythonBanner />
      <Pythonassemble />
      <PythonDevCard />
      <Senior />
      <Expertise />
      <Cards />
      <SectionWhy />
      <Accordians />tt
    </div>
  );
};

export default Page;
