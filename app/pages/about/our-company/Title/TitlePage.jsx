/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Title from "./../../../../../public/Img/About/Title.svg";
import abc from "./../../../../../public/Img/About/abc.svg";
import Image from "next/image";
const TitlePage = () => {
  return (
    <>
      {/*  title */}

      <div className="container mx-auto mt-16 md:mt-[140px] px-4 md:px-24 lg:px-24 xl:px-0">
        <div className="grid lg:grid-cols-2 lg:gap-4 lg:text-start xl:px-2 lg:pt-16 pt-10 xl:py-20 font-mono font-bold">
          {/* Left Side Part */}
          <div className="my-auto text-center lg:text-start">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[45px] leading-10 md:leading-[47px] lg:leading-[57px] xl:leading-[67px] font-bold font-mono">
              Reconstruct
              <span className="lg:block font-mono">Businesses </span>
              <span className="font-mono text-[#410EAD]">With Innovation</span>
            </h1>
          </div>

          <div className=" mt-5 lg:mt-0">
            <Image src={Title} alt="title" />
          </div>
        </div>
      </div>
      {/* end title */}
      <div className=" relative bg-[#FAF7FF] border-1 rounded-[30px] mt-20 md:mt-[140px] container mx-auto -z-10 md:px-24">
        <div className="md:-mt-28 -mt-12 absolute text-center pl-24  md:w-auto  w-56">
          <Image src={abc} alt="title" />
        </div>
        <div>
          <div className="grid lg:grid-cols-2 lg:text-start text-center gap-5 justify-center pb-10">
            <div className=" lg:text-start xl:px-20 pt-10 lg:py-20  font-bold ">
              <h2 className="xl:text-4xl sm:text-3xl text-xl pl-3 font-mono leading-relaxed  text-[#410EAD]">
                a = Who We Are?
              </h2>
            </div>
            <div className="grid items-center px-5">
              <h4 className="text-[#59587B] text-lg">
                We are firm believers in the transformative power of innovation
                and technology. We support organizations and people as they
                adopt and adapt digital transformation. With our
                forward-thinking and cutting-edge technological solutions, we
                hope to change people's lives and improve businesses.
              </h4>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 lg:text-start text-center gap-5 justify-center pb-10">
            <div className=" lg:text-start xl:px-20 pt-10 xl:py-20  font-bold ">
              <h2 className="xl:text-4xl sm:text-3xl text-xl pl-3 font-mono leading-relaxed  text-[#410EAD]">
                b = What We Do Best?
              </h2>
            </div>
            <div className="grid items-center px-5">
              <h4 className="text-[#59587B] text-lg">
                We are firm believers in the transformative power of innovation
                and technology. We support organizations and people as they
                adopt and adapt digital transformation. With our
                forward-thinking and cutting-edge technological solutions, we
                hope to change people's lives and improve businesses.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitlePage;
