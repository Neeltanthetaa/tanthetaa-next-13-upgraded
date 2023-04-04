import { cx } from "class-variance-authority";
import Markdown from "../common/Markdown";

export const GameCard = ({ content }) => {
  //   const [activeTab, setActiveTab] = useState(1);

  //   const handleClick = (id) => {
  //     setActiveTab(id);
  //   };

  return (
    <>
      <div className="container grid gap-4 mx-auto transition-all duration-300 ease-in-out xl:grid-cols-2 mt-28 place-content-center place-items-center">
        {content?.map((item) => (
          <div
            key={item?.id}
            className={cx(
              " cursor-pointer !h-full  rounded-[20px] p-10 max-w-2xl  hover:shadow-lg shadow-cardShadow"

              // activeTab === item?.id
              //   ? "bg-[#7B3FE4] rounded-[20px] border-none"
              //   : "bg-white shadow-cardShadow"
            )}
          >
            <h3
              className={cx(
                "text-2xl font-semibold font-mono",
                item?.id === 1
                  ? "text-[#CF9615]"
                  : item?.id === 2
                  ? "text-[#0BB2B2]"
                  : item?.id === 3
                  ? "text-[#DE1C90]"
                  : item?.id === 4
                  ? "text-[#B92A2A]"
                  : item?.id === 5
                  ? "text-[#2A0E99]"
                  : "text-[#B430D6]"
                // activeTab === item?.id ? "text-white" : "text-black"
              )}
            >
              <Markdown text={item?.title} />
            </h3>
            <h5
              className={cx(
                "mt-5 text-base font-normal"
                // activeTab === item?.id ? "text-[#CCCCCC]" : "text-[#333333]"
              )}
            >
              <Markdown text={item?.description} />
            </h5>
          </div>
        ))}
      </div>
    </>
  );
};
