import React from "react";
import startup from "./../../../../../public/Img/About/startup.svg";
import ProductManager from "./../../../../../public/Img/About/ProductManager.svg";
import UXUI from "./../../../../../public/Img/About/UXUI.svg";
import businessAnalyst from "./../../../../../public/Img/About/businessAnalyst.svg";
import startupsConsultant from "./../../../../../public/Img/About/startupsConsultant.svg";
import developmentConsultant from "./../../../../../public/Img/About/developmentConsultant.svg";
import QualityAnalyst from "./../../../../../public/Img/About/QualityAnalyst.svg";

import Image from "next/image";
import RelatedArticles from "../../agile-development/RelatedArticles/RelatedArticles";

export const Amplify = () => {
  const AssembleTeam = [
    {
      img: ProductManager,
      title: "Product Manager",
    },
    {
      img: UXUI,
      title: "UI/UX Designer",
    },
    {
      img: businessAnalyst,
      title: "Business Analyst",
    },
    {
      img: startupsConsultant,
      title: "Startup Consultant",
    },
    {
      img: developmentConsultant,
      title: "Development Support",
    },
    {
      img: QualityAnalyst,
      title: "Quality Analyst",
    },
  ];

  return (
    <>
      <div className=" mx-auto mt-[140px] ">
        <div className="my-auto mx-auto text-center lg:text-start pt-10">
          <div className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-10 lg:leading-tight mb-4 text-center">
            <span className="font-mono">{`Amplify `}</span>
            <span className="font-mono mt-2 text-[#410EAD]">
              {`Your Startup`}
            </span>
            <p className="font-normal text-[15px] leading-5 mt-3">
              <span>
                No matter the product that you have envisioned is big or
              </span>
              <span className="block">
                small, your goals moderate or moonshot, we make it happen.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-16 bg-[#FAF7FF] px-[74px] grid lg:grid-cols-2 grid-cols-1 py-[39px] gap-36">
          {/* left part */}
          <div className="grid place-items-center">
            <Image src={startup} alt="startup" className="w-auto" />
          </div>

          {/* right part */}
          <div>
            <h3 className="text-[#333FAC] font-bold text-base md:text-lg xl:text-xl leading-[30px]">
              PERFECT WHEN:
            </h3>
            <p className="text-[#59587B] text-xs md:text-sm lg:text-[17px] leading-3 md:leading-4 lg:leading-[18px] xl:leading-[21px] mt-[10px]">
              It is the best approach to follow when a Startup is looking for
              Angel Investment.
            </p>
            <h3 className="text-[#333FAC] mt-5 font-bold text-base md:text-lg xl:text-xl leading-[30px]">
              ASSEMBLE YOUR TEAM
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 lg:gap-3">
              {AssembleTeam.map((e, i) => (
                <div key={i} className="flex items-center  mt-[18px]">
                  <Image src={e.img} alt="Assemble Team" />
                  <h4 className="pl-2.5 pr-[13px]">{e.title}</h4>
                </div>
              ))}
            </div>
            <h3 className="text-[#333FAC] mt-5 font-bold text-base md:text-lg xl:text-xl leading-[30px]">
              DELIVERABLES
            </h3>
            <p className="text-[#59587B] text-xs md:text-sm lg:text-[17px] leading-3 md:leading-4 lg:leading-[18px] xl:leading-[21px] mt-[10px]">
              -Project deployed on a product server
            </p>
            <p className="text-[#59587B] text-xs md:text-sm lg:text-[17px] leading-3 md:leading-4 lg:leading-[18px] xl:leading-[21px] mt-[10px]">
              -Development strategy and post launch support
            </p>
            <p className="text-[#59587B] text-xs md:text-sm lg:text-[17px] leading-3 md:leading-4 lg:leading-[18px] xl:leading-[21px] mt-[10px]">
              -Presentation of a project to an investor
            </p>
            <p className="text-[#59587B] text-xs md:text-sm lg:text-[17px] leading-3 md:leading-4 lg:leading-[18px] xl:leading-[21px] mt-[10px]">
              -Setting analytics systems
            </p>
            <p className="text-[#59587B] text-xs md:text-sm lg:text-[17px] leading-3 md:leading-4 lg:leading-[18px] xl:leading-[21px] mt-[10px]">
              -3 month supervision
            </p>
            <p className="text-[#59587B] text-xs md:text-sm lg:text-[17px] leading-3 md:leading-4 lg:leading-[18px] xl:leading-[21px] mt-[10px]">
              -Fundraising support
            </p>

            <button className="text-sm lg:text-lg font-normal bg-[#410EAD] hover:bg-white text-white hover:text-[#410EAD] border border-[#410EAD] rounded shadow-[#410eadb3] shadow-sm hover:shadow-md px-2 md:px-3 py-1 mt-5 ease-in-out duration-700 font-mono">
              Request a proposal
            </button>
          </div>
        </div>
      </div>

      <RelatedArticles />
    </>
  );
};
