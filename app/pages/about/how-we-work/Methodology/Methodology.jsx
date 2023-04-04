import React from "react";
import AboutHowWorkHeadSingleImage from "./../../../../../public/Img/About/AboutHowWorkHeadSingleImage.svg";
import FirstHeading from "@/app/pages/Home/FirstHeading/FirstHeading";

const Methodology = () => {
  return (
    <>
      <FirstHeading
        firstLineTitle="We are a Squad"
        firstBlack=" of "
        SecondColorFull=" Exertive Ninjas."
        subTitle="There is no one method that can solve all problems; there are no magic solutions. Organizations vary. All people are unique. The difficulties in business are distinct. And that influences how we work."
        button="Book a free consultation"
        HeadSingleImage={AboutHowWorkHeadSingleImage}
      />
    </>
  );
};

export default Methodology;
