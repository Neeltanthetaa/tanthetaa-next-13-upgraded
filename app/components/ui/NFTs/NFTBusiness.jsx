import React from "react";
import { cx } from "class-variance-authority";

export const NFTBusiness = ({ content }) => {
  return (
    <>
      <div className="mt-5 container mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {content?.map((item) => (
          <div
            key={item?.id}
            className="grid place-items-start p-8 gap-3 relative"
          >
            <div className="absolute top-0 left-0 font-bold text-[48px] text-start leading-snug  !opacity-10">
              {item?.id && item?.id}
            </div>
            <h3
              className={cx(
                "font-mono font-bold text-[17px]  text-start",
                item?.id === "01"
                  ? "text-[#E13FE4]"
                  : item?.id === "02"
                  ? "text-[#01D092]"
                  : item?.id === "03"
                  ? "text-[#E89900]"
                  : item?.id === "04"
                  ? "text-[#6A3FE4]"
                  : item?.id === "05"
                  ? "text-[#D02601]"
                  : "text-[#E13FE4]"
              )}
            >
              {item?.title && item?.title}
            </h3>
            <p className="text-sm text-[#59587B]  px-30 text-start">
              {item?.description && item?.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
