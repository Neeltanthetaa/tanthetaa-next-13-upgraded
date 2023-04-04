import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

export const OurProductDiscovery = (props) => {
  return (
    <>
      <div className="container mx-auto md:my-[140px] my-10 text-center md:gap-5 gap-1 font-bold  px-4 md:px-24 lg:px-24 xl:px-0 ">
        {props.title && (
          <h2 className="container mx-auto font-mono lg:leading-[65px] font-bold 2xl:text-[45px]  lg:text-[35px] md:text-[25px] text-[20px] py-5">
            {props.title}
            {props.subtitle && (
              <span className="text-[#410EAD] lg:block font-mono">
                {props.subtitle}
              </span>
            )}
          </h2>
        )}

        {props.p1 && (
          <h4 className="font-normal text-lg text-[#59587B] leading-5 xl:mx-32">
            {props.p1}
          </h4>
        )}

        <h4 className="font-normal text-lg text-[#59587B] leading-5 mt-5 xl:mx-32">
          {props.p2span1 && <span>{props.p2span1}</span>}
          {props.p2span2 && <span className="block">{props.p2span2}</span>}
        </h4>
        <h4 className="font-normal text-lg text-[#59587B] leading-5 mt-5 xl:mx-32">
          {props.p3span1 && <span>{props.p3span1}</span>}
          {props.p3span2 && <span className="block">{props.p3span2}</span>}
        </h4>
        <h4 className="font-normal text-lg text-[#59587B] leading-5 mt-5 xl:mx-32">
          {props.p4span1 && <span>{props.p4span1}</span>}
          {props.p4span2 && <span className="block">{props.p4span2}</span>}
        </h4>

        {props.link && (
          <Link
            href="/"
            className="text-[#7B3FE4] text-[17px] flex justify-center  items-center gap-2 py-10 font-medium "
          >
            {props.link}
            <div className="">
              <HiArrowNarrowRight />
            </div>
          </Link>
        )}
      </div>
    </>
  );
};
