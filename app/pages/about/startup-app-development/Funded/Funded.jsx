import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi";

export const Funded = () => {
  const FundedData = [
    {
      Title: "Our Product Canvas Helps Build Right. Build Smart.",
      subData:
        " A Product Canvas is made with all the details of the product planning stages on one page before the startup software development process is started. All interested parties are given access to the product canvas, which contains details about the project's goal, the user persona's characteristics, and the functionality of the mobile app.",
    },
    {
      Title: "We Ship Early and Ship Often",
      subData:
        " Our release schedule guarantees that the features will be available as soon as possible. The likelihood of success increases and the likelihood that you will develop the wrong thing decreases when app versions are released quickly and frequently. We use automated tests, an internal QA team, and rigorous code review to make sure the app is always prepared for deployment.",
    },
    {
      Title: "We Help You Analyze, Grow, and Change",
      subData:
        " What helps is getting input on the key USPs of your app from users at a stage where the cost to change is the lowest. Our strategy is to use tools like user surveys, video recordings, and conversion analysis to determine whether the finished product from our startup app development is successful.",
    },
  ];

  return (
    <>
      <div className="container mx-auto  md:gap-5  gap-1 font-bold  px-4 md:px-24 lg:px-24 xl:px-0 md:mt-[140px] pt-10">
        <div className=" md:text-4xl text-xl font-bold font-mono text-center">
          The Outcome Of Our Process is not a Regular App.{" "}
          <span className="text-[#410EAD] lg:block font-mono ">
            It is an App That Gets Funded
          </span>
        </div>
        <p className="xl:px-40 text-[#59587B]  font-normal leading-5 md:pt-2 mt-5">
          You get a lot more from our collaboration than just a mobile app. For
          a good reason, people refer to our developers as startup app
          developers. We provide you with knowledge about how startups grow into
          businesses and assemble a group that keeps them at the top.
          Alternatively put, we prepare you for funding.
        </p>
        {FundedData.map((ele, index) => (
          <div className="" key={index}>
            <p className="flex font-bold text-[20px]  gap-5  xl:px-40 pt-10 text-[#7B3FE4]">
              <HiChevronDoubleRight />
              {ele.Title}
            </p>
            <p className="xl:px-40 text-[#59587B]  font-normal leading-5 md:pt-2 pt-5">
              {ele.subData}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
