"use client";
import React from "react";
import TitlePage from "./Title/TitlePage";
import AiLift from "./Ai/AiLift";
import { OurAchievements } from "./Our Achievements/OurAchievements";
import { Counter } from "./Counter/Counter";
import { JoinTheCompny } from "./JoinTheCompny/JoinTheCompny";

export const dynamic = "force-dynamic";

const OurCompany = () => {
  return (
    <>
      <TitlePage />
      <AiLift />
      <OurAchievements />
      <Counter />
      <JoinTheCompny />
    </>
  );
};

export default OurCompany;
