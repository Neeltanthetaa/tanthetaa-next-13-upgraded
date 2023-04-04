import React from "react";
import ProductDevelo from "./../../../../public/Img/About/Pm.svg";
import icon1 from "./../../../../public/Img/About/lightbulb.svg";
import icon2 from "./../../../../public/Img/About/strategy.svg";
import icon3 from "./../../../../public/Img/About/Release.svg";
import FirstHeading from "../../Home/FirstHeading/FirstHeading";
import ProductManaer from "./ProductManaer";
import TeamSuccess from "./TeamSuccess/TeamSuccess";
import Benefits from "@/app/CommanComponents/Benefits/Benefits";
import ProductProcess from "@/app/CommanComponents/Product Process/ProductProcess";
import DigitalAge from "./DigitalAge/DigitalAge";

const ProductDevelopment = () => {
  return (
    <>
      <div>
        <FirstHeading
          firstBlack="The expertise behind  "
          SecondColorFull="heavenly Products"
          subTitle="Our full-cycle approach to product development is anchored by product management. Motivated by innovation, we work to develop a distinctive product with state-of-the-art design and technology."
          button="Book a free consultation"
          HeadSingleImage={ProductDevelo}
        />
        <ProductManaer />
        <TeamSuccess />
        <Benefits
          Title="Defining the purpose "
          inslideTitle=" of the product"
          // subTitle="There is no sure-shot formula for building a great product. We bring the right skills, people, strategies and framework to the table, which encompasses building the right product."
          data_1="From the beginning of the project to the product's launch, we complete a wide range of tasks."
          data_2="For your product, we assume full liability and provide a detailed description. In order to make sure the product is on the right track, our product managers repeatedly ask the big questions (What, Why, How, and When) throughout the development process."
          data_3="We also establish a strategic roadmap for product delivery in addition to defining the product line."
          data_4="At every stage of their digital journey, we give our clients constant access to the status of their projects."
          data_5="To define a product vision that is distinctive and provides value to the customers, we analyze the market and our competitors."
          data_6="Execute different tasks and ensure cross-functional teams are aligned at every stage of the journey, from strategy to tactics."
          data_7="We track the technological and competitive environment to assess the effects it has on the product."
          data_8="We guarantee that customer feedback is never ignored through product management. We take the helm of projects that encourage user feedback."
        />
        <ProductProcess
          Title="Core aspects of "
          inslideTitle="Product Leadership"
          subTitle="Our Product Managers handle all core activities in the full cycle product development and take strategic decisions on the following matters-"
          icon1={icon1}
          data_4="Ideation"
          data_5="Our managers have an eye for detail and look beyond the seemingly ordinary to find original ideas and develop them into workable features. In accordance with the main goals of the product, they have refined their creative abilities over time to select new ideas and decide which ones will be developed into features. They see to it that requests and criticisms are transparently incorporated into product planning and that the status of the idea is reported back to the important stakeholders."
          icon2={icon2}
          data_6="Strategy"
          data_7="Our product managers have a clearly defined strategy in mind, and they communicate the business value to the project team so that they are aware of the goals and objectives of the new product. Along with creating a roadmap, they decide how to carry out strategic initiatives and goals."
          icon3={icon3}
          data_8="Release"
          data_9="Our Managers assign tasks to each team and decide the full cycle development timeline. To successfully launch the product onto the market, they specify the release process and coordinate all activities."
        />
        <Benefits
          Title="What sets  "
          inslideTitle="us apart?"
          subTitle="With product management, we approach the intersection of business, technology and user experience to create products that are actionable, valuable and easy to use."
          data_1="Sincere observers, we are. We take an all-encompassing approach to problem solving, considering the significance of the product to the customer as well as its present and future directions. We have unwavering faith in your product, and we see opportunities where others see nothing but a wasteland."
          data_2="Synergy: We think that combining efforts will produce the best results. Our product managers make sure your product vision remains on track by removing conflicts and disconnects between various departments."
          data_3="We produce goods that fill a definite market niche and are propelled by innovation and creativity."
          data_4="We have a stellar design taste and know how to use product insights to materialize a breakthrough idea into a scalable product."
          data_5="We establish quantifiable objectives, produce insightful analysis of market trends, and at any time offer clarity to the client and stakeholders."
        />
        <DigitalAge />
      </div>
    </>
  );
};

export default ProductDevelopment;
