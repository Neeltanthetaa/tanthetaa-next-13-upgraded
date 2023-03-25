import React from "react";

export const GameProcess = ({ content }) => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-24 lg:px-24 xl:px-0   mt-10 ">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4">
          {content?.map((item) => (
            <div
              key={item?.id}
              className="p-8 rounded-2xl h-full shadow-gameShadow hover:shadow-lg"
            >
              <h3 className="font-mono font-bold text-lg">
                <span className="text-[#410EAD]">{item?.id}. </span> Analysing
                {item?.title}
              </h3>
              <p className="mt-5 text-base text-[#59587B]">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
