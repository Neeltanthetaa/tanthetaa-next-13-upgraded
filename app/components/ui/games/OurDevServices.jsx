/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";

export const OurDevServices = ({ content, path }) => {
  const stylesServices = {
    background: "#FFFFFF",
    boxShadow: "0px -4px 24px rgba(65, 14, 173, 0.09)",
    borderRadius: "40px 40px 0px 0px",
  };

  const [active, setActive] = useState(1);

  const handleClick = (type) => {
    typeof type === "number"
      ? setActive(type)
      : type === "prev"
      ? setActive((current) => current - 1)
      : setActive((current) => current + 1);
  };

  useEffect(() => {
    const intervalSlider = setInterval(() => {
      setActive((current) => (current < 6 ? current + 1 : 1));
    }, [4000]);
    return () => clearInterval(intervalSlider);
  }, []);

  return (
    <>
      <div className="container mx-auto max-w-5xl mt-20">
        <div className="" style={stylesServices}>
          <div className="flex flex-wrap gap-4 justify-between items-center pt-10 pb-3 px-8 xl:px-14">
            <h3 className="text-[#FF3D2E] text-2xl font-bold font-mono">
              {content?.title}
            </h3>
            <div
              style={{ boxShadow: "0px 0px 4px rgba(65, 14, 173, 0.16)" }}
              className="inline-flex rounded-full "
            >
              <button
                onClick={() => handleClick("prev")}
                disabled={active === 1}
                className="p-2 text-sm font-medium hover:text-[#FF3D2E] bg-white  border rounded-l-full  "
              >
                {"<---"}
              </button>

              <button
                onClick={() => handleClick("next")}
                disabled={active === content?.services?.length}
                className="p-2 text-sm font-medium text-gray-900 bg-white  border rounded-r-full  hover:text-[#FF3D2E] "
              >
                {"--->"}
              </button>
            </div>
          </div>
        </div>
        <div className="flex mt-6 flex-col lg:flex-row px-8 xl:px-14 justify-between gap-4">
          <div className="flex items-center flex-shrink gap-4">
            <div className="max-w-md mx-auto rounded-xl   md:max-w-2xl our-dev-services">
              {content?.services?.map((item) => (
                <div key={item?.id}>
                  {active === item?.id && (
                    <div className="md:flex our-dev-services">
                      <div className="md:shrink-0">
                        <img
                          className="h-48 w-full md:h-full md:w-60"
                          src={item?.image}
                          alt={item?.name}
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="block mt-1 text-xl leading-tight font-mono  font-bold text-black ">
                          {item?.title}
                        </h3>
                        <p className="mt-2 text-slate-500">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className=" hidden lg:block">
            {content?.services?.map((item) => (
              <div
                key={item?.id}
                onClick={() => handleClick(item?.id)}
                className="cursor-pointer"
              >
                <h4
                  className={`mt-4 ${active === item?.id && "text-[#FF3D2E]"}`}
                >{`> ${item?.title}`}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
