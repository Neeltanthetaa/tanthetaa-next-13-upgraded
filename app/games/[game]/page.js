import {
  GameHead,
  GameCard,
  OurDevelopment,
  Technologies,
  Fundamental,
  TypesofGames,
} from "@/app/components/ui/games";
import { allGuides } from "contentlayer/generated";
import { notFound } from "next/navigation";

export const getContent = async ({ slug }) => {
  const content = allGuides.find((guide) => guide.slug === slug);
  return content;
};

//Or pass in an object
// window.scrollTo({ top: 20, behavior: "smooth" });

const Game = async ({ params }) => {
  const content = await getContent({ slug: `games/${params.game}` });
  if (!content) return notFound();

  return (
    <>
      {/* 1st Component Start */}
      <GameHead path="games" content={content.data.header} />
      {/* 1st Component End */}

      {/* 2nd Component Start */}
      <OurDevelopment content={content.data.section1} />
      <GameCard content={content.data.section1.services} />
      {/* 2nd Component End */}

      {/* 3rd Component Start */}
      <OurDevelopment content={content.data.section2} />
      {/* 3rd Component End */}

      {/* 4th Component Start */}
      <OurDevelopment content={content.data.section3} />
      <Technologies path="games" content={content.data.section3.services} />
      {/* 4th Component End */}

      {/* 5th Component Start */}
      <OurDevelopment content={content.data.section4} />
      {/* 5th Component End */}

      {/* 6th Component Start */}
      <OurDevelopment content={content.data.section5} />
      {/* 6th Component End */}

      {/* 7th Component Start */}
      <OurDevelopment content={content.data.section6} />
      <Fundamental path="games" content={content.data.section6.services} />
      {/* 7th Component End */}

      {/* 8th Component Start */}
      <OurDevelopment content={content.data.section7} />
      <TypesofGames path="games" content={content.data.section7} />
      {/* 8th Component End */}

      {/* 9th Component Start */}
      <OurDevelopment content={content.data.section8} />
      {/* 9th Component End */}
    </>
  );
};

export default Game;
