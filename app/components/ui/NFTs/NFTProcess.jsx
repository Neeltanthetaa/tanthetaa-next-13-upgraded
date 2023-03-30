/* eslint-disable @next/next/no-img-element */
import React from "react";

export const NFTProcess = ({ path, content }) => {
  return (
    <>
      <div className="grid container transition-all ease-in-out duration-300 mx-auto md:grid-cols-2 xl:grid-cols-3 gap-4 mt-14 place-content-center place-items-center">
        {content?.map((item) => (
          <div
            key={item?.id}
            className="cursor-pointer !h-full rounded-[20px] p-10 max-w-2xl  hover:shadow-lg shadow-cardShadow"
          >
            <img
              src={`${`/assets/${path}/${item?.image}`}.png`}
              alt={item?.image}
            />

            <h3 className="my-4 font-bold text-lg font-mono">
              {item?.title && item?.title}
            </h3>
            <p className="text-[#59587B] font-inter text-base">
              {item?.description && item?.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
