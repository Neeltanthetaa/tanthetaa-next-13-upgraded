/* eslint-disable @next/next/no-img-element */
import React from "react";

export const CooperationModels = ({ content, path }) => {
  return (
    <>
      <div className="container my-6 mx-auto lg:flex justify-center items-center gap-16">
        <div className="grid place-items-center">
          <img
            src={`/assets/${path}/${content?.image}.png`}
            alt="marioRunning"
            className="w-52 max-w-2xl xl:w-auto "
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-10 mx-5 lg:mx-0">
          {content?.services?.map((item) => (
            <div key={item?.id}>
              <h3 className="font-mono font-bold text-lg">
                <span className="text-[#410EAD]"># </span>
                <span>{item?.title}</span>
              </h3>
              <p className="mt-4 font-normal text-[#333333] ">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
