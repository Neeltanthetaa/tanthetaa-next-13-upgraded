"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQ = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  const Accordiondata = [
    {
      id: 1,
      title: "What is the benefit of a software enterprise in business?",
      content: `What is the benefit of a software enterprise in business?`,
    },
    {
      id: 2,
      title: "What enterprise software solutions do you offer?",
      content: `What enterprise software solutions do you offer?`,
    },
    {
      id: 3,
      title:
        "How do you assist in the existing enterprise software development projects? ",
      content: `How do you assist in the existing enterprise software development projects?`,
    },
    {
      id: 4,
      title:
        "What Makes Tan θ one of the most trusted enterprise software development companies?",
      content: `As of now, a limited number of nodes can be created per wallet, which is 100 Smart nodes and 10 Power nodes. `,
    },
    {
      id: 5,
      title: "What’s your policy on intellectual property and signing an NDA? ",
      content: `What’s your policy on intellectual property and signing an NDA?`,
    },
  ];
  return (
    <>
      <div className="container mx-auto max-w-6xl px-4 mt-10">
        <div className=" font-bold  leading-5 font-mono lg:leading-[65px]  text-center xl:text-[45px]  lg:text-[40px] md:text-[25px] text-[20px] py-5   ">
          Frequently
          <span className="text-[#410EAD] font-mono"> asked questions</span>
        </div>
        {Accordiondata?.map((items) => (
          <>
            <Accordion
              open={open === items.id}
              animate={customAnimation}
              className="py-2"
              key={items.id}
            >
              <div className="nodetype-bg rounded-md Accordiondata py-1">
                <AccordionHeader
                  onClick={() => handleOpen(items.id)}
                  className="Accordiondata text-black border-2 rounded-[10px]"
                >
                  <div className="rewardstextcolor text-sm font-medium  flex items-center max-w-[90%] ">
                    <p className="pl-10">{items.title}</p>
                  </div>
                </AccordionHeader>
                {/* <i className="fa-solid fa-caret-up absolute top-4 right-6 text-3xl"></i> */}
              </div>
              <AccordionBody className="text-black flex justify-start items-center text-base p-8">
                {items.content}
              </AccordionBody>
            </Accordion>
          </>
        ))}
      </div>
    </>
  );
};
export default FAQ;
