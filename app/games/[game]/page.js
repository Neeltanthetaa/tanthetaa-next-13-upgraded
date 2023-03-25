import {
  GameHead,
  OurDevelopment,
  ChooseGame,
  GameCard,
  Technologies,
  GameProcess,
  QuickFacts,
  GamesSlider,
  Fundamental,
  TypesofGames,
  GameFaqs,
} from "@/app/components/ui/games";
import { allGuides } from "contentlayer/generated";
import { notFound } from "next/navigation";

export const getContent = async ({ slug }) => {
  const content = allGuides.find((guide) => guide.slug === slug);
  return content;
};

const Game = async ({ params }) => {
  const content = await getContent({ slug: `games/${params.game}` });
  if (!content) return notFound();

  return (
    <>
      {/* 1st Component Start */}
      <GameHead path="games/android" content={content.data.header} />
      {/* 1st Component End */}

      {/* 2nd Component Start */}
      <OurDevelopment content={content.data.section1} />
      <ChooseGame
        path="games/android"
        content={content.data.section1.services}
      />
      {/* 2nd Component End */}

      {/* 3rd Component Start */}
      <OurDevelopment content={content.data.section2} />
      <GameCard content={content.data.section2.services} />
      {/* 3rd Component End */}

      {/* 4th Component Start */}
      <OurDevelopment content={content.data.section3} />
      {/* In Progress  */}
      {/* 4th Component End */}

      {/* 5th Component Start */}
      <OurDevelopment content={content.data.section4} />
      <Technologies
        path="games/android"
        content={content.data.section4.services}
      />
      {/* 5th Component End */}

      {/* 6th Component Start */}
      <OurDevelopment content={content.data.section5} />
      {/* In Progress  */}
      {/* 6th Component End */}

      {/* 7th Component Start */}
      <OurDevelopment content={content.data.section6} />
      <GameProcess content={content.data.section6.services} />
      {/* 7th Component End */}

      {/* 8th Component Start */}
      <OurDevelopment content={content.data.section7} />
      <QuickFacts content={content.data.section7.services} />
      {/* In Progress  */}
      {/* 8th Component End */}

      {/* 9th Component Start */}
      <OurDevelopment content={content.data.section8} />
      <Fundamental
        path="games/android"
        content={content.data.section8.services}
      />
      {/* 9th Component End */}

      {/* 10th Component Start */}
      <OurDevelopment content={content.data.section9} />
      <TypesofGames path="games/android" content={content.data.section9} />
      {/* 10th Component End */}

      {/* 11th Component Start */}
      <OurDevelopment content={content.data.section10} />
      <GameFaqs content={content.data.section10.services} />
      {/* 11th Component End */}
    </>
  );
};

export default Game;
