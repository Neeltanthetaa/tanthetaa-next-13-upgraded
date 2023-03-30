/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cx } from "class-variance-authority";

export const NFTClients = ({ content, path }) => {
  return (
    <>
      <div className={cx(" p-8 lg:p-24 my-10", content?.backGroundColor)}>
        <div className="text-center max-w-5xl mx-auto">
          <h3 className="text-white font-bold font-mono text-3xl">
            {content?.title && content?.title}
          </h3>
          <p className="mt-5 text-[#EAEAEA] text-lg ">
            {content?.description && content?.description}
          </p>
        </div>

        <div className="mt-20 container mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-4  ">
          {content?.services?.map((item) => (
            <div key={item?.id} className="bg-white rounded-xl text-center p-5">
              <div className="grid place-items-center">
                <img
                  src={`${`/assets/${path}/${item?.image}`}.png`}
                  alt={item?.image}
                  //  className="h-20 w-60"
                />
                <p className="text-[#59587B] text-lg mt-5">
                  {item?.description && item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
