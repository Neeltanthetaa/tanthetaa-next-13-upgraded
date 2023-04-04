import React from "react";
import Team from "./../../../../../public/Img/About/team.svg";
import Hours from "./../../../../../public/Img/About/hours.svg";
import Weels from "./../../../../../public/Img/About/executions.svg";
import Dollar from "./../../../../../public/Img/About/dollar.svg";
import Image from "next/image";

const ROI = () => {
  const ROIDATA = [
    {
      id: 1,
      img: Team,
      heading: "Dedicated teams",
      description:
        "A Product Manager, Tech Lead, Developers, and a UX Specialist are provided for you.",
    },
    {
      id: 2,
      img: Hours,
      heading: "Daily communication",
      description:
        "Our delivery system ensures proactive updates so you're never left in the dark.",
    },
    {
      id: 3,
      img: Weels,
      heading: "Rapid executions",
      description:
        "Our weekly sprints help in prioritizing tasks and focuses on building the MVP fast.",
    },
    {
      id: 4,
      img: Dollar,
      heading: "Predictable ROI",
      description:
        "Your ability to plan a successful product launch is made possible by our process management.",
    },
  ];

  return (
    <>
      <section>
        <div className="container mx-auto my-[140px]">
          <div className="pb-5 flex flex-col items-center">
            <h6 className="text-2xl lg:text-[35px] text-center lg:w-3/5 pb-2 leading-snug font-mono font-bold">
              The ROI you can expect from our{" "}
              <span className="text-[#410EAD]">Agile methodology</span>
            </h6>
            <p className="text-center lg:text-base text-sm">
              tan θ,we don’t just talk about great products. We make them with
              our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 py-7">
            {ROIDATA.map((element) => {
              return (
                <div className="flex flex-col items-center" key={element.id}>
                  <div className="pb-2">
                    <Image src={element.img} alt="imgs" />
                  </div>
                  <div className="text-center">
                    <h6 className="text-xl font-bold pb-1">
                      {element.heading}
                    </h6>
                    <p className="text-sm  px-9">{element.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ROI;
