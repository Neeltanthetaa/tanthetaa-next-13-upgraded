import React from "react";
import "./NFTOffers.css";

export const NFTOffers = ({ content }) => {
  return (
    <>
      <div className={`${content?.backgroundColor} p-6 md:p-10 xl:p-20 mt-36`}>
        <div className="text-center">
          <h3 className="font-mono text-3xl text-white  font-bold leading-tight lg:text-4xl">
            {content?.title && content?.title} <br />
            {content?.subtitle && content?.subtitle}
          </h3>
          <p className="text-base text-[#F0F0F0] mt-5 font-normal leading-6 font-inter ">
            {content?.description && content?.description}
          </p>
        </div>

        <div className="mt-14">
          <div className="meta-case-container grid md:grid-cols-2 xl:grid-cols-4 mt-8 md:mt-10 xl:mt-14 meta-cases-15  gap-4">
            {content?.services?.map((item) => (
              <div key={item?.id} className="meta-case">
                <h5
                  className={`${item?.titleColor} font-mono text-lg font-bold`}
                >
                  {item?.title && item?.title}
                </h5>
                <p className="text-base text-[#F0F0F0] mt-5 font-normal leading-6 font-inter ">
                  {item?.description && item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
