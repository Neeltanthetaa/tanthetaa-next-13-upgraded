import Link from "next/link";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export const StartsWithMVP = () => {
  return (
    <>
      <section className="mt-16 lg:mt-[140px] px-3">
        <div className="bg-[#320B85] rounded-lg py-10 lg:py-20 px-3 lg:px-0 text-center mb-10">
          <div className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-6 lg:leading-tight mb-4 text-center text-white font-mono">
            It All Starts With an MVP.
          </div>
          <p className="text-[#ffffff] text-sm lg:text-base text-center font-normal mb-5">
            We make sure that you do not fall into the chart of app failures,
            which is at 70% and is the result of improper market testing.
          </p>
          <div className="text-white font-normal text-xs md:text-sm leading-4">
            <p className="font-normal">
              After discussing your goals, the target audience for the app, and
              the features that must stand out, we develop an MVP within 60 days
              that is prepared to launch on the market and be shown to investors
              at the following fundraising meeting.
            </p>
            <p className="font-normal">
              we create an MVP within 60 days which is ready to be rolled out in
              the market and to be presented to the investors in the next
              fundraising meeting.
            </p>
          </div>

          <Link
            href="/"
            className="text-[#fff] text-sm lg:text-base flex justify-center  items-center gap-2 lg:py-[30px] py-[20px] font-medium "
          >
            Our MVP Development Process and Offerings
            <div className="visible ">
              <HiArrowNarrowRight />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};
