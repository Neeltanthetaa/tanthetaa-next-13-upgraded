import React from "react";
export const JoinTheCompny = () => {
  const btnStyle = {
    boxShadow: "0px 0px 5px rgba(65, 14, 173, 0.7)",
    padding: "5px 11px",
  };
  return (
    <>
      <div className="container mx-auto md:mt-[140px] mt-10 md:px-24">
        <div className="text-center rounded-3xl py-16 bg-[#FAF7FF]">
          <div className="font-bold text-4xl leading-relaxed"></div>
          <h2 className="text-center md:text-4xl text-xl font-bold font-mono">
            Join the <span className="text-[#410EAD]">tan θ team</span> and
            become
            <span className=" text-[#410EAD]">
              θ<sup className="text-xl">θ</sup>
            </span>
          </h2>
          <h4 className="grid place-items-center">
            <p className="mt-2.5 text-base leading-5 w-auto px-3 py-5 text-[#59587B]">
              We make it a priority to add value to the projects we do, enabling
              our partners to stay ahead of the chaos and deliver excellence.
            </p>
          </h4>
          <button
            style={btnStyle}
            className="btn rounded font-medium text-lg leading-5 mt-8 text-white bg-[#410EAD]"
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};
