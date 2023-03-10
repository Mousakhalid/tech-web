import Accordian from "./Accordian";
import Assemble from "./Assemble";
import Devcard from "./Devcard";
import Expertisecards from "./Expertisecards";
import Section from "./Section";
import SectionExpertise from "./SectionExpertise";
import SectionWhy from "./SectionWhy";
import Phpbanner from "./Phpbanner";
import React from "react";

const page = () => {
  return (
    <div>
      <Phpbanner />
      <Assemble />
      <Devcard />
      <Section />
      <SectionExpertise />
      <Expertisecards />
      <SectionWhy />
      <Accordian />
    </div>
  );
};

export default page;
