"use client";
import React, { useState } from "react";
import "./FirstHeading.css";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";

const FirstHeading = (props) => {
  const [open, setOpen] = useState(false);

  const openPopup = () => {
    setOpen(!open);
  };
  const btnShadow = {
    boxShadow: {
      boxShadow: "5px 15px 20px rgb(113 113 113 / 16%)",
    },
  };

  return (
    <>
      <section>
        {/* <div className="container mx-auto px-3 mt-16 md:mt-32 xl:mt-36">  text-center  */}
        <div className="container mx-auto mt-16 md:mt-[140px] px-5 md:px-24 lg:px-24 xl:px-0">
          <div className="grid lg:grid-cols-2 lg:gap-4 lg:text-start xl:px-2 lg:pt-16 pt-10 xl:py-20 font-mono font-bold">
            {/* Left Side Part */}
            <div className="my-auto text-center lg:text-start">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[45px] leading-10 md:leading-[47px] lg:leading-[57px] xl:leading-[67px] font-bold font-mono">
                {props.firstLineTitle && (
                  <span className="font-mono">{props.firstLineTitle} </span>
                )}
                {props.secondLineTitle && (
                  <span className="lg:block font-mono mt-2">
                    {props.secondLineTitle}
                  </span>
                )}
                {props.firstBlack && props.SecondColorFull && (
                  <span className="lg:block font-mono mt-2">
                    {props.firstBlack}
                    <span className="text-[#410EAD] font-mono">
                      {props.SecondColorFull}
                    </span>
                  </span>
                )}
                {props.firstColorFull && props.SecondBlack && (
                  <span className="lg:block font-mono text-[#410EAD] mt-2">
                    {props.firstColorFull}
                    <span className="font-mono">{props.SecondBlack}</span>
                  </span>
                )}
                <span className="lg:block mt-2 font-mono">
                  <span className=" mt-2 text-[#410EAD] relative font-mono">
                    {props.ThirdLineColorTitle}
                    {props.typeWritterClass && (
                      <Typewriter
                        options={{
                          strings: [
                            "Web 3.0",
                            "Blockchain",
                            "Metaverse",
                            "NFTs",
                            "Virtual Reality",
                            "Gaming",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                        className={props.typeWritterClass}
                      />
                    )}
                  </span>
                  {props.ThirdLineLastBlackTitle}
                </span>
              </h1>
              <h4 className="text-[#59587B] text-sm lg:text-base xl:text-lg leading-4 xl:leading-[21px] font-normal my-6 mr-0 xl:mr-44">
                {props.subTitle}
              </h4>
              {props.button && (
                <div>
                  <button
                    className="text-sm lg:text-lg  bg-[#29e248] hover:bg-white text-[#161c22] font-bold hover:text-[#410EAD] border border-[#29e248] hover:border-[#410EAD] rounded-3xl px-2 md:px-5 py-2.5 ease-in-out duration-700 font-mono"
                    style={btnShadow.boxShadow}
                  >
                    {props.button}
                  </button>
                </div>
              )}
              {props.link && (
                <Link
                  href="/"
                  className="text-sm lg:text-base text-[#410EAD] flex md:justify-start justify-center items-center mt-5"
                >
                  {props.link}
                  <HiArrowLongRight className="ml-2 lg:text-xl md:text-base text-sm" />
                </Link>
              )}
            </div>

            {/* Right Side Part */}
            <div className="flex justify-center lg:justify-end items-center mt-14 lg:mt-0">
              {props.tanθ && (
                <div className="flex justify-between items-center static mb-5">
                  <h2 className="text-sm md:text-xl xl:text-3xl text-[#410EAD] font-normal formula">
                    {props.tanθ}
                  </h2>
                  <h4 className="md:text-3xl font-normal px-0.5 md:px-1 lg:px-2 formula">
                    =
                  </h4>
                  <div>
                    <h3 className="text-[#FB5A5A] text-sm md:text-lg xl:text-xl 2xl:text-2xl text-center font-normal relative  formula">
                      sin θ
                    </h3>
                    <h3 className="text-[#0BB226] text-sm md:text-lg xl:text-xl 2xl:text-2xl text-center font-normal border-t-[1px] border-black relative  formula">
                      cos θ
                    </h3>
                  </div>
                  <h4 className="md:text-3xl font-normal px-0.5 md:px-1 lg:px-2 formula">
                    =
                  </h4>
                  <div>
                    <h3 className="flex items-center justify-center text-[#FB5A5A] text-sm md:text-lg xl:text-xl 2xl:text-2xl font-normal relative  formula">
                      your vision
                    </h3>
                    <h3 className="flex items-center justify-center text-[#0BB226] text-sm md:text-lg xl:text-xl 2xl:text-2xl font-normal border-t-[1px] border-black relative  formula">
                      our services
                    </h3>
                  </div>
                  <h4 className="md:text-3xl font-normal px-0.5 md:px-1 lg:px-2 formula">
                    =
                  </h4>
                  <h2 className="text-sm md:text-xl xl:text-3xl text-[#410EAD] font-normal formula">
                    success
                  </h2>
                </div>
              )}
              {props.HeadImage2 && (
                <Image src={props.HeadImage2} alt="Head" className="mx-auto" />
              )}
              {props.HeadSingleImage && (
                <Image
                  src={props.HeadSingleImage}
                  alt="HeadSingleImage"
                  className="mx-auto lg:mx-0 w-96 lg:w-auto"
                />
              )}
            </div>
          </div>
        </div>

        {/* {open && <Popop openPopup={openPopup} />} */}
      </section>
    </>
  );
};

export default FirstHeading;
