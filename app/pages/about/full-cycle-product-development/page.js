import React from "react";
import MobileDevelop from "./MobileDevelop";
import EducationSector from "@/app/CommanComponents/EducationSector/EducationSector";
import Link from "next/link";
import TitleWithOutPic from "@/app/CommanComponents/TitleWithOutPic/TitleWithOutPic";
import shield from "./../../../../public/Img/About/shield.svg";
import Consultation from "./../../../../public/Img/About/Consultation and Assesment.svg";
import ProjectScoping from "./../../../../public/Img/About/ProjectScoping.svg";
import Estimation from "./../../../../public/Img/About/Estimation.svg";
import MaskGroup from "./../../../../public/Img/Home/maskGroup.svg";
import UXBusiness from "./../../../../public/Img/About/UXBusiness.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";

export const dynamic = "force-dynamic";

const FullCycleProductDevelopment = () => {
  const ProductData = [
    {
      Icon: shield,
      Title: "Protect your idea",
      subTitle:
        "Every project starts with an NDA. Your project is our responsibility and we make sure your intellectual property is always safe and secure.",
    },
    {
      Icon: Consultation,
      Title: "Consultation and Assesment",
      subTitle:
        "We discuss your idea and inform you about our modus operandi. By briefing you about how we operate and acquaint you with our process.",
    },
    {
      Icon: ProjectScoping,
      Title: "Project Scoping",
      subTitle:
        "In our scopping session, we infer your value propositions, characterize your product and formulate a well defined scope of work.",
    },
    {
      Icon: Estimation,
      Title: "Estimation and Proposal",
      subTitle:
        "Depending on the complexity of the project, we give you a ballpark estimation and submit a detailed proposal with cost & timeline.",
    },
  ];
  return (
    <>
      <TitleWithOutPic
        Data_1="Design Thinking. Rapid Prototyping. Agile Development"
        Title="Transform Your Business With Our  "
        TitleSub="Full Cycle"
        TitleInSub="App Development Services"
        subTitle="We not only streamline the entire process but work with you all the way through, from ideation to rapid "
        subTitleIn="launching an MVP"
        //subTitleIn_2=" in the market, we not only streamline the entire process but"
        //subTitleIn_3="stick with you till the very end."
        btn="Book a free consultation"
      />
      <div className="container mx-auto px-4 md:px-24 lg:px-24 xl:px-0 md:mt-[140px] pt-10">
        <div className="bg-[#525356] text-center md:text-[35px] text-[20px] md:py-[60px] pt-10 rounded-xl md:rounded-2xl xl:rounded-3xl">
          <h2 className="font-mono font-bold md:leading-[52px] leading-2 text-white">
            Construct Your Product With
            <span className=" lg:block text-white font-mono font-bold md:leading-[52px] ">
              Our Project Managers
            </span>
          </h2>
          <h5 className="md:text-[20px] text-[15px]  text-white xl:leading-5 leading-6 font-normal py-5 md:px-10 px-3">
            A full-cycle product development process must start with product
            management. We help you develop a fantastic product by bringing the
            appropriate individuals, strategies, and framework to the table.
          </h5>
          <h5 className="md:text-[20px] text-[15px]  text-white xl:leading-5 leading-6 font-normal py-5 md:px-20 px-3">
            Using a mixture of agile development capabilities, design thinking
            and nearly 20 years of experience in product development, Tan θ
            offers a potent combination of services to enhance your product
            development activities.
          </h5>
          <h5 className="md:text-[20px] text-[15px]  text-white xl:leading-5 leading-6 font-normal py-5 md:px-40 px-3">
            Our product marketing managers analyze your concept and business
            goals, help you ideate the product, design and develop prototypes,
            and gather early feedback to prepare an MVP.
          </h5>
          <Link
            href="/"
            className="text-white text-[17px] flex justify-center items-center gap-5 font-medium max-w-[90%] "
          >
            Learn more about product development
            <div className="">
              <HiArrowNarrowRight />
            </div>
          </Link>
          <div className="flex flex-wrap justify-center items-center gap-20 py-5 px-3">
            <Image src={UXBusiness} alt="Project Managers" />

            <div>
              <h3 className="text-white font-semibold text-[20px] ">
                UX + Tech = Business
              </h3>
              <h3 className="text-white font-semibold text-[20px] ">
                a2 + b2 = c2
              </h3>
            </div>
          </div>
        </div>

        <div>
          <div className="  xl:px-0 xl:mt-[140px] pt-10">
            <div className="grid mx-auto lg:grid-cols-2  items-center ">
              <div className=" lg:text-start text-center">
                <h2 className="font-mono font-bold md:leading-[52px]  leading-2 md:text-[35px] text-[20px] ">
                  We Start <span className="text-[#410EAD] "> Here</span>
                </h2>
                <h5 className="md:pr-10 py-5 2xl:mr-52">
                  Any issues that might negatively affect your product are
                  quickly identified by us. In an effort to boost business
                  value, we provide end-to-end solutions.
                </h5>
                <Link
                  href="/"
                  className="text-[#7B3FE4] text-[17px] flex md:justify-start  justify-center items-center gap-2 py-2 font-medium "
                >
                  Request a team presentation
                  <div className="md:visible  invisible ">
                    <HiArrowNarrowRight />
                  </div>
                </Link>
              </div>

              <div className="">
                {ProductData.map((e, index) => (
                  <div
                    className="flex rounded-xl items-center border-[#FFFFFF] shadow shadow-[#410EAD] border-solid py-5 px-5 md:px-10 my-5"
                    key={index}
                  >
                    <div>
                      <Image
                        src={e.Icon}
                        alt="shield"
                        className="md:h-20 h-40 "
                      />
                    </div>
                    <div className="md:px-5 pl-5 md:mx-2">
                      <h3 className="md:text-[20px] font-semibold">
                        {e.Title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <EducationSector
        educationBgColor="bg-[#0E1041]"
        educationTextColor="text-white"
        educationBorderColor="brder-white"
        educationLinkColor="text-white"
        educationRightSideBgColor="bg-[#7A7C96]"
        title=" Transforming the"
        subtitle="Education Sector"
        subtitlesub=" with decentralized LMS"
        leftTitle=" Nova"
        faq=" The app which answers all the authentication and"
        eduError="genuinity issues prevalent in today’s education"
        sector=" sector through the power of Blockchain."
        educationRightSideImage={MaskGroup}
      />
      <MobileDevelop />
    </>
  );
};

export default FullCycleProductDevelopment;
