import React from "react";

export const TypesofGames = ({ content, path }) => {
  return (
    <>
      <div className="hidden sm:flex mt-20  justify-center   w-full">
        <div
          className="rounded-[46px] py-16 px-8 lg:px-40"
          style={{
            background: `url(${`/assets/${path}/${content.bgImage}.png`} ) no-repeat center center `,
            backgroundSize: "cover",
          }}
        >
          <div className="grid xl:grid-cols-2 gap-8 place-content-center  ">
            {content?.services?.map((item) => (
              <div className=" w-full lg:max-w-lg" key={item?.id}>
                <h4 className="text-white text-lg lg:text-3xl font-mono font-bold">
                  <span className="text-[#FFCF10]">#</span>
                  {item?.title}
                </h4>
                <p className="mt-5 text-white font-inter font-normal text-sm lg:text-lg">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
