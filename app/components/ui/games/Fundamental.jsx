/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Fundamental = ({ content, path }) => {
  const cardStyles = {
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 0 4px rgba(0, 0, 0, 0.4)",
  };

  return (
    <>
      <div className="flex container mx-auto flex-wrap justify-center gap-5 mt-10">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {content?.map((item) => (
            <div key={item?.id} className=" !h-full p-10" style={cardStyles}>
              <img
                src={`/assets/${path}/${item?.image}.png`}
                alt={item?.name}
                className
              />
              <div className="">
                <h3 className="md:text-lg font-mono font-semibold my-3 ">
                  {item?.title}
                </h3>
              </div>
              <div className>
                <p className="text-base text-[#59587B] font-normal pt-2 font-inter ">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
