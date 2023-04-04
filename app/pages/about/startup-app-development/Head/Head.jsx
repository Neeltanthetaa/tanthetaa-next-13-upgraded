import React from "react";
import StartupsIMG from "./../../../../../public/Img/About/StartupsIMG.svg";
import FirstHeading from "@/app/pages/Home/FirstHeading/FirstHeading";

export const Head = () => {
  return (
    <>
      <FirstHeading
        firstLineTitle="App Development for Startups:"
        ThirdLineColorTitle="Building Products That Scale With You"
        subTitle="Your app concept shouldn’t be dependent on a high execution amount or an internal development team. We are a startup app development company that helps you convert your concept into a deployable MVP in a low-launch time."
        HeadSingleImage={StartupsIMG}
      />
    </>
  );
};
