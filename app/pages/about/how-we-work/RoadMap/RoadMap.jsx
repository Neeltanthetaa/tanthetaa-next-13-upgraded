/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./RoadMap.css";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
// import { RiNumber1 } from "react-icons/ri";
// import { RiNumber2 } from "react-icons/ri";
// import { RiNumber3 } from "react-icons/ri";
import check from "./../../../../../public/Img/About/check-mark.svg";
const AgileProductSuccessData = [
  {
    id: 1,
    tickMarkColor: "text-[#FFB800]",
    title: "Define Your Idea",
    subTitle: `Fill our product canvas
      and we will connect you
      with our experts for overall
      planning & project
      estimations.`,
    subData: "WHAT YOU GET:",
    post: "Non Disclosure Agreement (NDA)",
    post_2: "Product Canvas",
    post_3: "Business Proposal",
    sub_1: "YOU AND NEW BUSINESS DEVELOPER",
    sub_2: "First Contact",
    sub_3: "Share your vision and goals",
    sub_11: "YOU AND NEW BUSINESS DEVELOPER",
    sub_12: "Fill Up The Product Canvas",
    sub_13:
      "Together we create a description of your product that is short, precise, and relatively painless to write.",
    sub_111: "YOU AND NEW BUSINESS DEVELOPER",
    sub_112: "Business Proposal",
    sub_113:
      "We send you a business proposal outlining cost estimates, scope of work and much more.",
  },
  {
    id: 2,
    tickMarkColor: "text-[#0057BC]",
    title: "Find The Best Solution",
    subTitle: `Well crafted proposal on how to reach your goals.`,
    subData: "WHAT YOU GET:",
    post: "Contact Draft",
    sub_1: "DEDICATED ACCOUNT MANAGER",
    sub_2: "Account Manager",
    sub_3: "We assign a dedicated account manager to you.",
    sub_11: "PRODUCT BACKLOG",
    sub_12: "Product Owner and Dev Team",
    sub_13:
      "Either we prepare product backlog for you or together we conduct product workshop",
    sub_111: "PRODUCT ASSUMPTION",
    sub_112: "Product Owner & Dev Team",
    sub_113:
      "Definition of Done, Definition of Ready, Scope of Project, Technology, Architecture, Risk Analysis, MVP",
    sub_1111: "ESTIMATIONS",
    sub_1112: "Dev Team",
    sub_1113: "Draft of timeline reviews",
    sub_11111: "PROJECT PLAN",
    sub_11112: "Product Owner",
    sub_11113: "Draft of timeline reviews",
    sub_111111: "PROPOSAL",
    sub_111112: "Account Manager",
    sub_111113:
      "Well-crafted proposal on how to reach your goals or contract draft",
    sub_1111111: "YOU & BUSINESS DEVELOPER",
    sub_1111112: "Business proposal",
    sub_1111113:
      "We send you a business proposal outlining cost estimates, scope of work and much more.",
  },
  {
    id: 3,
    tickMarkColor: "text-[#0057BC]",
    title: "Start Your Project",
    subTitle: `All we need is your
    presence at the project
    workshop`,
    subData: "WHAT YOU GET:",
    post: "Detailed timeline on deliverables",
    sub_1: "SCRUM TEAM MEETING",
    sub_2: "SCRUM Team",
    sub_3:
      "You will have an opportunity to meet the team and explain your vision of the product.",
    sub_11: "DISCUSS & VERIFY",
    sub_12: "SCRUM Team",
    sub_13:
      "The team verifies and prioritizes a list of tasks to be accomplished.",
    sub_111: "BACKLOG ESTIMATION REVIEW",
    sub_112: "SCRUM Team",
    sub_113:
      "Definition of Done, Definition of Ready, Scope of project, technology, architecture, risk analysis, MVP",
    sub_1111: "PLANNING OF RELEASE",
    sub_1112: "SCRUM Team",
    sub_1113: "Scope of the release and release details",
  },
  {
    id: 4,
    tickMarkColor: "text-[#FF3D00]",
    title: "Get product done",
    subTitle: `Stay in touch with our team for regular feedback sessions and testing software functionalities.`,
    subData: "WHAT YOU GET:",
    post: "Working product increment which you can use.",
    post_2: "Well crafted software",
    sub_1: "SCRUM Team",
    sub_2: "SCRUM Team",
    sub_3:
      "Product owner selects product backlog items to include them in sprint. Team establishes their time commitment for the sprint.",
    sub_11: "SPRINT",
    sub_12: "SCRUM Team",
    sub_13: "Team works on functionality implementations",
    sub_111: "SPRINT REVIEW",
    sub_112: "SCRUM Team",
    sub_113:
      "Team presents results of sprint (demo of working software). Scrum Master delivers sprint report.",
    sub_1111: "SPRINT RETROSPECTIVE",
    sub_1112: "SCRUM Team",
    sub_1113:
      "Team evaluates work progress in order to boost performance in further sprints.",
  },
];
const RoadMap = () => {
  return (
    <>
      <div className="container mx-auto my-[140px] ">
        <div className="pb-5 flex flex-col items-center">
          <h6 className="text-2xl lg:text-[35px] text-center lg:w-3/5 pb-2 leading-snug font-mono font-bold">
            Our product development cycle- We take care
            <span className="text-[#410EAD]">of you at every step</span>
          </h6>
          <p className="text-center lg:text-base text-sm">
            tan θ we don’t just talk about great products. We make them with our
            clients.
          </p>
          {/* xl page */}
          <div className=" wrappers container mx-auto px-24 ">
            <div className="preocee-wrap">
              {/* left */}
              <div className="process-col-left">
                <ul className="process-path-one">
                  <li className="clearfix">
                    <div className="process-name heading5">
                      <span
                        className="process-num wow bounceInLeft"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.1s"
                      >
                        01
                      </span>
                      Define Your Idea
                    </div>
                    <div className="process-content">
                      <p className="para pr-[200px]">
                        Fill our product canvas and we will connect you with our
                        experts for overall planning & project estimations.
                      </p>
                    </div>
                    <div className="process-sub-head">WHAT YOU GET:</div>
                    <ul className="process-points">
                      <li>
                        <span className="para">
                          Non Disclosure Agreement (NDA)
                        </span>
                      </li>
                      <li>
                        <span className="para">Product Canvas</span>
                      </li>
                      <li>
                        <span className="para">Business Proposal</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* end left   */}
              {/* right  */}
              <div className="process-col-right">
                <ul className="process-path-one">
                  <div className="border-one">
                    <ul>
                      <li>
                        <p className="process-head-blue">
                          YOU AND NEW BUSINESS DEVELOPER
                        </p>
                        <p className="heading5">First Contact</p>
                        <p className="para">Share your vision and goals</p>
                        <div className="circle_check one_check">
                          <figure>
                            <Image src={check} alt="check" />
                          </figure>
                        </div>
                      </li>
                      <li>
                        <p className="process-head-blue">
                          YOU AND NEW BUSINESS DEVELOPER
                        </p>
                        <p className="heading5">Fill Up The Product Canvas</p>
                        <p className="para">
                          Together we create a description of your product that
                          is short, precise, and relatively painless to write.
                        </p>
                        <div className="circle_check one_check">
                          <figure>
                            <Image src={check} alt="check" />
                          </figure>
                        </div>
                      </li>
                      <li>
                        <p className="process-head-blue">
                          YOU AND NEW BUSINESS DEVELOPER
                        </p>
                        <p className="heading5">Business Proposal </p>
                        <p className="para">
                          We send you a business proposal outlining cost
                          estimates, scope of work and much more.
                        </p>
                        <div className="circle_check one_check">
                          <figure>
                            <Image src={check} alt="check" />
                          </figure>
                        </div>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
              {/* end right */}
              {/* !second right */}
              <div className="process-col-right fl-left">
                <ul>
                  <li className="no-T-lines">
                    <div className="process-name heading5">
                      <span
                        className="process-num wow bounceInRight"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.1s"
                      >
                        02
                      </span>
                      Find The Best Solution
                    </div>
                    <div className="process-content">
                      <p className="para">
                        Well crafted proposal on how to reach your goals.
                      </p>
                      <div className="process-sub-head">WHAT YOU GET:</div>
                    </div>
                    <ul className="process-points">
                      <li>
                        <span className="para">Contact Draft</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="testimonial-wrap">
                      <div className="testimonial-content">
                        <p className="para">
                          Tan θ was extremely professional. Their Agile approach
                          to development, along with regular and effective
                          communication allowed us to accommodate change and
                          react quickly to evolving business and user
                          requirements.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* ! end  */}
              {/* !second left */}
              <div className="process-col-left fl-right">
                <div className="border-second">
                  <li>
                    <div className="fc-left-wrap">
                      <p className="process-head-blue">
                        DEDICATED ACCOUNT MANAGER
                      </p>
                      <p className="heading5">Account Manager</p>
                      <p className="para">
                        We assign a dedicated account manager to you.
                      </p>
                    </div>
                    <div className="circle_check ">
                      <figure>
                        <Image src={check} alt="check" />
                      </figure>
                    </div>
                  </li>
                  <li>
                    <div className="fc-left-wrap">
                      <p className="process-head-blue">PRODUCT BACKLOG</p>
                      <p className="heading5">Product Owner and Dev Team</p>
                      <p className="para">
                        Either we prepare product backlog for you or together we
                        conduct product workshop
                      </p>
                    </div>
                    <div className="circle_check ">
                      <figure>
                        <Image src={check} alt="check" />
                      </figure>
                    </div>
                  </li>
                  <li>
                    <div className="fc-left-wrap">
                      <p className="process-head-blue">PRODUCT ASSUMPTION</p>
                      <p className="heading5">Product Owner & Dev Team</p>
                      <p className="para">
                        Definition of Done, Definition of Ready, Scope of
                        Project, Technology, Architecture, Risk Analysis, MVP
                      </p>
                    </div>
                    <div className="circle_check ">
                      <figure>
                        <Image src={check} alt="check" />
                      </figure>
                    </div>
                  </li>
                  <li>
                    <div className="fc-left-wrap">
                      <p className="process-head-blue">ESTIMATIONS</p>
                      <p className="heading5">Dev Team</p>
                      <p className="para">Draft of timeline reviews</p>
                    </div>
                    <div className="circle_check ">
                      <figure>
                        <Image src={check} alt="check" />
                      </figure>
                    </div>
                  </li>
                  <li>
                    <div className="fc-left-wrap">
                      <p className="process-head-blue">PROJECT PLAN</p>
                      <p className="heading5">Product Owner</p>
                      <p className="para">Draft of timeline reviews</p>
                    </div>
                    <div className="circle_check ">
                      <figure>
                        <Image src={check} alt="check" />
                      </figure>
                    </div>
                  </li>
                  <li>
                    <div className="fc-left-wrap">
                      <p className="process-head-blue">PROPOSAL</p>
                      <p className="heading5">Account Manager</p>
                      <p className="para">
                        Well-crafted proposal on how to reach your goals or
                        contract draft
                      </p>
                    </div>
                    <div className="circle_check ">
                      <figure>
                        <Image src={check} alt="check" />
                      </figure>
                    </div>
                  </li>
                  <li>
                    <div className="fc-left-wrap">
                      <p className="process-head-blue">
                        YOU & BUSINESS DEVELOPER
                      </p>
                      <p className="heading5">Business proposal</p>
                      <p className="para">
                        We send you a business proposal outlining cost
                        estimates, scope of work and much more.
                      </p>
                    </div>
                    <div className="circle_check ">
                      <figure>
                        <Image src={check} alt="check" />
                      </figure>
                    </div>
                  </li>
                </div>
              </div>
              {/* end second  left */}

              {/*  3 round */}
              <div className="process-col-left ">
                <ul className="start-p">
                  <li className="clearfix start_project">
                    <div className="process heading5">
                      <span
                        className="process-num wow bounceInLeft"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.1s"
                      >
                        03
                      </span>
                      Start Your Project
                    </div>
                    <div className="process-content">
                      <p className="para">
                        All we need is your presence at the project workshop
                      </p>
                      <div className="process-sub-head">WHAT YOU GET:</div>
                      <ul className="process-points">
                        <li>
                          <span className="para">
                            Detailed timeline on deliverables
                          </span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="process-col-right">
                <ul className="border-one border-three">
                  <li>
                    <div className="fc-right-wrap">
                      <p className="process-head-blue">SCRUM TEAM MEETING</p>
                      <p className="heading5">SCRUM Team</p>
                      <p className="para">
                        You will have an opportunity to meet the team and
                        explain your vision of the product.
                      </p>
                    </div>
                    <div className="circle_check ">
                      <figure>
                        <Image src={check} alt="check" />
                      </figure>
                    </div>
                  </li>
                  <li>
                    <div className="fc-right-wrap">
                      <p className="process-head-blue">DISCUSS & VERIFY</p>
                      <p className="heading5">SCRUM Team</p>
                      <p className="para">
                        The team verifies and prioritizes a list of tasks to be
                        accomplished.
                      </p>
                    </div>
                    <div className="circle_check ">
                      <figure>
                        <Image src={check} alt="check" />
                      </figure>
                    </div>
                  </li>
                  <li>
                    <div className="fc-right-wrap">
                      <p className="process-head-blue">
                        BACKLOG ESTIMATION REVIEW
                      </p>
                      <p className="heading5">SCRUM Team</p>
                      <p className="para">
                        Definition of Done, Definition of Ready, Scope of
                        project, technology, architecture, risk analysis, MVP
                      </p>
                    </div>
                    <div className="circle_check ">
                      <figure>
                        <Image src={check} alt="check" />
                      </figure>
                    </div>
                  </li>
                  <li>
                    <div className="fc-right-wrap">
                      <p className="process-head-blue">PLANNING OF RELEASE</p>
                      <p className="heading5">SCRUM Team</p>
                      <p className="para">
                        Scope of the release and release details
                      </p>
                    </div>
                    <div className="circle_check ">
                      <figure>
                        <Image src={check} alt="check" />
                      </figure>
                    </div>
                  </li>
                </ul>
              </div>
              {/* 3 end  round*/}
              {/* 4 */}
              <div className="process-col-right fl-left">
                <ul>
                  <li className="no-T-lines">
                    <div className="process-name heading5">
                      <span
                        className="process-num wow bounceInRight"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.1s"
                      >
                        04
                      </span>
                      Get product done
                    </div>
                    <div className="process-content">
                      <p className="para">
                        Stay in touch with our team for regular feedback
                        sessions and testing software functionalities.
                      </p>
                      <div className="process-sub-head">WHAT YOU GET:</div>
                    </div>
                    <ul className="process-points">
                      <li>
                        <span className="para">
                          Working product increment which you can use.
                        </span>
                      </li>
                      <li>
                        <span className="para">Well crafted software</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="testimonial-wrap">
                      <div className="testimonial-content">
                        <p className="para">
                          We follow Agile methods in our work. This is blended
                          with other principles and practices to make what we
                          call our "Agile Cocktail"
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="process-col-left fl-right">
                <div className="border-second">
                  <li>
                    <div className="fc-left-wrap">
                      <p className="process-head-blue">PLAN A SPRINT</p>
                      <p className="heading5">SCRUM Team</p>
                      <p className="para">
                        Product owner selects product backlog items to include
                        them in sprint. Team establishes their time commitment
                        for the sprint.
                      </p>
                    </div>
                    <div className="circle_check ">
                      <figure>
                        <Image src={check} alt="check" />
                      </figure>
                    </div>
                  </li>
                  <li>
                    <div className="fc-left-wrap">
                      <p className="process-head-blue">SPRINT</p>
                      <p className="heading5">SCRUM Team</p>
                      <p className="para">
                        Team works on functionality implementations
                      </p>
                    </div>
                    <div className="circle_check ">
                      <figure>
                        <Image src={check} alt="check" />
                      </figure>
                    </div>
                  </li>
                  <li>
                    <div className="fc-left-wrap">
                      <p className="process-head-blue">SPRINT REVIEW</p>
                      <p className="heading5">SCRUM Team</p>
                      <p className="para">
                        Team presents results of sprint (demo of working
                        software). Scrum Master delivers sprint report.
                      </p>
                    </div>
                    <div className="circle_check ">
                      <figure>
                        <Image src={check} alt="check" />
                      </figure>
                    </div>
                  </li>
                  <li>
                    <div className="fc-left-wrap">
                      <p className="process-head-blue">SPRINT RETROSPECTIVE</p>
                      <p className="heading5">SCRUM Team</p>
                      <p className="para">
                        Team evaluates work progress in order to boost
                        performance in further sprints.
                      </p>
                    </div>
                    <div className="circle_check ">
                      <figure>
                        <Image src={check} alt="check" />
                      </figure>
                    </div>
                  </li>
                </div>
              </div>
            </div>
          </div>
          {/* end xl page */}

          {/* mobile */}
          <div className="tree2">
            <div className="mx-5 lg:mx-16 xl:mx-56 2xl:mx-[385px] flex lg:hidden justify-center pt-10">
              <div className="relative border-l-2 border-l-[#410EAD] border-dotted">
                <ul>
                  {AgileProductSuccessData.map((element) => {
                    return (
                      <li className="mb-7" key={element.id}>
                        <figure className="absolute -left-4 -top-[1] bg-[#FAF7FF] py-2">
                          <BsCheckCircle
                            className={`${element.tickMarkColor} text-3xl`}
                          />
                        </figure>
                        <div className="px-7 lg:px-10 ">
                          <div className="text-xl font-semibold md:text-lg lg:text-2xl text-start relative pt-[10px] text-[#000000]">
                            {element.title}
                          </div>
                          {element.subTitle && (
                            <p className="text-sm font-normal	lg:text-base text-start mt-3 flex items-center">
                              {element.subTitle}
                            </p>
                          )}
                          {element.subData && (
                            <p className="text-lg lg:text-base text-start mt-3 flex items-center text-[#410EAD]">
                              {element.subData}
                            </p>
                          )}
                          {element.post && (
                            <p className="text-sm lg:text-base text-start mx-5 mt-2 flex items-center list-disc ">
                              {element.post}
                            </p>
                          )}
                          {element.post_2 && (
                            <p className="text-sm lg:text-base text-start mx-5 mt-2 flex items-center">
                              {element.post_2}
                            </p>
                          )}
                          {element.post_3 && (
                            <p className="text-sm lg:text-base text-start mx-5 mt-2 flex items-center">
                              {element.post_3}
                            </p>
                          )}

                          {element.sub_1 && (
                            <p className="text-lg lg:text-base text-start mt-16 flex items-center text-[#410EAD]">
                              {element.sub_1}
                            </p>
                          )}
                          {element.sub_2 && (
                            <p className="font-semibold lg:text-base text-start mx-5 mt-2 flex items-center">
                              {element.sub_2}
                            </p>
                          )}
                          {element.sub_3 && (
                            <p className="text-sm lg:text-base text-start mx-5 mt-2 flex items-center">
                              {element.sub_3}
                            </p>
                          )}
                          {element.sub_11 && (
                            <p className="text-lg lg:text-base text-start mt-10 flex items-center text-[#410EAD]">
                              {element.sub_11}
                            </p>
                          )}
                          {element.sub_12 && (
                            <p className="font-semibold lg:text-base text-start mx-5 mt-2 flex items-center">
                              {element.sub_12}
                            </p>
                          )}
                          {element.sub_13 && (
                            <p className="text-sm lg:text-base text-start mx-5 mt-2 flex items-center">
                              {element.sub_13}
                            </p>
                          )}
                          {element.sub_111 && (
                            <p className="text-lg lg:text-base text-start mt-10 flex items-center text-[#410EAD]">
                              {element.sub_111}
                            </p>
                          )}
                          {element.sub_112 && (
                            <p className="font-semibold lg:text-base text-start mx-5 mt-2 flex items-center">
                              {element.sub_112}
                            </p>
                          )}
                          {element.sub_113 && (
                            <p className="text-sm lg:text-base text-start mx-5 mt-2 flex items-center">
                              {element.sub_113}
                            </p>
                          )}
                          {element.sub_1111 && (
                            <p className="text-lg lg:text-base text-start mt-10 flex items-center text-[#410EAD]">
                              {element.sub_1111}
                            </p>
                          )}
                          {element.sub_1112 && (
                            <p className="font-semibold lg:text-base text-start mx-5 mt-2 flex items-center">
                              {element.sub_1112}
                            </p>
                          )}
                          {element.sub_1113 && (
                            <p className="text-sm lg:text-base text-start mx-5 mt-2 flex items-center">
                              {element.sub_1113}
                            </p>
                          )}
                          {element.sub_11111 && (
                            <p className="text-lg lg:text-base text-start mt-10 flex items-center text-[#410EAD]">
                              {element.sub_11111}
                            </p>
                          )}
                          {element.sub_11112 && (
                            <p className="font-semibold lg:text-base text-start mx-5 mt-2 flex items-center">
                              {element.sub_11112}
                            </p>
                          )}
                          {element.sub_11113 && (
                            <p className="text-sm lg:text-base text-start mx-5 mt-2 flex items-center">
                              {element.sub_11113}
                            </p>
                          )}
                          {element.sub_111111 && (
                            <p className="text-lg lg:text-base text-start mt-10 flex items-center text-[#410EAD]">
                              {element.sub_111111}
                            </p>
                          )}
                          {element.sub_111112 && (
                            <p className="font-semibold lg:text-base text-start mx-5 mt-2 flex items-center">
                              {element.sub_111112}
                            </p>
                          )}
                          {element.sub_111113 && (
                            <p className="text-sm lg:text-base text-start mx-5 mt-2 flex items-center">
                              {element.sub_111113}
                            </p>
                          )}
                          {element.sub_1111111 && (
                            <p className="text-lg lg:text-base text-start mt-10 flex items-center text-[#410EAD]">
                              {element.sub_1111111}
                            </p>
                          )}
                          {element.sub_1111112 && (
                            <p className="font-semibold lg:text-base text-start mx-5 mt-2 flex items-center">
                              {element.sub_1111112}
                            </p>
                          )}
                          {element.sub_1111113 && (
                            <p className="text-sm lg:text-base text-start mx-5 mt-2 flex items-center">
                              {element.sub_1111113}
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          {/* end mobile */}
        </div>
      </div>
    </>
  );
};

export default RoadMap;
