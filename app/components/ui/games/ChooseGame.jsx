/* eslint-disable @next/next/no-img-element */
import React from "react";

export const ChooseGame = ({ content, path }) => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-24 lg:px-24 xl:px-0   mt-10 ">
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-4">
          {content?.map((item) => (
            <div key={item?.id} className="items-center md:p-10 p-7 mb-5  ">
              <div className="flex flex-wrap xl:flex-nowrap xl:justify-start justify-center">
                <div className>
                  <img
                    src={`/assets/${path}/${item?.image}.png`}
                    alt={item?.name}
                    className="xl:w-32 w-12 "
                  />
                </div>
                <div className="mx-5">
                  <h3 className="md:text-[20px] font-mono font-bold flex items-center xl:justify-start justify-center xl:text-start text-center xl:mt-0 mt-3">
                    {item?.title}
                  </h3>
                  <h5 className="text-center xl:text-start text-[15px] text-[#333333] font-normal pt-2">
                    {item?.description}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
