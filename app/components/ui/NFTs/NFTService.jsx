/* eslint-disable @next/next/no-img-element */
import React from "react";

export const NFTService = ({ content, path }) => {
  return (
    <>
      <div className="container mx-auto mt-40">
        <div className="shadow-cardShadow rounded-[2.25rem] p-14">
          <h2
            className={`text-2xl lg:text-3xl leading-snug font-bold font-mono text-[#410EAD] text-center`}
          >
            {content?.title && content?.title}
            <br />
            <span className={`text-black font-mono`}>
              {content?.subtitle && content?.subtitle}
            </span>
          </h2>
          <div className="mt-10 gap-4 xl:gap-8 grid md:grid-cols-2 xl:grid-cols-3 place-items-center">
            {content?.services?.map((item) => (
              <div key={item?.id} className="text-center">
                <div className="grid place-content-center place-items-center">
                  <img
                    src={`${`/assets/${path}/${item?.image}`}.png`}
                    alt={item?.image}
                  />
                </div>
                <h3 className="font-bold my-4 font-mono text-xl">
                  {item?.title && item?.title}
                </h3>
                <h4 className="font-bold font-mono text-3xl">
                  {item?.description && item?.description}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
