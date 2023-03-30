"use client";
import React, { useState } from "react";
import { cx } from "class-variance-authority";

export const GameCard = ({ content }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      <div className="grid container transition-all ease-in-out duration-300 mx-auto xl:grid-cols-2 gap-4 mt-28 place-content-center place-items-center">
        {content?.map((item) => (
          <div
            key={item?.id}
            onClick={() => handleClick(item?.id)}
            className={cx(
              " cursor-pointer !h-full  rounded-[20px] p-10 max-w-2xl  hover:shadow-lg shadow-cardShadow"

              // activeTab === item?.id
              //   ? "bg-[#7B3FE4] rounded-[20px] border-none"
              //   : "bg-white shadow-cardShadow"
            )}
          >
            <h3
              className={cx(
                "text-2xl font-semibold font-mono",
                item?.id === 1
                  ? "text-[#CF9615]"
                  : item?.id === 2
                  ? "text-[#0BB2B2]"
                  : item?.id === 3
                  ? "text-[#DE1C90]"
                  : item?.id === 4
                  ? "text-[#B92A2A]"
                  : item?.id === 5
                  ? "text-[#2A0E99]"
                  : "text-[#B430D6]"
                // activeTab === item?.id ? "text-white" : "text-black"
              )}
            >
              {item?.title}
            </h3>
            <h5
              className={cx(
                "mt-5 text-base font-normal"
                // activeTab === item?.id ? "text-[#CCCCCC]" : "text-[#333333]"
              )}
            >
              {item?.description}
            </h5>
          </div>
        ))}
      </div>
    </>
  );
};
