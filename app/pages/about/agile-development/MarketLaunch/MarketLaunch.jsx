import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import ProductBacklog from "./../../../../../public/Img/About/ProductBacklog.svg";
import SprintBacklog from "./../../../../../public/Img/About/SprintBacklog.svg";
import DailyScrumMeeting from "./../../../../../public/Img/About/DailyScrumMeeting.svg";
import PotentiallyShippableProductIncrement from "./../../../../../public/Img/About/PotentiallyShippableProductIncrement.svg";
import Image from "next/image";

const MarketLaunch = () => {
  return (
    <>
      <section className="container mx-auto my-20 lg:my-[140px] px-4 md:px-24 lg:px-24 xl:px-0">
        <h6 className="text-2xl sm:text-3xl xl:text-4xl text-center font-bold pb-7 font-mono">
          Our Scrum process expedites
          <span className="lg:block text-[#410EAD] font-mono">
            your market launch
          </span>
        </h6>
        <div className="grid grid-cols-2 lg:grid-cols-7 gap-2 pb-16">
          <div className="mx-auto py-3">
            <Image
              src={ProductBacklog}
              alt="Product Backlog"
              className="pb-3"
            />
            <p className="text-center text-[#59587C]">
              Product <span className="block">Backlog</span>
            </p>
          </div>
          <div className="mx-auto lg:py-0 hidden lg:block">
            <CgArrowLongRight className="text-7xl text-[#A7A7A7] hidden lg:block" />
          </div>
          <div className="mx-auto py-3">
            <Image src={SprintBacklog} alt="Sprint Backlog" className="pb-3" />
            <p className="text-center text-[#59587C]">
              Sprint <span className="block">Backlog</span>
            </p>
          </div>
          <div className="mx-auto lg:py-0 hidden lg:block">
            <CgArrowLongRight className="text-7xl text-[#A7A7A7] hidden lg:block" />
          </div>
          <div className="mx-auto py-3">
            <Image
              src={DailyScrumMeeting}
              alt="Daily Scrum Meeting"
              className="pb-3"
            />
            <p className="text-center text-[#59587C]">
              Daily Scrum <span className="block">Meeting</span>
            </p>
          </div>
          <div className="mx-auto lg:py-0 hidden lg:block">
            <CgArrowLongRight className="text-7xl text-[#A7A7A7] hidden lg:block" />
          </div>
          <div className="mx-auto py-3">
            <Image
              src={PotentiallyShippableProductIncrement}
              alt="Potentially Shippable Product Increment"
              className="pb-3 mx-auto"
            />
            <p className="text-center text-[#59587C]">
              Potentially Shippable
              <span className="block">Product Increment</span>
            </p>
          </div>
        </div>
        <p className="text-[#59587C] text-center pb-3 lg:px-20 md:px-5 ">
          In order for all levels of the organization to effectively adapt to
          the cultural changes, it is essential to establish an environment that
          is supported by core behaviors, values, and practices. Our team, along
          with our structures, systems, and processes, are dynamic.
        </p>
      </section>
    </>
  );
};

export default MarketLaunch;
