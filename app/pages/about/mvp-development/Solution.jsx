import React from "react";

const Solution = () => {
  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-center md:gap-5  gap-1 font-bold  px-4 md:px-24 lg:px-24 xl:px-0 md:mt-[140px] pt-10">
        <div className="  flex justify-center md:gap-5 ">
          <p className="text-[#FB5A5A] font-mono lg:text-[30px] md:text-[24px] text-[18px] leading-5 gap-5 pr-1">
            Identify
          </p>
          <div className="flex justify-center items-center ">
            <i className="fa-solid fa-plus  md:pr-2" />
            <p className="text-[#1DCD6E] font-mono lg:text-[30px] md:text-[24px] text-[18px] leading-5 gap-5 md:pl-2 pl-1">
              Target
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <i className="fa-solid fa-plus md:pr-2" />
            <p className="text-[#046BEE] font-mono  lg:text-[30px] md:text-[24px] text-[18px] leading-5 gap-5 md:pl-2 pl-1">
              Analyze
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <i className="fa-solid fa-equals  md:pr-2" />
          <p className="text-[#410EAD] font-mono font-bold lg:text-[30px] md:text-[24px] text-[18px]  leading-5 gap-5 md:pl-2 pl-1">
            Solution
          </p>
        </div>
        <p className="text-[#343434] font-normal md:text-[17px] text-sm pt-3">
          To quickly introduce an MVP to the market, we adhere to a specific
          procedure. We apply the learn, build, and measure strategy to every
          solution.
        </p>
      </div>
    </>
  );
};

export default Solution;
