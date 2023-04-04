import React from "react";
import { CareerHeadSection } from "./CareerHeadSection/CareerHeadSection";
import { CareerPic } from "./CareerPic/CareerPic";
import { JoinTheCompny } from "./JoinTheCompny/JoinTheCompny";
// import { TrendingOpportunities } from "./TrendingOpportunities/TrendingOpportunities";

export const dynamic = "force-dynamic";

const Career = () => {
  return (
    <>
      <CareerHeadSection />
      <CareerPic />
      {/* <TrendingOpportunities /> */}
      <JoinTheCompny />
    </>
  );
};

export default Career;
