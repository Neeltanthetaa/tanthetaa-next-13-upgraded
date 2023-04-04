import React from "react";
import "./AiLift.css";
import Image from "next/image";
import Learning from "./../../../../../public/Img/About/Learning.svg";
import Gidance from "./../../../../../public/Img/About/Gidance.svg";
import Feedback from "./../../../../../public/Img/About/Feedback.svg";
import OpenCulture from "./../../../../../public/Img/About/Open-Culture.svg";
import QA from "./../../../../../public/Img/About/QA.svg";
import Implementation from "./../../../../../public/Img/About/Implementation.svg";
import Opportunities from "./../../../../../public/Img/About/Opportunities.svg";
import LearningDevelopment from "./../../../../../public/Img/About/LatestTechnology.svg";

const AiLift = () => {
  const AILift = [
    {
      icon: Learning,
      title: "Learning & Development",
    },
    {
      icon: Gidance,
      title: "Mindful Personal Guidance",
    },
    {
      icon: Feedback,
      title: "Constructive Feedback",
    },
    {
      icon: OpenCulture,
      title: "Inclusive & Open-Culture",
    },
    {
      icon: QA,
      title: "Innovation & Quality First",
    },
    {
      icon: Implementation,
      title: "Proactive Implementation",
    },
    {
      icon: Opportunities,
      title: "Best & Global Opportunities",
    },
    {
      icon: LearningDevelopment,
      title: "Work with Latest Technology",
    },
  ];
  const NValExplanationDatas = [
    {
      title: "n",
      subtitle: "Ensure impactful innovations",
      details:
        "a passionate and unwavering dedication to achieving the highest level of customer satisfaction.",
    },
    {
      title: "n+1",
      subtitle: "Focus on self-development",
      details:
        "Interactive sessions, training programs, and community gatherings to promote personal development.",
    },
    {
      title: "n+2",
      subtitle: "Integrate work-life balance",
      details:
        "Modern facilities, flexible work schedules, and many other benefits encourage healthy lifestyle choices.",
    },
  ];
  return (
    <>
      <div className="container mx-auto  xl:px-20 md:mt-[140px] pt-10 md:px-24">
        <h2 className=" font-mono text-center md:text-4xl text-xl font-bold">
          Work Life <span className="text-[#410EAD]">At Its Best</span>
        </h2>
        <div className="flex flex-wrap items-center lg:gap-20  gap-4 mt-10  justify-center">
          {AILift.map((e, index) => (
            <div id="boxs" key={index} className="mx-auto">
              <div
                id="heptagon"
                className="grid place-items-center py-14 gap-3 "
              >
                <Image src={e.icon} alt="heptagon" className="w-auto" />
                <h4 className="text-center w-28 h-9 font-medium text-sm leading-5">
                  {e.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="  text-center  font-bold md:mt-[140px] mt-10">
          <h2 className="text-center md:text-4xl text-xl font-bold font-mono">
            Our Core <span className="text-[#410EAD]">Values = n!</span>
          </h2>
          <div className="">
            <h4 className="pt-10 mx-auto text-center md:w-6/12 font-normal text-lg text-[#59587B]">
              We are experienced inventors and enthusiastic learners. As a team,
              we can. develop technologies that benefit both people and the
              technology they use.
            </h4>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap lg:gap-5 gap-0 mt-10 md:px-24">
          {NValExplanationDatas.map((e, index) => (
            <div className=" mx-auto px-0" key={index}>
              <div className="grid md:py-7 gap-3 ">
                <h3 className="font-bold text-4xl lg:text-start text-center  leading-snug opacity-10 ">
                  {e.title}
                </h3>
                <h4 className="text-xl font-bold lg:text-start text-center leading-8 px-30  ">
                  {e.subtitle}
                </h4>
                <h5 className="text-base leading-8 px-30 lg:text-start text-center text-[#59587B]">
                  {e.details}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AiLift;
