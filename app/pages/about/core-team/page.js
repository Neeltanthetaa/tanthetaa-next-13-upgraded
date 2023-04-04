/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import useEncryption from "../../../EncryptDecrypt/EncryptDecrypt";
import axiosInstance from "../../../apiInstances/axiosInstance";
import coreTem from "./../../../../public/Img/About/coreTem.svg";
import { BACKEND_BASE_URL } from "../../../apiInstances/baseurl";
import FirstHeading from "../../Home/FirstHeading/FirstHeading";

const CoreTeam = () => {
  const { encryptData, decryptData } = useEncryption();
  const [AllTeamMemberData, setAllTeamMemberData] = useState([]);
  const [ActiveTag, setActiveTag] = useState("all");
  const CategoryTags = [
    {
      name: "all",
      title: "All",
    },
    {
      name: "leadership",
      title: "Leadership",
    },
    {
      name: "sales_team",
      title: "Sales",
    },
    {
      name: "design_team",
      title: "Design",
    },
    {
      name: "blockchain_team",
      title: "Blockchain",
    },
    {
      name: "frontend_team",
      title: "Frontend",
    },
    {
      name: "backend_team",
      title: "Backend",
    },
    {
      name: "content_marketers",
      title: "Content Marketers",
    },
  ];

  const btnFill =
    "bg-[#410EAD]  text-white border border-[#410EAD] ease-in-out duration-700 shadow shadow-[#00000040] text-sm lg:text-lg px-4 md:px-8 py-2.5 rounded-full mr-3 my-2 font-mono cursor-pointer";
  const btnNone =
    "bg-white hover:bg-[#410EAD] text-[#410EAD] hover:text-white border hover:border-[#410EAD] ease-in-out duration-700 shadow shadow-[#00000040] text-sm lg:text-lg px-4 md:px-8 py-2.5 rounded-full mr-3 my-2 font-mono cursor-pointer";

  useEffect(() => {
    filterTeamMember("all");
  }, []);

  const filterTeamMember = async (ActiveTag) => {
    console.log("------------>>>ActiveTag", ActiveTag);

    await axiosInstance
      .post(`viewTeamMemberCategory?category=`, {
        name: ActiveTag,
      })
      .then((res) => {
        const myData = decryptData(res?.data?.data);
        console.log("------------>>>res", myData);
        setAllTeamMemberData(myData?.data);
      })
      .catch((err) => {
        console.log("err--->", err);
      });
  };

  return (
    <>
      <FirstHeading
        firstLineTitle="Commanders of "
        secondLineTitle="Innovation And"
        ThirdLineColorTitle="  Technology"
        subTitle="There are no magic solutions or one method that addresses all problems. Each organization is unique. All people are unique. The difficulties in business are distinct. This influences our work, too."
        HeadSingleImage={coreTem}
      />
      <div className="container mx-auto md:pt-[140px] pt-10 ">
        <div className="my-auto text-center lg:text-start mx-5 sm:mx-0">
          <div className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-10 lg:leading-tight mb-4 text-center">
            <span className="font-mono">Our Core </span>
            <span className=" font-mono mt-2 text-[#410EAD]">Team Leaders</span>
          </div>
          <p className="text-[#59587B] text-sm lg:text-base text-center font-normal mb-5 ">
            Meet a world-class team of technology advisors and growth
            facilitators as well as experts in their fields.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
          {CategoryTags?.length > 0 &&
            CategoryTags.map((i, index) => (
              <div
                key={index}
                className={`${ActiveTag == i?.name ? btnFill : btnNone}`}
                onClick={() => {
                  setActiveTag(i?.name);
                  filterTeamMember(i?.name);
                }}
              >
                {i?.title}
              </div>
            ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center md:pt-20 pt-10 gap-8">
          {AllTeamMemberData?.length > 0 &&
            AllTeamMemberData.map((i, index) => (
              <div
                className="grid place-content-center sm:place-content-start cursor-pointer mx-5 sm:mx-0 p-3 border-2 hover:border-dashed border-transparent hover:border-[#410EAD] rounded-xl"
                key={index}
              >
                <div className="h-full relative">
                  <img
                    src={`${BACKEND_BASE_URL}${i?.profileImg}`}
                    alt=""
                    className="h-[353px] ease-out delay-150 hover:duration-300 transition-all opacity-100 hover:opacity-0 w-auto sm:w-[352px] rounded-xl"
                  />
                  <div className="absolute top-0 left-0 grid place-content-end place-items-center">
                    <img
                      src={`${BACKEND_BASE_URL}${i?.editedImg}`}
                      alt=""
                      className="h-[353px] ease-out delay-150 hover:duration-300 transition-all opacity-0 hover:opacity-100 w-auto sm:w-[352px] rounded-xl"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col justify-start items-start mt-3">
                  <div className="w-full flex flex-row justify-start items-center gap-2">
                    <h1 className="w-full text-[#410EAD] text-xl font-bold leading-6 font-mono">
                      {i?.name}
                    </h1>
                    {i?.twitter || i?.linkedin ? (
                      <ul className="flex flex-row justify-end items-center gap-1">
                        {i?.twitter && (
                          <a
                            href={`https://twitter.com/${i?.twitter}`}
                            target="_blank"
                            className="mx-2"
                            rel="noreferrer"
                          >
                            <i className="fa-brands fa-twitter fa-lg hover:text-[#1da1f2]"></i>
                          </a>
                        )}
                        {i?.linkedin && (
                          <a
                            href={`https://www.linkedin.com/${i?.linkedin}`}
                            target="_blank"
                            className="mx-2"
                            rel="noreferrer"
                          >
                            <i className="fa-brands fa-linkedin fa-lg hover:text-[#0077b5]"></i>
                          </a>
                        )}
                      </ul>
                    ) : null}
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <p className="!capitalize text-[#525252] text-base font-medium ">
                      {i?.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CoreTeam;
