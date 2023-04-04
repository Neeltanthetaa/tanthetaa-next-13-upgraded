import React from "react";
import Backlog from "./../../../../../public/Img/About/Digital age/aaa.svg";
import Daily from "./../../../../../public/Img/About/Digital age/3d-modeling 1.svg";
import Project from "./../../../../../public/Img/About/Digital age/Development.svg";
import QA from "./../../../../../public/Img/About/Digital age/QA.svg";
import Sprint from "./../../../../../public/Img/About/Digital age/strategy (1).svg";
import Estimation from "./../../../../../public/Img/About/Digital age/estimation.svg";
import Retrospective from "./../../../../../public/Img/About/Digital age/meeting 2.svg";
import Standup from "./../../../../../public/Img/About/Digital age/team 2.svg";
import Image from "next/image";

const DigitalAge = () => {
  const OurAchievementsData = [
    {
      logo: Backlog,
      name: "Backlog Grooming",
    },
    {
      logo: Sprint,
      name: "Sprint Planning",
    },
    {
      logo: Estimation,
      name: " Project Estimation",
    },
    {
      logo: Project,
      name: "Project Development",
    },
    {
      logo: Standup,
      name: "Daily Standup",
    },
    {
      logo: QA,
      name: "Testing & QA",
    },
    {
      logo: Retrospective,
      name: "Sprit Retrospective",
    },
    {
      logo: Daily,
      name: "Daily Standup",
    },
  ];
  return (
    <div className=" mx-auto py-10 xl:px-20 md:mt-[140px] mt-10  md:px-24">
      <div className="  text-center text-4xl font-bold md:mt-[140px]">
        <div className="text-center md:text-4xl text-xl font-bold font-mono">
          A competitive advantage
          <span className="text-[#410EAD]">in the Digital age</span>
        </div>
        <div className="">
          <div className="pt-10 mx-auto text-center w-auto font-normal text-lg text-[#59587B] 2xl:px-72 md:px-24 px-1 xl:px-28">
            With product management, we approach the intersection of business,
            technology and user experience to create products that are
            actionable, valuable and easy to use.
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="  grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 items-center gap-5 mt-14 mb-20">
          {OurAchievementsData.map((e, keys) => (
            <div
              className="grid mx-auto place-items-center text-center border-[#FFFFFF] shadow shadow-[#410EAD] border-solid w-56 h-24 rounded-xl bg-[#fff] "
              key={keys}
            >
              <div className=" flex  gap-5 items-center px-5">
                <Image src={e.logo} alt="logo" className="" />
                <p>{e.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalAge;
