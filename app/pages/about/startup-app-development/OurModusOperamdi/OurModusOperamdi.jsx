import React from "react";
import DiscoveryWorkshop from "./../../../../../public/Img/About/DiscoveryWorkshop.svg";
import ScopingSessions from "./../../../../../public/Img/About/ScopingSessions.svg";
import BussinessAnalysis from "./../../../../../public/Img/About/BussinessAnalysis.svg";
import ProductDesignSprint from "./../../../../../public/Img/About/ProductDesignSprint.svg";
import MVP from "./../../../../../public/Img/About/MVP.svg";
import Evolve from "./../../../../../public/Img/About/Evolve.svg";
import ProductProcess from "@/app/CommanComponents/Product Process/ProductProcess";

export const OurModusOperamdi = () => {
  return (
    <>
      <div className="container mx-auto mt-[140px] xl:px-52 md:px-24 px-5  pt-10 ">
        <div className="font-bold text-2xl lg:text-3xl xl:text-4xl leading-10 lg:leading-tight mb-4">
          <span className="font-mono">{`Our Modus `}</span>
          <span className="font-mono mt-2 text-[#410EAD]">{`Operation`}</span>
        </div>
        <p className="font-normal text-[15px] leading-5 mt-5">
          The true essence of our process is never losing sight of the
          particular needs of our clients and their end users, even though we
          have a clearly defined plan of action to get there. What motivates you
          motivates us. The true essence of our process is never losing sight of
          the particular needs of our clients and their end users, even though
          we have a clearly defined plan of action to get there. What motivates
          you motivates us.
        </p>
      </div>

      <ProductProcess
        icon1={DiscoveryWorkshop}
        data_4="Discovery Workshops"
        data_5="The most effective method for managing any project, in our opinion, is a discovery workshop. It is crucial to a digital product's early planning stages. To establish the project's purpose, prioritize core functionalities, comprehend target audiences, create user personas, and investigate their needs and user journeys, we conduct product discovery workshops. It streamlines the entire development process and guarantees that the final product for our client meets their objectives."
        extraTitle1="Over 40 Discovery workshops have been held, and they have helped us spot potential problems early on. We can steer the project in the right direction collectively by conducting a workshop that fosters a shared understanding."
        icon2={ScopingSessions}
        data_6="Scoping Sessions"
        data_7="We translate your product idea into a clearly defined scope of work and launch your product more quickly and economically."
        extraTitle2="After improving our comprehension of your objectives and vision, we deduce your value propositions, describe your goods, and specify the project's parameters. During our scoping meetings, we go over expectations and work to improve our clients' comprehension of the product and its features. A thorough Statement of Work (SOW), a report outlining the project's scope, and a rough estimate of the project's budget and timeline are all delivered to clients."
        icon3={BussinessAnalysis}
        data_8="Business Analysis"
        data_9="Business analysis is a collaborative and analytical process to discover, identify and define business, user, functional and non-functional requirements. Our business analysts work closely with key stakeholders to transform requirements into actionable products."
        extraTitle3="They perform strategic analysis during all stages of the development cycle and serve as intermediaries, managing the client's interests. Along with conducting stakeholder and competitor analysis, we also assess the viability of alternatives and only validate requirement-based solutions that have been approved by our client."
        icon4={ProductDesignSprint}
        data_10="Product Design Sprint"
        data_11="A 5-day brainstorming process with 5 phases is called a product design sprint. Our ultimate objective is to develop a prototype that is functionally designed from an idea. To test assumptions on actual users and identify process gaps, weeks of designing, prototyping, and testing are condensed into a few days."
        extraTitle4="In addition to orienting the entire team, using the sprint methodology reduces the likelihood of failure. A Design Sprint provides our team with priceless information about how a product's end users interact with it, and it aids us in separating what functions for them from what does not."
        icon5={MVP}
        data_12="MVP"
        data_13="We launch the development of the Minimum Viable Product after Rapid Prototyping. A digital product's MVP is its initial iteration. It is designed to collect insightful user feedback while maintaining the core functionalities. We constantly work to create products that are enjoyable, usable, valuable, and practical from the start."
        extraTitle5="An MVP aids us in making decisions and establishes the parameters for subsequent iterations because it is based on actual data rather than conjecture. Validated learning is the foundation of the MVP concept. Our research and adoption testing are aided by launching and marketing on a more narrowly defined market."
        icon6={Evolve}
        data_14="Evolve"
        data_15="We provide our clients with end-to-end solutions as part of an ongoing process of improvement, iteration, and upgrading. We offer appropriate consultation whenever necessary and offer long-term support for the app you develop with us."
        extraTitle6="Following the creation of your ground-breaking concept, we record a description for the app store and make your app accessible to millions of users. Our pre-release testing and post-release support make sure you continuously improve the quality of your product and keep your customers. For long-term success, we think that stabilizing and scaling your product is essential."
      />
    </>
  );
};
