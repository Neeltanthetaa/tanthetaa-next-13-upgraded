import React from "react";
import "./Tables.css";
const Tables = () => {
  const TablesData = [
    {
      id: 1,
      heading: "Design",
      bgHeading: "bg-[#AD8A0E]",
      lang1: "Photoshop",
      lang2: "Illustrator",
      lang3: "Adobe XD",
      lang4: "After Effects",
      lang5: "Sketch",
      lang6: "Invision",
    },
    {
      id: 2,
      heading: "Mobile",
      bgHeading: "bg-[#24AD0E]",
      lang1: "Kotlin",
      lang2: "Swift",
      lang3: "Java",
      lang4: "React Native",
      lang5: "Flutter",
      lang6: "Objective C",
    },
    {
      id: 3,
      heading: "Technologies",
      bgHeading: "bg-[#AD0E94]",
      lang1: "Docker",
      lang2: "Blockchain",
      lang3: "Ruby on Rails",
      lang4: "Arduino",
      lang5: "NLP",
      lang6: "Data Minimg",
    },
    {
      id: 4,
      heading: "ServerSilde",
      bgHeading: "bg-[#0E31AD]",
      lang1: "LAMP",
      lang2: "Node.js",
      lang3: "Mongo",
      lang4: "Redis",
      lang5: "Sketcion",
    },
  ];

  return (
    <>
      <section>
        <div className="container mx-auto my-20 lg:my-[140px]">
          <div className="pb-5 flex flex-col items-center">
            <h6 className="text-2xl lg:text-[35px] text-center lg:w-3/5 pb-2 leading-snug font-mono font-bold">
              Languages, tools
              <span className="text-[#410EAD] font-mono">and frameworks</span>
            </h6>
            <p className="text-center lg:text-base text-sm">
              Languages, tools and frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 px-5 ">
            {TablesData.map((element) => {
              return (
                <div key={element.id}>
                  <div className={`design py-1 ${element.bgHeading}`}>
                    <p className="text-center text-xl font-mono">
                      {element.heading}
                    </p>
                  </div>
                  <div className="tableFont">
                    {element.lang1 && (
                      <p className="border-b-[1px] border-b-[#CFCFCF] mt-3">
                        {element.lang1}
                      </p>
                    )}
                    {element.lang2 && (
                      <p className="border-b-[1px] border-b-[#CFCFCF] mt-3">
                        {element.lang2}
                      </p>
                    )}
                    {element.lang3 && (
                      <p className="border-b-[1px] border-b-[#CFCFCF] mt-3">
                        {element.lang3}
                      </p>
                    )}
                    {element.lang4 && (
                      <p className="border-b-[1px] border-b-[#CFCFCF] mt-3">
                        {element.lang4}
                      </p>
                    )}
                    {element.lang5 && (
                      <p className="border-b-[1px] border-b-[#CFCFCF] mt-3">
                        {element.lang5}
                      </p>
                    )}
                    {element.lang6 && (
                      <p className="border-b-[1px] border-b-[#CFCFCF] mt-3">
                        {element.lang6}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tables;
