/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Technologies = ({ content, path }) => {
  return (
    <>
      <div className="container mx-auto mt-20 grid md:grid-cols-2 xl:grid-cols-3 place-content-center place-items-center gap-4 md:gap-8">
        {content?.map((item) => (
          <div className="text-center" key={item?.id}>
            <div className="place-items-center grid h-24">
              <img
                src={`${`/assets/${path}/${item?.image}`}.png`}
                alt={item?.name}
              />
            </div>
            <p className="text-center font-normal mt-5 text-lg text-[#333333]">
              {item?.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
