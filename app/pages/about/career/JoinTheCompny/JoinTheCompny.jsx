import React from "react";
import "./JoinTheCompny.css";
export const JoinTheCompny = () => {
  return (
    <>
      <div className="container mx-auto md:mt-[140px] mt-10 md:px-24">
        <div className="text-center rounded-3xl py-16 bg-[#FAF7FF]">
          <div className="font-bold text-4xl leading-relaxed"></div>
          <div className="text-center md:text-4xl text-xl font-bold font-mono">
            Join the <span className="text-[#410EAD]">tan θ team</span> and
            become{" "}
            <span className=" text-[#410EAD]">
              {" "}
              θ<sup className="text-xl">θ</sup>
            </span>
          </div>
          <div className="grid place-items-center">
            <p className="mt-2.5 text-base leading-5 w-auto px-3 text-[#59587B] py-5">
              With the utmost priority of adding value to the projects we
              undertake, we ensure that our partners stay ahead of the clutter
              and achieve excellence.
            </p>
          </div>
          <button className="btn rounded font-medium text-lg  leading-5 mt-8 text-[#fff] bg-[#410EAD] btn_radius">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};
