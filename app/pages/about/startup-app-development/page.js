import React from "react";
import { BigThings } from "./BigThings/BigThings";
import { StartsWithMVP } from "./StartsWithMVP/StartsWithMVP";
import { OurModusOperamdi } from "./OurModusOperamdi/OurModusOperamdi";
import TimeLine from "./TimeLine/TimeLine";
import { Funded } from "./Funded/Funded";
import { Amplify } from "./Amplify/Amplify";
import FAQ from "./FAQ/FAQ";
import { Head } from "./Head/Head";

const StartupAppDevelopment = () => {
  return (
    <>
      <Head />
      <BigThings />
      <StartsWithMVP />
      <OurModusOperamdi />
      <TimeLine />
      <Funded />
      <Amplify />
      <FAQ />
    </>
  );
};

export default StartupAppDevelopment;
