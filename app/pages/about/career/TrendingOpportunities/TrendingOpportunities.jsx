"use client";
import React, { useEffect, useState } from "react";
import { CgSearch } from "react-icons/cg";
// import { ImArrowRight2 } from "react-icons/im";
import "./TrendingOpportunities.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { HiArrowLongRight } from "react-icons/hi2";
import axiosInstanceAuthFormData from "../../../../apiInstances/axiosInstanceAuthFormData";
import useEncryption from "../../../../EncryptDecrypt/EncryptDecrypt";
import { toast } from "react-toastify";
import axiosInstance from "../../../../apiInstances/axiosInstance";
import PhoneInput from "react-phone-input-2";

export const TrendingOpportunities = () => {
  const { encryptData, decryptData } = useEncryption();

  const [OpenJobDetailPopUp, setOpenJobDetailPopUp] = useState(false);
  const [OpenJobApplyPopUp, setOpenJobApplyPopUp] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});
  const [allOpportunityData, setAllOpportunityData] = useState([]);

  const [Function, setFunction] = useState([]);
  const [Location, setLocation] = useState([]);
  const [Experience, setExperience] = useState([]);

  useEffect(() => {
    getAllOpportunityData();
  }, []);

  useEffect(() => {
    filterOpportunityByCheckbox(Function, Location, Experience);
  }, [Function, Location, Experience]);

  const getAllOpportunityData = async () => {
    await axiosInstance
      .get(`viewOpportunity`)
      .then((res) => {
        const myData = decryptData(res?.data?.data);
        setAllOpportunityData(myData?.data);
      })
      .catch((err) => {
        console.log("err--->", err);
      });
  };

  const filterOpportunityBySearch = async (keySearch) => {
    // console.log("e.target.value---->>", keySearch);

    await axiosInstance
      .post(`searchJob`, {
        search: keySearch,
      })
      .then((res) => {
        const myData = decryptData(res?.data?.data);
        setAllOpportunityData(myData?.data);
      })
      .catch((err) => {
        console.log("err--->", err);
      });
  };

  const filterOpportunityByCheckbox = async (
    Function,
    Location,
    Experience
  ) => {
    // console.log(" Function ---- >>", Function);
    // console.log(" Location ---- >>", Location);
    // console.log(" Experience ---- >>", Experience);

    await axiosInstance
      .get(`viewOpportunity`)
      .then((res) => {
        const myData = decryptData(res?.data?.data);
        setAllOpportunityData(myData?.data);
      })
      .catch((err) => {
        console.log("err--->", err);
      });
  };

  const viewDetailedOpportunityData = async (id) => {
    const encryptedData = encryptData(JSON.stringify({}));
    await axiosInstance
      .get(`viewOpportunity/${id}`, {
        response: encryptedData,
      })
      .then((res) => {
        const myData = decryptData(res?.data?.data);
        setSelectedJob(myData?.data);
      })
      .catch((err) => {
        console.log("err--->", err);
      });
  };

  const [JobInquiryInfo, setJobInquiryInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [phone, setPhone] = useState("");

  const [uploadFile, setUploadFile] = useState();
  const [preview, setPreview] = useState();

  const handleFileEvent = (e) => {
    e.preventDefault();
    let file = e.target.files?.[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      setUploadFile(file);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const setDefaultValue = () => {
    setJobInquiryInfo({
      name: "",
      email: "",
      message: "",
    });
    setPhone("");
    setUploadFile();
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setJobInquiryInfo({
      ...JobInquiryInfo,
      [name]: value,
    });
  };

  const OpenDetailPopUp = () => {
    setOpenJobDetailPopUp(true);
  };

  const CloseDetailPopUp = () => {
    setOpenJobDetailPopUp(false);
    setSelectedJob({});
  };

  const ApplyNow = () => {
    setOpenJobDetailPopUp(false);
    setOpenJobApplyPopUp(true);
  };

  const CloseApplyPopUp = () => {
    setOpenJobApplyPopUp(false);
    setSelectedJob({});
    setDefaultValue();
  };

  const SubmitNow = async (e) => {
    const formData = new FormData();
    formData.append("name", JobInquiryInfo.name);
    formData.append("email", JobInquiryInfo.email);
    formData.append("contact", phone);
    formData.append("message", JobInquiryInfo?.message);
    formData.append("file", uploadFile === undefined ? "" : uploadFile);

    await axiosInstanceAuthFormData
      .post("jobApply", formData)
      .then((res) => {
        const myData = decryptData(res?.data?.data);
        if (myData?.status) {
          toast.success(myData?.message);
          CloseApplyPopUp();
        } else {
          toast.error(myData?.message);
        }
      })
      .catch((err) => {
        console.log("err--->", err);
      });
  };

  return (
    <section>
      <>
        <div className="container px-4 md:px-24 lg:px-24 xl:px-0 mx-auto mt-16 md:mt-[140px] ">
          <div className="text-2xl lg:text-3xl xl:text-4xl leading-10 text-center pb-5 lg:leading-tight font-bold mb-4 font-mono ">
            <span className="lg:block font-mono mt-2">
              Trending{" "}
              <span className="text-[#410EAD] font-mono">Opportunities</span>
            </span>

            <p className="text-[#59587B] text-sm lg:text-base font-normal mb-5">
              We promise you an inclusive work environment where you will fall
              in love with challenging as well as getting challenged.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-4">
            {/* Left Side */}
            <div className="mx-auto mt-5  ">
              <div className="lg:text-xl leading-10 lg:leading-tight font-bold mb-4 font-mono border py-1 px-3 md:pb-2 lg:pb-3 boxShadow rounded-[7px] ">
                <span className="lg:block font-mono pt-2">
                  Filter
                  <span className="text-[#410EAD] font-mono">{` by`}</span>
                </span>
              </div>

              <div className="boxShadow rounded-[7px] ">
                <Accordion className="my-5">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <span className="text-[#410EAD] font-medium  text-base lg:text-xl leading-4 md:leading-5 lg:leading-6">
                      Function
                    </span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup>
                      {allOpportunityData?.length > 0 &&
                        allOpportunityData
                          .filter(
                            (value, index) =>
                              index ===
                              allOpportunityData.findIndex(
                                (i) => i?.job_name === value.job_name
                              )
                          )
                          .map((i) => (
                            <FormControlLabel
                              key={i?.job_name}
                              control={<Checkbox />}
                              label={i?.job_name}
                              onChange={() => {
                                if (Function.includes(i?.job_name)) {
                                  let index = Function.indexOf(i?.job_name);
                                  Function.splice(index, 1);
                                  setFunction([...Function]);
                                } else {
                                  setFunction([...Function, i?.job_name]);
                                }
                              }}
                            />
                          ))}
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="boxShadow rounded-[7px] mt-5">
                <Accordion className="my-5">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <span className="text-[#410EAD] font-medium  text-base lg:text-xl leading-4 md:leading-5 lg:leading-6">
                      Location
                    </span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup>
                      {allOpportunityData?.length > 0 &&
                        allOpportunityData
                          .filter(
                            (value, index) =>
                              index ===
                              allOpportunityData.findIndex(
                                (i) => i?.job_location === value.job_location
                              )
                          )
                          .map((i) => (
                            <FormControlLabel
                              key={i?.job_location}
                              control={<Checkbox />}
                              label={i?.job_location}
                              onChange={() => {
                                if (Location.includes(i?.job_location)) {
                                  let index = Location.indexOf(i?.job_location);
                                  Location.splice(index, 1);
                                  setLocation([...Location]);
                                } else {
                                  setLocation([...Location, i?.job_location]);
                                }
                              }}
                            />
                          ))}
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="boxShadow rounded-[7px] mt-5">
                <Accordion className="my-5">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <span className="text-[#410EAD] font-medium  text-base lg:text-xl leading-4 md:leading-5 lg:leading-6">
                      Experience
                    </span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup>
                      {allOpportunityData?.length > 0 &&
                        allOpportunityData
                          .filter(
                            (value, index) =>
                              index ===
                              allOpportunityData.findIndex(
                                (i) =>
                                  i?.job_experience === value.job_experience
                              )
                          )
                          .map((i) => (
                            <FormControlLabel
                              key={i?.job_experience}
                              control={<Checkbox />}
                              label={i?.job_experience}
                              onChange={() => {
                                if (Experience.includes(i?.job_experience)) {
                                  let index = Experience.indexOf(
                                    i?.job_experience
                                  );
                                  Experience.splice(index, 1);
                                  setExperience([...Experience]);
                                } else {
                                  setExperience([
                                    ...Experience,
                                    i?.job_experience,
                                  ]);
                                }
                              }}
                            />
                          ))}
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>

            {/* Right Side */}
            {/* Title */}
            <div className="my-auto text-center lg:text-start lg:mt-0 mt-14">
              {/* Searchbar */}
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 right-4 flex items-center pl-2 text-[#A5A5A5] cursor-pointer">
                  <CgSearch />
                </span>
                <input
                  className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md p-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Find your role"
                  type="text"
                  name="search"
                  onChange={(e) => {
                    filterOpportunityBySearch(e.target.value);
                  }}
                />
              </label>

              <div className="text-[#6B6B6B] text-start font-normal leading-[10px] lg:leading-4 text-sm mt-5 mb-[34px]">
                Showing {allOpportunityData?.length} positions
              </div>

              {/* Show Data */}
              {allOpportunityData?.length > 0 &&
                allOpportunityData.map((i) => (
                  <div
                    key={i?._id}
                    className="grid mx-auto px-5 py-3 grid-cols-12 border-b border-[#F2F2F2]  md:gap-3 gap-6 font-normal text-[15px] text-start leading-[18px] text-[#4A4A4A] hover:bg-[#FAF7FF] cursor-pointer align-end showArrow"
                    onClick={(e) => {
                      OpenDetailPopUp();
                      setSelectedJob(i);
                      // viewDetailedOpportunityData(i?.id)
                    }}
                  >
                    {/* onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} */}
                    <div className="col-span-7" id="postData">
                      {i?.job_title}
                    </div>
                    <div className="col-span-3">{i?.job_location}</div>
                    <div className="hidden md:block col-span-2 hideArrow">
                      <div className="text-sm text-[#000] flex justify-center items-center text-center font-normal">
                        <HiArrowLongRight className="ml-2 lg:text-xl md:text-base text-sm" />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* <<----- Job Detail Pop Up ----->> */}
        {OpenJobDetailPopUp ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999999]  outline-none focus:outline-none border">
              <div className="relative max-w-[90%] mx-auto  my-10 shadow-black shadow-2xl">
                {/* ------ Content ------ */}
                <div className="border-0 rounded-lg shadow-2xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/* ------ Header ------ */}
                  <div className="grid place-items-center place-content-end">
                    <button
                      className="bg-transparent border-0 text-black opacity-9 text-2xl font-normal outline-none focus:outline-none mx-3 my-2"
                      onClick={(e) => CloseDetailPopUp()}
                    >
                      ×
                    </button>
                  </div>
                  {/* ------ Body ------ */}
                  <div className="relative px-6 md:px-10 py-4 flex-auto">
                    <h1 className="my-2 text-black font-semibold text-lg md:text-2xl leading-relaxed">
                      {selectedJob?.job_title}
                    </h1>
                    <h1 className="my-2 text-slate-800 font-medium text-lg leading-relaxed">
                      {selectedJob?.job_location}
                    </h1>
                  </div>

                  {selectedJob?.job_description_1 && (
                    <div className="relative px-6 md:px-10 py-4 flex-auto">
                      <h1 className="my-2 text-[#410EAD] font-semibold text-lg md:text-xl lg:text-2xl leading-relaxed">
                        Job description
                      </h1>
                      <div className="pl-7 md:pl-14">
                        {selectedJob?.job_description_1 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              Develop iOS Application using Web Services, SOAP,
                              JSON, REST, Cocoa Touch
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_description_2 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_description_2}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_description_3 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_description_3}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_description_4 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_description_4}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_description_5 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_description_5}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_description_6 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_description_6}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_description_7 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_description_7}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_description_8 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_description_8}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_description_9 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_description_9}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_description_10 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_description_10}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_description_11 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_description_11}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_description_12 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_description_12}
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  )}

                  {selectedJob?.job_requirement_1 && (
                    <div className="relative px-6 md:px-10 py-4 flex-auto">
                      <h1 className="my-2 text-[#410EAD] font-semibold text-lg md:text-xl lg:text-2xl leading-relaxed">
                        Job Requirements
                      </h1>
                      <div className="pl-7 md:pl-14">
                        {selectedJob?.job_requirement_1 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_requirement_1}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_requirement_2 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_requirement_2}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_requirement_3 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_requirement_3}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_requirement_4 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_requirement_4}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_requirement_5 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_requirement_5}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_requirement_6 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_requirement_6}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_requirement_7 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_requirement_7}
                            </li>
                          </ul>
                        )}
                        {selectedJob?.job_requirement_8 && (
                          <ul className="my-2 text-slate-700 font-medium text-sm lg:text-base leading-relaxed">
                            <li className="!list-disc">
                              {selectedJob?.job_requirement_8}
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="relative px-6 md:px-10 flex-auto">
                    <h1 className="my-1 text-slate-800 font-medium text-sm md:text-base leading-relaxed">
                      Location : {selectedJob?.job_location}
                    </h1>
                    <h1 className="my-1 text-slate-800 font-medium text-sm md:text-base leading-relaxed">
                      Experience : {selectedJob?.job_experience}
                    </h1>
                  </div>

                  {/* ------ Fotter ------ */}
                  <div className="grid place-items-center my-8">
                    <button
                      className="bg-[#410EAD] text-white font-semibold uppercase text-sm px-6 py-3 rounded-lg shadow hover:bg-[#4b12c7] hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                      onClick={(e) => ApplyNow()}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-20 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}

        {/* <<----- Job Apply Pop Up ----->> */}
        {OpenJobApplyPopUp ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999999]  outline-none focus:outline-none border">
              <div className="relative max-w-[90%] mx-auto  my-10 shadow-black shadow-2xl">
                {/* ------ Content ------ */}
                <div className="border-0 rounded-lg shadow-2xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/* ------ Header ------ */}
                  <div className="grid place-items-center place-content-end">
                    <button
                      className="bg-transparent border-0 text-black opacity-9 text-2xl font-normal outline-none focus:outline-none mx-3 my-2"
                      onClick={(e) => CloseApplyPopUp()}
                    >
                      ×
                    </button>
                  </div>
                  {/* ------ Body ------ */}
                  <div className="relative grid place-items-center px-6 md:px-10 py-6 flex-auto">
                    <h3 className="text-black font-semibold text-base md:text-lg  leading-relaxed text-center">
                      Apply For Job
                    </h3>
                    <h1 className="my-1 text-[#410EAD] uppercase font-extrabold text-xl  md:text-2xl leading-relaxed text-center">
                      {selectedJob?.job_title}
                    </h1>
                    <h3 className="text-black font-semibold text-base md:text-lg leading-relaxed text-center">
                      At Tan θ Software Studio
                    </h3>
                  </div>

                  <div className="relative py-5 px-6 md:px-10 flex-auto">
                    <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
                      <input
                        className={`text-sm rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-5 px-8 my-4 w-[100%] mx-5 outline-none`}
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={JobInquiryInfo?.name}
                        onChange={onChangeInput}
                      />
                    </div>

                    <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
                      <input
                        className={`text-sm rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)]  py-5 px-8 my-4 w-[100%] mx-5 outline-none`}
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={JobInquiryInfo?.email}
                        onChange={onChangeInput}
                      />
                    </div>

                    <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
                      <PhoneInput
                        country={"in"}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                        className="text-sm rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] px-5 my-4 w-[100%] mx-5 outline-none"
                      />
                    </div>

                    <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
                      <textarea
                        className={`text-sm rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)]  py-5 px-8 my-4 w-[100%] mx-5 outline-none`}
                        type="text"
                        rows="2"
                        placeholder="Message"
                        name="message"
                        value={JobInquiryInfo?.message}
                        onChange={onChangeInput}
                      />
                    </div>

                    <div className="flex flex-wrap lg:flex-nowrap justify-center items-centercursor-pointer my-4 mx-5">
                      <input
                        className={`upload-cv text-[#A1A6B6] rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] pr-2 w-[99%] md:w-[100%]`}
                        name="file"
                        type="file"
                        multiple
                        onChange={handleFileEvent}
                      />
                    </div>
                  </div>

                  <div className="relative grid place-items-center px-20 flex-auto">
                    <h1 className="my-1 text-slate-800 font-medium text-sm leading-relaxed text-center">
                      If you are unable to submit your details, then please
                      share your recently updated resume at
                      <a
                        className="mx-1 text-[#410EAD]"
                        href="mailto:solve@tanthetaa.com"
                        target="_blank"
                      >
                        Solve@Tanthetaa.Com
                      </a>
                      .
                    </h1>
                  </div>

                  {/* ------ Fotter ------ */}
                  <div className="grid place-items-center my-8">
                    <button
                      className="bg-[#410EAD] text-white font-semibold uppercase text-sm px-6 py-3 rounded-lg shadow hover:bg-[#4b12c7] hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                      onClick={(e) => SubmitNow()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-20 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </section>
  );
};
