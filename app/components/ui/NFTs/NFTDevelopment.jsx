import React from "react";

export const NFTDevelopment = ({ content }) => {
  return (
    <>
      <div className="container mx-auto mt-16 md:mt-[140px] px-4 md:px-24 lg:px-24 xl:px-0">
        <div className="text-center w-full">
          <h2
            className={`text-2xl lg:text-5xl leading-snug font-bold font-mono text-[#410EAD] `}
          >
            {content?.title && content?.title} <br />
            <span className={`text-black font-mono`}>
              {content?.subtitle && content?.subtitle}
            </span>
          </h2>
          {content?.description && (
            <p className="font-inter mt-8 text-[#59587B] max-w-5xl mx-auto font-normal text-base leading-6  w-full">
              {content?.description}
            </p>
          )}
          {content?.description1 && (
            <p className=" font-inter mt-8 text-[#59587B] max-w-5xl mx-auto font-normal text-base leading-6  w-full">
              {content?.description1}
            </p>
          )}
          {content?.description2 && (
            <p className=" font-inter mt-8 text-[#59587B] max-w-5xl mx-auto font-normal text-base leading-6  w-full">
              {content?.description2}
            </p>
          )}
        </div>
      </div>
    </>
  );
};
