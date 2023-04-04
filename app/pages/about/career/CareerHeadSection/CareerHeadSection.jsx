import React from "react";
import FirstHeading from "@/app/pages/Home/FirstHeading/FirstHeading";
import CareerHead from "./../../../../../public/Img/About/CareerHead.svg";

export const CareerHeadSection = () => {
  return (
    <>
      <FirstHeading
        firstBlack="We seek "
        SecondColorFull="Optimistic army"
        subTitle="We begin by segmenting the cycle of creating an application into distinct tasks. These tasks are again broken down into smaller tasks, each of which is carried out concurrently after being assigned to our teams."
        button="Your success starts here"
        HeadSingleImage={CareerHead}
      />
    </>
  );
};
