import React from "react";
import FirstHeading from "../../Home/FirstHeading/FirstHeading";
import MVPIMG from "./../../../../public/Img/About/MVP IMG.svg";
import Scoping from "./../../../../public/Img/About/Scoping Sessions.svg";
import Targeting from "./../../../../public/Img/About/Targeting.svg";
import Building from "./../../../../public/Img/About/Building a tangible prototype.svg";
import Designing from "./../../../../public/Img/About/Designing delightful experiences.svg";
import Developing from "./../../../../public/Img/About/Developing the MVP.svg";
import MvpDevService from "./MvpDevService";
import Benefits from "@/app/CommanComponents/Benefits/Benefits";
import Solution from "./Solution";
import ProductProcess from "@/app/CommanComponents/Product Process/ProductProcess";
import ReadArticles from "../agile-development/ReadArticles";

const MvpDevelopment = () => {
  return (
    <>
      <FirstHeading
        firstLineTitle="MVP Development Services-  "
        firstBlack="A product development approach with "
        SecondColorFull="100% assurance."
        subTitle="To begin, we divide the cycle of creating an app into distinct tasks. Once more broken down into smaller tasks, each of these is carried out concurrently after being assigned to our teams.            "
        button="Book a free consultation"
        HeadSingleImage={MVPIMG}
      />
      <MvpDevService />
      <Benefits
        Title="Benefits of Staying "
        inslideTitle=" Affordable and Flexible "
        subTitle="We have created hundreds of MVPs over the past few years, and they have continuously aided us in:"
        data_1="bringing a product to market as soon as is practical."
        data_2="Prior to allocating a sizable sum of money to the full development of the product, test concepts and hypotheses with actual users."
        data_3="Defining the final product's vision for the first customers and gathering feedback were invaluable. feedback that directs future iterations."
        data_4="entry into the market at a reasonable cost. launching and advertising in a more narrowly defined market. helps with investigation and adoption testing."
        data_5="Specifically, breaking down the product development cycle and condensing end goals into milestones. easily realizable."
        data_6="allowing for easy market penetration."
        data_7="Excellent place to begin for startups. The ability to attract potential investors is improved by a functional model."
      />

      <Benefits
        Title="An Overview of the "
        inslideTitle=" MVP Development Process"
        subTitle=" We support the iterative and incremental development of products. Customer feedback is valued above intuition, and iterative design is preferred over a large, complex design. "
        subTitle_2=" We think arriving with a hypothesis helps us deliver goods that have a lasting impact. "
        data_1="Concentrate on finding a solution to a particular user issue."
        data_2="Recognize the needs of your user group and show empathy for your target market."
        data_3="Perform research and user interaction analysis."
      />

      <Solution />
      <ProductProcess
        icon1={Scoping}
        data_4="Scoping Sessions"
        data_5="Because we think it's important to lay a solid foundation, we take our time during the planning and research stages. We have found that a scoping meeting has a significant impact on the final outcome of a project. We hone and shape your conceptual business ideas during scoping sessions. It involves all facets of project planning and aids in the creation of a strategic road map."
        extraTitle1="We offer technical solutions and outline a work scope after carefully considering your ideas. An outline of the project's scope, as well as a rough estimate of its budget and timeline, are included in a statement of work. Scoping sessions promote easy sailing for both our clients and team, and they assist us in creating better products."
        icon2={Targeting}
        data_6="Targeting the key feature"
        data_7="For our clients, we want to keep as many users as possible. And if they get lost in a maze of features, we most certainly can't do that. Therefore, we make an effort to strike the ideal balance between design and price. Our products have an understated design that delivers the most benefit."
        extraTitle2="Despite only including the essential functionalities, we list and rank every feature. While maintaining the bare minimum of functionality, we make sure to keep the product's core qualities intact. We always describe the value proposition of the product and take an overall approach to things. What your target audience wants, the value your product offers, and how it differs from your competitors are all factors that go into determining the value proposition."
        icon3={Building}
        data_8="Building a tangible prototype"
        data_9="Quick ideation, prototyping, and validation of a product idea are made possible by Design Sprint. It is a crucial stage in the creation of an MVP."
        extraTitle3="We transform abstract concepts into concrete ones that act as the prototype's building blocks. We jot down specific ideas on paper and list every potential solution through a series of brainstorming sessions and imaginative exercises."
        extraTitle4="A tangible prototype that can be tested with actual users emerges from our Sprint process with a facade that is almost realistic."
        icon4={Designing}
        data_10="Designing delightful experiences"
        data_11="Our design strategists are very particular about giving your users the desired experience. We never skimp on an app's visual or tactile appeal. In addition to creating visually appealing designs, we simplify and streamline interactions for your end user. We think that a product's usability, functionality, and branding should all be combined to solve real user problems."
        icon5={Developing}
        data_12="Developing the MVP"
        data_13="We carefully monitor how users interact with your product after testing a variety of prototypes on real people in order to gain priceless insights. The MVP construction process then gets underway. Every digital product must have an MVP. Despite the apparent simplicity of the terminology, there is a specific process we adhere to in order to deliver cutting-edge apps."
        extraTitle5="A key component of our process is code reviews and algorithm walkthrough. In order to meet the specific needs of each client, we customize the development tools and procedures."
      />

      <ReadArticles />
    </>
  );
};

export default MvpDevelopment;
