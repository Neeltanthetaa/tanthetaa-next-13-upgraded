/* eslint-disable @next/next/no-img-element */
import React from "react";

export const TokenDevelopment = ({ content, path }) => {
  return (
    <>
      <div className="container mx-auto mt-20 grid   md:grid-cols-3 xl:grid-cols-4 place-content-center  gap-4 md:gap-8">
        {content?.map((item) => (
          <div className="text-center" key={item?.id}>
            <div className="place-items-center grid h-24">
              <img
                src={`${`/assets/${path}/${item?.image}`}.png`}
                alt={item?.title}
              />
            </div>
            <h3 className="my-3 text-center font-bold text-lg">
              {item?.title && item?.title}
            </h3>
            <p className="text-center font-normal  text-base text-[#59587B]">
              {item?.description && item?.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
