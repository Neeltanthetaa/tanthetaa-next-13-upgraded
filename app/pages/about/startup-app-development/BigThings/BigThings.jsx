/* eslint-disable react/no-unescaped-entities */
import React from "react";
import AcrossDevices from "./../../../../../public/Img/About/AcrossDevices.svg";
import ProductShipping from "./../../../../../public/Img/About/ProductShipping.svg";
import Lifecycle from "./../../../../../public/Img/About/Lifecycle.svg";
import Image from "next/image";

export const BigThings = () => {
  const bigThingsData = [
    {
      id: 1,
      image: AcrossDevices,
      title: "Impeccable App Experience Across Devices",
    },
    {
      id: 2,
      image: ProductShipping,
      title: "Week-wise Product Version Shipping",
    },
    {
      id: 3,
      image: Lifecycle,
      title: "Management of Entire App Lifecycle",
    },
  ];

  return (
    <>
      <div className="container mx-auto mt-16 lg:mt-[140px] px-4 lg:px-24 xl:px-0">
        <div className="text-center lg:text-start pt-10">
          <div className="text-center font-mono font-bold text-2xl lg:text-3xl xl:text-4xl leading-10 lg:leading-tight mb-4">
            We Help Small
            <span className="text-[#410EAD] font-mono">Teams Do Big</span>
          </div>
          <p className="text-[#59587B] text-sm lg:text-base text-center font-normal mb-5">
            With the help of our startup app developers, companies from all over
            the world are powered, empowering the dreamers to realize their
            visions. Our experience working with over 700 emerging brands has
            given us a better understanding of the financial and timeline
            constraints faced by startups. We walk you through the idea
            valuation process while outlining your objectives and benchmarks. In
            order to prepare you for your journey toward becoming tomorrow's
            most influential brands, we combine the technical aspects of design
            thinking with fundamental human emotions like empathy and reason.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 items-center text-center font-bold mt-11">
          {bigThingsData?.map((item) => (
            <>
              <div
                key={item?.id}
                className="mt-8 mx-8 lg:mx-5 md:mx-2 xl:mx-14"
              >
                <div className="">
                  <Image
                    src={item?.image}
                    alt={item?.image}
                    className="text-center mx-auto"
                  />
                </div>
                <div className="text-sm lg:text-base text-center font-normal mb-5 text-[#000000] py-5">
                  {item?.title}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
