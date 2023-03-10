import React from "react";
import Accordian from "./Accordian";
import Assemble from "./Assemble";
import AssembleCard from "./AssembleCard";
import Banner from "./Banner";
import Devcard from "./Devcard";
import Expertisecards from "./Expertisecards";
import Section from "./Section";
import SectionExpertise from "./SectionExpertise";
import SectionWhy from "./SectionWhy";

const Page = () => {
  return (
    <div>
      <Banner />
      <Assemble />
      <AssembleCard />
      <Devcard />
      <Section />
      <SectionExpertise />
      <Expertisecards />
      <SectionWhy />
      <Accordian />
    </div>
  );
};

export default Page;
