import React from "react";
import { cx } from "class-variance-authority";

export const QuickFacts = ({ content }) => {
  return (
    <>
      <div className="container mx-auto  text-center  px-4 md:px-24 lg:px-24 xl:px-0   mt-10 ">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-0 gap-10 py-6  place-content-center ">
          {content?.map((item) => (
            <div key={item?.id} className="py-4  max-w-xs mx-auto">
              <h2
                // className="font-bold font-mono text-[#043E86] text-5xl"
                className={cx(
                  "font-bold font-mono  text-5xl",
                  item?.id === 1
                    ? "text-[#FF03B8]"
                    : item?.id === 2
                    ? "text-[#0AC01D]"
                    : item?.id === 3
                    ? "text-[#E48E3F]"
                    : "text-[#0092FF]"
                )}
              >
                {item?.title}
              </h2>
              <h3 className="font-semibold font-inter mt-5 text-base leading-5 px-8">
                {item?.description}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
