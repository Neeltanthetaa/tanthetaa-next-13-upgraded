import React from "react";

export const NFTPackages = ({ content }) => {
  return (
    <>
      <div className="grid container transition-all ease-in-out duration-300 mx-auto lg:grid-cols-2 gap-4 mt-28 place-content-center max-w-5xl place-items-center">
        {content?.map((item) => (
          <div
            key={item?.id}
            className="cursor-pointer !h-full rounded-[20px] p-10   hover:shadow-lg shadow-cardShadow text-center"
          >
            <h3 className="text-xl font-bold font-mono">
              {item?.title && item?.title}
            </h3>
            <p
              className="my-5 font-normal font-inter
           text-base text-[#59587B]"
            >
              {item?.description && item?.description}
            </p>
            <button class="bg-[#410EAD] font-mono text-base rounded whitespace-nowrap hover:bg-[#29e248] transition-colors hover:text-black  font-semibold duration-500 ease-in-out py-2 px-4 text-white">
              {item?.buttonName && item?.buttonName}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
