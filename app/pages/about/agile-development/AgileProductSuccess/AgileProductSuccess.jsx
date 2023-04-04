/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./AgileProductSuccess.css";
import { BsCheckCircle } from "react-icons/bs";

const AgileProductSuccess = () => {
  const AgileProductSuccessData = [
    {
      id: 1,
      tickMarkColor: "text-[#FFB800]",
      title: "Acceptance Test-Driven Development (ATDD)",
      subTitle:
        "We connect you with Developers, Designers, and the Testers help you communicate the specific requirements even before the actual implementation.",
    },
    {
      id: 2,
      tickMarkColor: "text-[#0057BC]",
      title: "Agile Modeling",
      subTitle:
        "We document the principles and values on a development project which eases the implementation of agile development methods like extreme programming, Scrum, and Rational Unified Process.",
    },
    {
      id: 3,
      tickMarkColor: "text-[#AD00FF]",
      title: "Agile Testing",
      subTitle:
        "Making mobile app testing a crucial part of the app development process, we ensure that the bugs and errors are next to nothing. Led by our team of Testers, the agile method keeps every involved party from the UX-UI designers to the app developers in the circle.",
    },
    {
      id: 4,
      tickMarkColor: "text-[#FF3D00]",
      title: "Backlogs",
      subTitle:
        "Our POC’s keep their to-do lists and the what’s left lists handy. This helps in achieving client’s expectations through the incremental and iterative mobile app development process.",
    },
    {
      id: 5,
      tickMarkColor: "text-[#87C932]",
      title: "Behavior Driven Development",
      subTitle:
        "Every app functionality is validated in a planned way to not miss test cases or the criteria defining them. It also includes the prime causes and their relevant fixes.",
    },
  ];

  return (
    <>
      <section className="container mx-auto my-20 lg:my-[140px] px-4 md:px-24 lg:px-24 xl:px-0 text-white">
        <div className="bg-[#1746A2] text-center rounded-3xl py-7 lg:py-16 px-5 lg:px-10">
          <h6 className="text-2xl sm:text-3xl xl:text-4xl font-bold pb-7 font-mono ">
            We agile your products to success
          </h6>
          <p className="text-white pb-7 xl:px-48 ">
            When using the agile methodology, you eventually get your product
            with not just one but several functionalities. Developers,
            designers, and testers collaborate in order to accomplish this.
          </p>
          <p className="text-white text-sm pb-7 xl:px-48">
            We break down each subtask into two-week sprints where we complete
            each component one at a time. We hold daily scrum meetings with the
            team, where the tasks are clearly assigned, to make sure everything
            is in line with the project's expectations.
          </p>
          <p className="text-white text-sm xl:px-48">
            To create the desired product, our cross-functional teams work
            together to evolve. Design and implementation work hand in hand, and
            we are open to suggestions and quick to change.
          </p>
        </div>
        <div className="text-center rounded-3xl py-7 lg:py-16 px-5 lg:px-10 text-black">
          <h6 className="text-2xl sm:text-3xl xl:text-4xl font-bold pb-7 font-mono">
            Being Dynamic Systems Model, it enables us to
            <span className="lg:block mt-2 font-mono">
              create products quickly and {`  `}
              <span className="text-[#410EAD] font-mono">with no risk</span>
            </span>
          </h6>
          <div className="lg:mx-16 xl:mx-56 2xl:mx-[385px] my-10">
            <div className="relative border-l-2 border-l-[#410EAD]">
              {/* <ul className="w-[52vw] lg:w-[61vw] xl:w-[44vw] 2xl:w-[34vw] mx-auto"> */}
              <ul>
                {AgileProductSuccessData.map((element) => {
                  return (
                    <li className="mb-7" key={element.id}>
                      <figure className="absolute -left-4 -top-[1] bg-[#FAF7FF] py-2">
                        <BsCheckCircle
                          className={`${element.tickMarkColor} text-3xl`}
                        />
                      </figure>
                      <div className="px-7 lg:px-10">
                        <div className="text-base md:text-lg lg:text-2xl text-start relative">
                          {element.title}
                        </div>
                        <p className="text-sm lg:text-base text-start mt-3">
                          {element.subTitle}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgileProductSuccess;
