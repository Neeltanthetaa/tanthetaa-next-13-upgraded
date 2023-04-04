import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import Pic_1 from "../../../../../public/Img/About/1.png";
import Pic_2 from "../../../../../public/Img/About/2.png";
import Pic_3 from "../../../../../public/Img/About/3.png";
import Pic_4 from "../../../../../public/Img/About/4.png";
import Pic_5 from "../../../../../public/Img/About/5.png";

import "./TeamSuccess.css";
import Image from "next/image";
const TeamSuccess = () => {
  const AgileProductSuccessData = [
    {
      id: 1,
      tickMarkColor: Pic_1,
      title: "Stakeholder",
    },
    {
      id: 2,
      tickMarkColor: Pic_2,
      title: "Product Manager",
    },
    {
      id: 3,
      tickMarkColor: Pic_3,
      title: "Dev Team Lead",
      subTitle: "Developers",
      subData: "Front End Devs",
      post: "QA",
    },
    {
      id: 4,
      tickMarkColor: Pic_4,
      title: "Design Team Lead",
      subTitle: "UI Designers",
      subData: "Interaction Designers",
    },
    {
      id: 5,
      tickMarkColor: Pic_5,
      title: "Dev Ops",
    },
  ];
  return (
    <>
      {/* font-mono text-2xl lg:text-3xl xl:text-4xl leading-10 lg:leading-tight font-bold text-center xxl-px-0   md:px-24 px-2 lg:px-10 */}
      <div className="bg-[#374768]   mx-auto py-10 xl:px-20 md:my-[140px] my-10  md:px-24 ">
        <h1 className="text-[#FFFFFF]  text-center  font-mono text-2xl lg:text-3xl xl:text-4xl leading-10 lg:leading-tight font-bold ">
          Our product managers steer the
          <span className="lg:block text-[#FFFFFF] font-mono">
            team to success
          </span>
        </h1>
        {/* xl screen chart */}
        <div className="container mx-auto text-center grid place-items-center wrappers">
          <div className="">
            <span className="Stakeholder">Stakeholder</span>
            <p className="demo text-black px-10 z-10">Product Manager</p>
          </div>

          <div className="branch lv1">
            <div className="entry">
              <span className="label">Developer Team </span>
              <div className="branch lv2">
                <div className="entry">
                  <span className="label">Developers</span>
                </div>
                <div className="entry">
                  <span className="label">Front End Devs</span>
                </div>
                <div className="entry">
                  <span className="label">QA</span>
                </div>
              </div>
            </div>

            <div className="entry">
              <span className="label">Design Team </span>
              <div className="branch lv2">
                <div className="entry">
                  <span className="label">UI Designers</span>
                </div>
                <div className="entry">
                  <span className="label">Interaction Designers</span>
                </div>
              </div>
            </div>
            <div className="entry">
              <span className="label">Dev Ops</span>
            </div>
          </div>
        </div>
        {/* end xl screen chart */}

        {/* mobile view */}
        <div className="tree2">
          <div className="lg:mx-16 xl:mx-56 2xl:mx-[385px] flex justify-center pt-10">
            <div className="relative border-l-2 border-l-[#FFB800]">
              <ul>
                {AgileProductSuccessData.map((element) => {
                  return (
                    <li className="mb-7" key={element.id}>
                      <figure className="absolute -left-4 -top-[1]  ">
                        <Image
                          src={element.tickMarkColor}
                          alt="tickMarkColor"
                        />
                      </figure>
                      <div className="px-7 lg:px-10 ">
                        <div className="text-base md:text-lg lg:text-2xl text-white text-start relative ">
                          {element.title}
                        </div>
                        {element.subTitle && (
                          <p className="text-sm lg:text-base text-start text-white mt-3 flex items-center">
                            <RiNumber1 /> {element.subTitle}
                          </p>
                        )}
                        {element.subData && (
                          <p className="text-sm lg:text-base text-start text-white mt-3 flex items-center">
                            <RiNumber2 /> {element.subData}
                          </p>
                        )}
                        {element.post && (
                          <p className="text-sm lg:text-base text-start text-white mt-3 flex items-center">
                            <RiNumber3 />
                            {element.post}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* end mobile view  */}
      </div>
    </>
  );
};

export default TeamSuccess;
