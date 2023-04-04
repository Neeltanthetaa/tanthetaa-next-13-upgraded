/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Formula from "./../../../../public/Img/About/FormulaPM.svg";
import Image from "next/image";
const ProductManaer = () => {
  return (
    <>
      {/* text-[#59587B] text-sm lg:text-base font-normal mb-5*/}
      <div className="flex container mx-auto flex-wrap gap-5 md:gap-8 justify-center md:mx-auto md:mt-[140px] mt-16 ">
        <div>
          <div className="grid lg:grid-cols-2 lg:text-start text-center gap-5 justify-center md:pb-10">
            <div className=" grid place-items-center">
              <Image src={Formula} alt="Tan theta" className="Tan Thetaa" />
            </div>
            <div className="grid  place-items-center md:px-20">
              <div className="font-mono text-2xl lg:text-3xl xl:text-4xl leading-10 lg:leading-tight font-bold mb-4">
                Our main goal is to put the
                <span className="lg:block font-mono"> bringing together</span>
                <span className="text-[#410EAD] lg:block font-mono">
                  ideal product
                </span>
                <span className=" font-mono"> together.</span>
                <p className="text-[#343434] text-sm lg:text-base font-normal  pt-5 leading-5  xl:pr-20">
                  A great product cannot be created using a foolproof formula.
                  The right product can be built with the help of the proper
                  skills, people, strategies, and framework that we bring to the
                  table.
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 lg:text-start text-center gap-5 justify-center ">
            <div className="text-[#343434] text-sm lg:text-base font-normal  pt-5 leading-5 xl:pr-20 ">
              <p className="py-5 md:px-20 ">
                The main point of contact for all stakeholders is the product
                manager, and it is ultimately up to them to manage your product.
              </p>
              <p className="py-5 md:px-20">
                Project managers and designers collaborate on it. The duty of a
                project manager is to inform designers of the intended audience,
                their needs, and their objectives.
              </p>
            </div>
            <div className="text-[#343434] text-sm lg:text-base font-normal xl:pr-20 ">
              <p className="py-5 md:px-20">
                Product Managers are trusted by clients to hone and shape their
                vision. At all stages of the project's development, they keep
                the clients updated on its status.
              </p>
              <p className="py-5 md:px-20">
                They bring together user feedback, analytics, and the client's
                vision to sketch out potentialities and experiences that take
                advantage of the best opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductManaer;
