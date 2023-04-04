import React from "react";

export const Counter = () => {
  const counterData = [
    { id: 1, title: "1000 +", description: "Products (Apps) Delivered" },
    { id: 2, title: "1000 +", description: "creative nerds under one roof" },
    { id: 3, title: "$950m", description: "Investment Raised..." },
  ];

  const counterList = counterData?.map((item) => {
    return (
      <>
        <div className="" key={item?.id}>
          <h2 className="text-4xl text-[#410EAD] leading-loose font-bold font-mono">
            {item?.title}
          </h2>
          <h3 className="text-2xl font-inter leading-9 text-[#404040]">
            {item?.description}
          </h3>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="container mx-auto pt-10  md:px-24">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 items-center text-center font-bold">
          {counterList}
        </div>
      </div>
    </>
  );
};
