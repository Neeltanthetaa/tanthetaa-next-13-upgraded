import React from "react";
import Img_1 from "./../../../../../public/Img/About/CareerImg.svg";
import Image from "next/image";

export const CareerPic = () => {
  return (
    <section className="bg-[#42855B]">
      <div className="container px-4 md:px-24 lg:px-24 xl:px-0 mx-auto mt-16 md:mt-[140px] py-[59px]">
        <div className="grid lg:grid-cols-2 lg:gap-4">
          {/* Left Side Part */}
          <div className="mx-auto mt-5 lg:mt-0 order-2 lg:order-1">
            <Image src={Img_1} alt="imgs" className="mx-auto" />
          </div>

          {/* Right Side Part */}
          <div className="my-auto text-center lg:text-start order-1 lg:order-2">
            <div className="text-2xl lg:text-3xl xl:text-4xl leading-10 lg:leading-tight font-bold mb-4 font-mono">
              <span className="font-mono text-[#FFFFFF]">Why Work with </span>
              <span className="lg:block text-[#FFFFFF] font-mono mt-2">
                Tan θ
              </span>
            </div>
            <p className="text-[#DADADA] text-sm lg:text-base font-normal mb-5">
              Tan θ promotes a culture of impacting users’ lives with our
              innovations. And we are looking for people who share, understand
              our vision and contribute to it. Our company facilitates an
              environment with open communication, togetherness and equal
              opportunities.
            </p>
            <p className="text-[#DADADA] text-sm lg:text-base font-normal mb-5">
              We’re passionate about constantly expanding and forever keen to
              find dynamic talent. Join us to level up not just the company’s
              benchmarks but your own as well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
