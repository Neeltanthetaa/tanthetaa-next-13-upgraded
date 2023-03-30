/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Blogs = ({ content, path }) => {
  return (
    <>
      <div className="my-10 flex justify-center w-full">
        <div className="grid gap-4 lg:gap-8 container mx-auto md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {content?.map((item) => (
            <div key={item?.id}>
              <img
                className="w-full"
                src={`${`/assets/${path}/${item?.image}`}.png`}
                alt={item?.name}
              />
              <h4 className="my-5 font-mono text-lg font-bold">
                {item?.title}
              </h4>
              <p className="font-inter text-base font-normal text-[#59587B]">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
