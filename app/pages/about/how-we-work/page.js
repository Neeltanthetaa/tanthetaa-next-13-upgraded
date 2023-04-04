"use client";
import React from "react";
import Methodology from "./Methodology/Methodology";
import ROI from "./ROI/ROI";
import AboutSlider from "./AboutSlider/AboutSlider";
import RoadMap from "./RoadMap/RoadMap";
import Tables from "./Tables/Tables";

export const dynamic = "force-dynamic";

const HowWeWork = () => {
  return (
    <>
      <Methodology />
      <ROI />
      <AboutSlider />
      <Tables />
      <RoadMap />
    </>
  );
};

export default HowWeWork;
