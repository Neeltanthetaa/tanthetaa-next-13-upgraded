import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import pic1 from "./../../../../public/Img/About/123 1.svg";
import pic2 from "./../../../../public/Img/About/123 2.svg";
import pic3 from "./../../../../public/Img/About/123 3.svg";
import Image from "next/image";
import Link from "next/link";
const ReadArticles = () => {
  const readArticles = [
    {
      id: 1,
      image: pic1,
      title: "Agile or Waterfall: Which App Development Approach to Consider?",
      description:
        "When it comes to mobile app development, the way you approach an app idea…",
      href: "/",
      buttonName: "Read more",
    },
    {
      id: 2,
      image: pic2,
      title:
        "Reasons why we Trust Agile for our Mobile App Development Process",
      description:
        "Agile Scrum methodology is one of the most commonly used practices in project management…",
      href: "/",
      buttonName: "Read more",
    },
    {
      id: 3,
      image: pic3,
      title:
        "Reasons why we Trust Agile for our Mobile App Development Process",
      description:
        "Agile Mobile Application Development has emerged as a concept that ensures not just a…",
      href: "/",
      buttonName: "Read more",
    },
  ];

  return (
    <>
      <section className="container mx-auto my-20 lg:my-[140px] px-4 md:px-24 lg:px-24 xl:px-0">
        <h6 className="text-2xl sm:text-3xl xl:text-4xl text-center font-bold pb-7 font-mono">
          Related <span className="text-[#410EAD] font-mono">articles</span>
        </h6>
        <div className="flex flex-wrap justify-center gap-1 lg:gap-3">
          {readArticles?.map((item) => (
            <>
              <div
                key={item?.id}
                className="flex flex-wrap xl:flex-nowrap w-[80vw] xl:w-[40vw] pb-7"
              >
                <div className="lg:w-[18vw] mx-auto pb-7">
                  <Image src={item?.image} alt={item?.image} />
                </div>
                <div className="lg:px-7 my-auto">
                  <h3 className="text-lg lg:text-2xl font-medium pb-2">
                    {item?.title}
                  </h3>
                  <p className="pb-2 text-sm lg:text-base">
                    {item?.description}
                  </p>
                  <Link
                    href={item?.href}
                    className="text-sm lg:text-base text-[#410EAD] flex items-center"
                  >
                    {item?.buttonName}
                    <HiArrowLongRight className="ml-2 text-xl" />
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default ReadArticles;
