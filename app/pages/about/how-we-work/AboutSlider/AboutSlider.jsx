import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const aboutSliderData = [
    {
      id: 1,
      title: " evaluating and creating architecture for",
      subTitle: "quality, scalability, and maintenance.",
      description:
        "Work with a handpicked selection of highly qualified engineers who have experience working in companies and time zones around the world.",
    },
    {
      id: 2,
      title: " evaluating and creating architecture for",
      subTitle: "quality, scalability, and maintenance.",
      description:
        "Work with a handpicked selection of highly qualified engineers who have experience working in companies and time zones around the world.",
    },
    {
      id: 3,
      title: " evaluating and creating architecture for",
      subTitle: "quality, scalability, and maintenance.",
      description:
        "Work with a handpicked selection of highly qualified engineers who have experience working in companies and time zones around the world.",
    },
  ];

  const aboutSliderList = aboutSliderData?.map((item) => {
    return (
      <>
        <div
          key={item?.id}
          className="bg-[#72645A] text-white rounded-lg py-10 lg:py-20 px-3 lg:px-0 text-center mb-10"
        >
          <h6 className="text-2xl sm:text-3xl xl:text-4xl font-bold pb-7 font-mono">
            {item?.title}
            <span className="lg:block font-mono">{item?.subTitle}</span>
          </h6>
          <p className="text-white font-medium max-w-4xl mx-auto">
            {item?.description}
          </p>
        </div>
      </>
    );
  });

  return (
    <>
      <section className="container mx-auto my-20 lg:my-[140px] px-3">
        <Slider {...settings} className="-z-10">
          {aboutSliderList}
        </Slider>
      </section>
    </>
  );
};

export default AboutSlider;
