/* eslint-disable @next/next/no-img-element */
import React from "react";

export const NFTFractures = () => {
  const stylesServices = {
    background: "#FFFFFF",
    boxShadow: "0px -4px 24px rgba(65, 14, 173, 0.09)",
    borderRadius: "40px 40px 0px 0px",
  };

  return (
    <>
      <div className="container mx-auto mt-10 ">
        <div className="" style={stylesServices}>
          <div className="text-center pt-10 pb-3 px-8 xl:px-14">
            <h3 className="text-[#FF03B8] text-3xl font-bold font-mono">
              Trading Fractures
            </h3>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row">
          <div className="xl:basis-1/4">
            <div className="relative">
              <div className="overflow-hidden" dir="rtl">
                <div
                  id="style-7"
                  className="flex-none min-w-full   overflow-hidden lg:overflow-auto max-h-96 md:px-0 lg:max-h-96"
                >
                  <ul dir="ltr">
                    <li className="pl-6 h-10 w-full flex items-center text-[#FF03B8] bg-[#FFEBF9] text-base">
                      {">  NFT launchpad development"}
                    </li>
                    <img src="/assets/lineBorder.png" alt="lineBorder" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:basis-3/4 bg-[#070513] p-14 h-min">
            <h3 className="text-xl font-inter font-semibold text-[#FF03B8]">
              1.
            </h3>
            <h3 className="my-4 text-white text-xl font-semibold font-inter">
              NFT launchpad development
            </h3>
            <p
              className="text-[#D6D6D6] font-normal
            text-lg max-w-sm"
            >
              Introduce a revolutionary, decentralized, hence safe and
              autonomous, way of supporting NFT artists and startups through
              crowdfunding with a bespoke NFT launchpad solution.
            </p>
            <button className="bg-[#FF03B8] text-white font-mono text-base rounded-md px-6 py-2.5 mt-5">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
