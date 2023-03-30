"use client";
import React, { useState } from "react";
import { cx } from "class-variance-authority";

const Faqs = ({ content }) => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <>
      <div className="container mx-auto my-20 px-4 md:px-24 lg:px-24 xl:px-0  mt-10 ">
        {content?.map((item) => (
          <div className="my-4" key={item?.id}>
            <div
              onClick={() => setIsOpen(item?.id === isOpen ? 0 : item?.id)}
              className="rounded-2xl w-full md:max-w-7xl md:mx-auto border border-solid  border-[#B3B3B3
  ] "
            >
              <div className="p-4 flex justify-between items-center font-semibold text-base cursor-pointer">
                <h3>{item?.question}</h3>
                {isOpen === item?.id ? " - " : " + "}
              </div>
            </div>
            <p
              className={cx(
                isOpen === item?.id ? "h-auto" : "hidden h-0",
                "w-full md:max-w-7xl md:mx-auto p-4 transition-[height] ease-in-out duration-500 "
              )}
            >
              {item?.answer}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faqs;
