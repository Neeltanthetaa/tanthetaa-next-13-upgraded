/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./NestedFeedback.css";
import AlFuttaim from "./../../../../../public/Img/About/AlFuttaim.svg";
import NCR from "./../../../../../public/Img/About/NCR.svg";
import Karavan from "./../../../../../public/Img/About/Karavan.svg";
import Melltoo from "./../../../../../public/Img/About/Melltoo.svg";
import Google from "./../../../../../public/Img/About/Google.svg";
import AgileDevelopmentChart from "./../../../../../public/Img/About/AgileDevelopmentChart.svg";
import Image from "next/image";

const NestedFeedback = () => {
  const NestedFeedbackData = [
    {
      id: 1,
      titleBgColor: "bg-[#F70776]",
      title: "Feedback Loop",
      subTitleOne: "Pair programming",
      subTitleTwo: "Daily standup",
      subTitleThree: "Iterations planning",
      subTitleFour: "Risk analysis meeting",
      subTitleFive: "Pair programming",
    },
    {
      id: 2,
      titleBgColor: "bg-[#09C928]",
      title: "Frequency",
      subTitleOne: "Continuous",
      subTitleTwo: "Daily",
      subTitleThree: "Bi-weekly",
      subTitleFour: "Every other iteration",
      subTitleFive: "Continuous",
    },
    {
      id: 3,
      titleBgColor: "bg-[#7B3FE4]",
      title: "Participant",
      subTitleOne: "Development",
      subTitleTwo: "Project Team",
      subTitleThree: "Facilitator",
      subTitleFour: "Project Team",
      subTitleFive: "Development",
    },
    {
      id: 4,
      titleBgColor: "bg-[#6E3636]",
      title: "Length",
      subTitleOne: "Continuous",
      subTitleTwo: "15 minutes",
      subTitleThree: "1 - 2 hours",
      subTitleFour: "1 - 2 hours",
      subTitleFive: "1 - 2 hours",
    },
  ];

  return (
    <>
      <section className="container mx-auto my-20 lg:my-[140px] md:px-24 lg:px-24 xl:px-0">
        <h6 className="text-2xl sm:text-3xl xl:text-2xl text-center font-bold pb-7 font-mono">
          The following feedback loops are a part of our process so that we can
          adapt to change quickly. These feedback loops function on various time
          scales to enable everything from minute adjustments to
          <span className="text-[#410EAD] font-mono">
            significant shifts in a project's direction.
          </span>
        </h6>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-20 px-5">
          {NestedFeedbackData.map((element) => {
            return (
              <div key={element.id}>
                <div className={`pattern ${element.titleBgColor}`}>
                  <p className="text-xl font-normal p-2 text-center text-white uppercase font-mono">
                    {element.title}
                  </p>
                </div>
                {element.subTitleOne && (
                  <p className="text-xl pb-1 border-b-[1px] border-b-[#CFCFCF] mt-3">
                    {element.subTitleOne}
                  </p>
                )}
                {element.subTitleTwo && (
                  <p className="text-xl pb-1 border-b-[1px] border-b-[#CFCFCF] mt-3">
                    {element.subTitleTwo}
                  </p>
                )}
                {element.subTitleThree && (
                  <p className="text-xl pb-1 border-b-[1px] border-b-[#CFCFCF] mt-3">
                    {element.subTitleThree}
                  </p>
                )}
                {element.subTitleFour && (
                  <p className="text-xl pb-1 border-b-[1px] border-b-[#CFCFCF] mt-3">
                    {element.subTitleFour}
                  </p>
                )}
                {element.subTitleFive && (
                  <p className="text-xl pb-1 border-b-[1px] border-b-[#CFCFCF] mt-3">
                    {element.subTitleFive}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section className="container mx-auto my-20 lg:my-[140px] md:px-24 lg:px-24 xl:px-0">
        <h6 className="text-2xl sm:text-3xl xl:text-4xl text-center font-bold pb-7 font-mono">
          We are trusted by
          <span className="text-[#410EAD] font-mono">
            brands you believe in
          </span>
        </h6>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-7 my-5">
          <Image src={AlFuttaim} alt="AlFuttaim" className="mx-auto" />
          <Image src={NCR} alt="NCR" className="mx-auto" />
          <Image src={Karavan} alt="Karavan" className="mx-auto" />
          <Image src={Melltoo} alt="Melltoo" className="mx-auto" />
          <Image
            src={Google}
            alt="Google"
            className="mx-auto col-span-2 lg:col-span-1"
          />
        </div>
      </section>
      <section className="container mx-auto my-20 lg:my-[140px] md:px-24 lg:px-24 xl:px-0">
        <h6 className="text-2xl sm:text-3xl xl:text-4xl text-center font-bold pb-7 font-mono">
          Great Process,
          <span className="text-[#410EAD] font-mono">Better Results</span>
        </h6>
        <p className="text-[#59587C] text-center pb-7">
          Every step of our mobile app development project is strategized with
          the aim to provide maximum value to the end users.
        </p>
        <div>
          <Image
            src={AgileDevelopmentChart}
            alt="Agile Development Chart"
            className="mx-auto"
          />
        </div>
      </section>
    </>
  );
};

export default NestedFeedback;
