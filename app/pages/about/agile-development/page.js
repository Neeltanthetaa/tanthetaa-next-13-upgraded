import React from "react";
import FirstHeading from "../../Home/FirstHeading/FirstHeading";
import AgileProductSuccess from "./AgileProductSuccess/AgileProductSuccess";
import MarketLaunch from "./MarketLaunch/MarketLaunch";
import RelatedArticles from "./RelatedArticles/RelatedArticles";
import NestedFeedback from "./NestedFeedback/NestedFeedback";
import HeadImgAgileDevelopment from "./../../../../public/Img/About/HeadImgAgileDevelopment.svg";

export const dynamic = "force-dynamic";

const AgileDevelopment = () => {
  return (
    <>
      <FirstHeading
        firstLineTitle="Agile development  "
        secondLineTitle=" offers speed and"
        ThirdLineColorTitle=" scalability"
        subTitle="To begin, we divide the cycle of creating an app into distinct tasks. Once more broken down into smaller tasks, each of these is carried out concurrently after being assigned to our teams.            "
        button="Book a free consultation"
        HeadSingleImage={HeadImgAgileDevelopment}
      />
      <AgileProductSuccess />
      <MarketLaunch />
      <RelatedArticles />
      <NestedFeedback />
    </>
  );
};

export default AgileDevelopment;
