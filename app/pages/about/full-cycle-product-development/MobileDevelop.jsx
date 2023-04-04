import React from "react";
import validation from "./../../../../public/Img/About/validation1.svg";
import clock1 from "./../../../../public/Img/About/clock1.svg";
import moneySaving from "./../../../../public/Img/About/moneysaving.svg";
import Link from "next/link";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

export const dynamic = "force-dynamic";

const MobileDevelop = () => {
  return (
    <>
      <div className="container mx-auto pt-10  md:px-24">
        <div className="my-auto mx-auto text-center lg:text-start">
          <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-10 lg:leading-tight mb-4 text-center">
            <span className="font-mono">
              Our Team Assists You Through Full Cycle
            </span>
            <span className="lg:block font-mono mt-2 text-[#410EAD]">
              Mobile App Development Services.
            </span>
          </h2>
          <h5 className="text-[#59587B] text-sm lg:text-base text-center font-normal mb-5">
            Building digital products that add value for businesses and users
            requires the lean startup methodology and the Scrum framework.
          </h5>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 items-center text-center font-bold">
          <div>
            <div className="text-4xl text-[#410EAD] leading-loose font-bold font_family">
              <Image
                src={validation}
                alt="validation"
                className="text-center mx-auto"
              />
            </div>
            <h3 className=" font-mono text-2xl leading-8 text-[#000000] py-5 font-bold">
              Validate Early
            </h3>
            {/* text-[#59587B] text-sm lg:text-base text-center font-normal mb-5 */}
            <h5 className="text-sm lg:text-lg text-center font-normal text-[#343434] py-5">
              With early launch you get early market feedback to iterate and
              control your product evolution.
            </h5>
          </div>
          <div>
            <div className="text-4xl text-[#410EAD] leading-loose font-bold font_family">
              <Image
                src={clock1}
                alt="clock1"
                className="text-center mx-auto"
              />
            </div>
            <h3 className=" font-mono text-2xl leading-8 text-[#000000] py-5 font-bold">
              Launch Faster
            </h3>
            <h5 className=" text-sm lg:text-lg text-center font-normal text-[#343434] py-5">
              We focus on building a set of CORE features that solve a problem,
              so you can go to the market faster.
            </h5>
          </div>
          <div className="grid place-items-center">
            <div className="text-4xl text-[#410EAD] leading-loose font-bold font_family">
              <Image
                src={moneySaving}
                alt="moneySaving"
                className="text-center mx-auto"
              />
            </div>
            <h3 className="text-2xl leading-8 text-[#000000] py-5 font-bold">
              Save Money
            </h3>
            <h5 className="text-sm lg:text-lg text-center font-normal text-[#343434] py-5">
              You save precious time and money by prioritizing the most
              important features.
            </h5>
          </div>
        </div>
        <Link
          href="/mvp-development"
          className="text-[#7B3FE4] text-[17px] flex justify-center  items-center gap-2 py-10 font-medium "
        >
          Learn more about MVP
          <div className="">
            <HiArrowNarrowRight />
          </div>
        </Link>
      </div>
    </>
  );
};

export default MobileDevelop;
