import React from "react";
import "./TimeLine.css";
import Timeline from "./../../../../../public/Img/About/TimeLine.svg";
import { OurProductDiscovery } from "../OurProductDiscovery/OurProductDiscovery";
import Image from "next/image";

const TimeLine = () => {
  return (
    <>
      <OurProductDiscovery
        title="Our five-day design sprint process and product discovery process help you identify what matters most."
        //subtitle="Sprint Process Help You Know What’s Really Important"
        p1=" The formula for a successful launch is to align the needs of the user with the principles of your company."
        p2span1=" The first step in understanding user needs is determining whether or not your product is actually needed. We arrive at this conclusion through the Product Discovery Process, which primarily entails speaking with the target audience and is essential for successful app development for startups."
        p3span1=" After confirming that your app idea is feasible, we use Google Design Sprint to learn about your company and determine what your target market wants. Our end-to-end custom software development for startups is built around this."
        p3span2="We quiz you during the sprint planning sessions for our startup software development, check your presumptions, and then prioritize based on user needs, business value, implementation costs, and resource and timeline constraints."
        //p4span1="As part of our startup software development’s sprint planning
        //    sessions, we ask you questions, challenge your assumptions, and then
        //    drive"
        //p4span2=" prioritization on the basis of user needs, business value,
        //    implementation cost, and the constraints of resources and timeline."
        link="Our  Process"
      />
      <div className="grid place-items-center">
        <Image src={Timeline} alt="Timeline" />
      </div>
    </>
  );
};

export default TimeLine;
