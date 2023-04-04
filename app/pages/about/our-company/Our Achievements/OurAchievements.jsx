import React from "react";
import clutch from "./../../../../../public/Img/About/clutch.svg";
import theManifest from "./../../../../../public/Img/About/theManifest.svg";
import businessOfApps from "./../../../../../public/Img/About/businessOfApps.svg";
import entrepreneur from "./../../../../../public/Img/About/entrepreneur.svg";
import zeroX from "./../../../../../public/Img/About/zeroX.svg";
import raritySniper from "./../../../../../public/Img/About/raritySniper.svg";
import zerion from "./../../../../../public/Img/About/zerion.svg";
import shopify from "./../../../../../public/Img/About/shopify.svg";
import Image from "next/image";

export const OurAchievements = () => {
  const OurAchievementsData = [
    {
      logo: clutch,
    },
    {
      logo: theManifest,
    },
    {
      logo: businessOfApps,
    },
    {
      logo: entrepreneur,
    },
    {
      logo: zeroX,
    },
    {
      logo: raritySniper,
    },
    {
      logo: zerion,
    },
    {
      logo: shopify,
    },
  ];
  return (
    <>
      <div className=" mx-auto py-10 xl:px-20 md:mt-[140px] mt-10 bg-[#964646] md:px-24">
        <div className="  text-center text-4xl font-bold md:mt-[140px]">
          <h2 className="text-center md:text-4xl text-xl text-white font-bold font-mono">
            Our Core Achievements
          </h2>
          <div className="">
            {/*<div className="pt-10 mx-auto text-center w-auto px-2 text-white font-normal text-lg text-[#59587B]">
              We’re enthusiastic learners and seasoned inventors. Together, we
              can create solutions that serve not just technology but the humans
              behind it.
            </div>*/}
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 items-center gap-5 mt-14 mb-20">
            {OurAchievementsData.map((e, keys) => (
              <div
                className="grid mx-auto place-items-center text-center xl:w-60 w-48 h-32 rounded-xl bg-[#fff]"
                key={keys}
              >
                <Image src={e.logo} alt="imgs" className="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
