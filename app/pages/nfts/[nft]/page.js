import {
  NFTBusiness,
  NFTClients,
  NFTDevelopment,
  NFTFractures,
  NFTHead,
  NFTOffers,
  NFTPackages,
  NFTPartners,
  NFTProcess,
  NFTService,
  NFTSpotlighted,
  TokenDevelopment,
} from "@/app/components/ui/NFTs";
import { allGuides } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import Faqs from "@/app/components/ui/common/Faqs";
import { Blogs } from "@/app/components/ui/common/Blogs";
import ProjectsPartnership from "@/app/components/ui/common/ProjectsPartnership";
import PreviousOrNext from "@/app/components/ui/common/PreviousOrNext";

export const getContent = async ({ slug }) => {
  const content = allGuides.find((guide) => guide.slug === slug);
  return content;
};

export const metadata = {
  title:
    "Expert NFT development and consulting services from Tan θ Software Studio",
  description:
    "A professional team of Tan θ Software Studio's NFT developers with honed skills in developing high-load and scalable solutions is at your disposal!",
};
const NFT = async ({ params }) => {
  const content = await getContent({ slug: `nfts/${params.nft}` });

  if (!content) return notFound();
  // path={`nfts/${params.nft}`}
  return (
    <>
      {/* 1st Component Start */}
      <NFTHead
        path={`nfts/nft-development-services`}
        content={content.data.header}
      />
      {/* 1st Component End */}

      {/* 2nd Component Start */}
      <NFTDevelopment content={content.data.section1} />
      {/* 2nd Component End */}

      {/* 3rd Component Start */}
      <NFTDevelopment content={content.data.section2} />
      <TokenDevelopment
        path={`nfts/nft-development-services`}
        content={content.data.section2.services}
      />
      {/* 3rd Component End */}

      {/* 4th Component Start */}
      <NFTDevelopment content={content.data.section3} />
      <NFTProcess
        path={`nfts/nft-development-services`}
        content={content.data.section3.services}
      />
      {/* 4th Component End */}

      {/* 5th Component Start */}
      <NFTOffers content={content.data.section4} />
      {/* In Progress */}
      {/* 5th Component End */}

      {/* 6th Component Start */}
      <NFTDevelopment content={content.data.section5} />
      <NFTFractures
        path={`nfts/nft-development-services`}
        content={content.data.section5}
      />
      {/* 6th Component End */}

      {/* 7th Component Start */}
      <NFTDevelopment content={content.data.section6} />
      <NFTPackages content={content.data.section6.services} />
      {/* 7th Component End */}

      {/* 8th Component Start */}
      <NFTDevelopment content={content.data.section7} />
      <NFTPartners
        path={`nfts/nft-development-services`}
        content={content.data.section7.services}
      />
      {/* 8th Component End */}

      {/* 9th Component Start */}
      <NFTClients
        path={`nfts/nft-development-services`}
        content={content.data.section8}
      />
      {/* 9th Component End */}

      {/* 10th Component Start */}
      <NFTDevelopment content={content.data.section9} />
      <NFTSpotlighted
        path={`nfts/nft-development-services`}
        content={content.data.section9.services}
      />
      {/* 10th Component End */}

      {/* 11th Component Start */}
      <NFTDevelopment content={content.data.section10} />
      <NFTBusiness content={content.data.section10.services} />
      {/* 11th Component End */}

      {/* 12th Component Start */}
      <NFTService
        path={`nfts/nft-development-services`}
        content={content.data.section11}
      />
      {/* 12th Component End */}

      {/* 13th Component Start */}
      <NFTDevelopment content={content.data.section12} />
      <Faqs content={content.data.section12.services} />
      {/* 13th Component End */}

      {/* 14th Component Start */}
      <NFTDevelopment content={content.data.section13} />
      <Blogs
        path={`nfts/nft-development-services`}
        content={content.data.section13.services}
      />
      {/* 14th Component End */}

      {/* 15th Component Start */}
      <PreviousOrNext
        path={`nfts/nft-development-services`}
        content={content.data.section14.services}
      />
      {/* 15th Component End */}

      {/* 16th Component Start */}
      <ProjectsPartnership />
      {/* 16th Component End */}
    </>
  );
};

export default NFT;
