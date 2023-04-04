import React from "react";
import WebSev from "./../../../../public/Img/About/WebSEv.svg";
import Image from "next/image";
const MvpDevService = () => {
  return (
    <>
      <section className="bg-[#0B949D]">
        <div className="container px-4 md:px-24 lg:px-24 xl:px-0 mx-auto mt-16 md:mt-[140px] py-[59px]">
          <div className="grid lg:grid-cols-2 lg:gap-4">
            {/* Left Side Part */}
            <div className="mx-auto mt-5 lg:mt-0">
              <Image src={WebSev} alt="Web Sev" className="mx-auto" />
            </div>

            {/* Right Side Part */}
            <div className="my-auto text-center lg:text-start pt-10">
              <div className="text-2xl lg:text-3xl xl:text-4xl leading-10 lg:leading-tight font-bold mb-4 font-mono">
                <span className="font-mono text-white">
                  With Our MVP Development Services, Bring Your Ground-Breaking
                  Idea to Life.
                </span>
              </div>
              <p className="text-white text-sm lg:text-base font-normal mb-5">
                We make your ground-breaking concept a reality for a million
                users. We have quickly created hundreds of MVPs and scaled
                startups to new heights in just four years. opportunities.
              </p>
              <p className="text-white text-sm lg:text-base font-normal mb-5">
                A Minimum Viable Product is a great tool to determine the
                product’s potential in the market. This development technique
                emphasizes validated learning. MVP is a 1.0 version of a
                product. In minimum functionality, an MVP offers maximum value.
              </p>
              <p className="text-white text-sm lg:text-base font-normal mb-5">
                We begin by validating a product idea, receive invaluable user
                insights and quickly iterate and improve a product, before fully
                developing it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MvpDevService;
