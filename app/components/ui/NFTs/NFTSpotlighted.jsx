/* eslint-disable @next/next/no-img-element */
import React from "react";

export const NFTSpotlighted = ({ content, path }) => {
  return (
    <>
      <div className="max-w-7xl w-full justify-center flex-wrap container mx-auto flex mt-10 gap-4 items-center">
        {content?.map((item) => (
          <div key={item?.id}>
            <img
              src={`${`/assets/${path}/${item?.image}`}.png`}
              alt={item?.image}
              //   className="h-20 w-60"
            />
          </div>
        ))}
      </div>
    </>
  );
};
