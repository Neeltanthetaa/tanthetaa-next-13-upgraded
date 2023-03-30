/* eslint-disable @next/next/no-img-element */
import React from "react";

export const GameHead = ({ content, path }) => {
  return (
    <>
      {/* 1st Blog  mt-16 md:mt-[140px]*/}
      <div
        className={` max-h-min w-full  `}
        style={{
          background: `url(${`/assets/${path}/${content.bgImage}.png`} ) no-repeat center center `,
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-4 md:px-24 lg:px-24 xl:px-0 p-40 xl:p-80">
          <div className="grid xl:grid-cols-2 gap-4 md:gap-0 !place-content-center place-items-center ">
            <div className="w-full">
              <h1 className="text-2xl font-mono md:text-5xl font-bold text-white mx-auto max-w-xl leading-tight">
                {content.title && content.title}
                <br />
                <span className="text-[#FFCF10]">
                  {content.subtitle && content.subtitle}
                </span>
              </h1>

              {content.description && (
                <h5 className="text-[#D9D9D9]  font-inter mx-auto max-w-xl font-normal text-lg mt-5">
                  {content.description}
                </h5>
              )}
            </div>

            <div className="w-full h-full">
              <img
                src={`/assets/${path}/${content.heroImage}.png`}
                alt="MarioBattle"
                className="object-cover mx-auto"
              />
            </div>

            {/* <div className="w-full h-full">
              <Image
                src={`/assets/${path}/${content.heroImage}.png`}
                alt="MarioBattle"
                width={666}
                height={400}
                className="object-cover mx-auto"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
