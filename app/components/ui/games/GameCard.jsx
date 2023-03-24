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
            // className={`border-2 cursor-pointer !h-full border-[#EAEAEA] rounded-[20px] p-10 max-w-2xl  hover:shadow-lg ${
            //   activeTab === item?.id
            //     ? "bg-[#043E86] rounded-[20px] border-none"
            //     : "bg-white "
            // }`}
            className={cx(
              "border-2 cursor-pointer !h-full border-[#EAEAEA] rounded-[20px] p-10 max-w-2xl  hover:shadow-lg",
              activeTab === item?.id
                ? "bg-[#043E86] rounded-[20px] border-none"
                : "bg-white"
            )}
          >
            <h3
              // className={`text-2xl font-semibold ${
              //   activeTab === item?.id ? "text-white" : "text-black"
              // }`}
              className={cx(
                "text-2xl font-semibold",
                activeTab === item?.id ? "text-white" : "text-black"
              )}
            >
              {item?.title}
            </h3>
            <h5
              // className={`mt-5  text-base font-normal ${
              //   activeTab === item?.id ? "text-[#CCCCCC]" : "text-[#333333]"
              // }`}
              className={cx(
                "mt-5  text-base font-normal",
                activeTab === item?.id ? "text-[#CCCCCC]" : "text-[#333333]"
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
