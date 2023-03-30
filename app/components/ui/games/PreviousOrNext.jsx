/* eslint-disable @next/next/no-img-element */
import React from "react";

export const PreviousOrNext = ({ content, path }) => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-24 lg:px-24 xl:px-0   mt-10 ">
        <div className="flex flex-wrap xl:flex-nowrap xl:justify-between justify-center gap-2 lg:gap-4">
          {content?.map((item) => (
            <div key={item?.id} className="items-center md:p-10 p-7 mb-5  ">
              <div className="flex flex-wrap xl:flex-nowrap xl:justify-start justify-center">
                <div className>
                  <img
                    src={`/assets/${path}/${item?.image}.png`}
                    alt={item?.name}
                  />
                </div>
                <div className="mx-5">
                  <h3 className="md:text-[20px] font-mono font-bold flex items-center xl:justify-start justify-center text-[#410EAD] xl:text-start text-center xl:mt-0 mt-3">
                    {item?.title}
                  </h3>
                  <p className="font-inter text-center xl:text-start text-[15px] text-[#59587B] font-normal pt-2">
                    {item?.description}
                  </p>

                  <div className="text-center xl:text-start">
                    <button className="mt-5 text-[#410EAD] text-base font-semibold">
                      {item?.buttonName}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
