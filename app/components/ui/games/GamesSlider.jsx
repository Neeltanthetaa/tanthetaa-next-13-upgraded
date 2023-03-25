/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export const GamesSlider = () => {
  var settings = {
    // infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };

  const ClientSliderData = [
    {
      id: 1,
      clientImage: "FounderImageFirst",
      clientDescription:
        "I'm convinced that Tan θ deserves all the acclodes it has received so far. Confident that this team will scale great hei I'm convinced that Tan θ deserves all the acclodes it has received so far. Confident that this team will scale great heights very soon.",
      clientName: "Tanner Adams",
      clientPosition: "Founder CelebVue",
    },
    {
      id: 2,
      clientImage: "FounderImageSecond",
      clientDescription:
        "I'm convinced that Tan θ deserves all the acclodes it has received so far. Confident that this team will scale great hei I'm convinced that Tan θ deserves all the acclodes it has received so far. Confident that this team will scale great heights very soon.",
      clientName: "Tan θ",
      clientPosition: "CTO CelebVue       ",
    },
    {
      id: 3,
      clientImage: "FounderImageFirst",
      clientDescription:
        "I'm convinced that Tan θ deserves all the acclodes it has received so far. Confident that this team will scale great hei I'm convinced that Tan θ deserves all the acclodes it has received so far. Confident that this team will scale great heights very soon.",
      clientName: "Tanner Adams",
      clientPosition: "Founder CelebVue",
    },
    {
      id: 4,
      clientImage: "FounderImageSecond",
      clientDescription:
        "I'm convinced that Tan θ deserves all the acclodes it has received so far. Confident that this team will scale great hei I'm convinced that Tan θ deserves all the acclodes it has received so far. Confident that this team will scale great heights very soon.",
      clientName: "Tan θ",
      clientPosition: "CTO CelebVue       ",
    },
    {
      id: 5,
      clientImage: "FounderImageFirst",
      clientDescription:
        "I'm convinced that Tan θ deserves all the acclodes it has received so far. Confident that this team will scale great hei I'm convinced that Tan θ deserves all the acclodes it has received so far. Confident that this team will scale great heights very soon.",
      clientName: "Tanner Adams",
      clientPosition: "Founder CelebVue",
    },
    {
      id: 6,
      clientImage: "FounderImageSecond",
      clientDescription:
        "I'm convinced that Tan θ deserves all the acclodes it has received so far. Confident that this team will scale great hei I'm convinced that Tan θ deserves all the acclodes it has received so far. Confident that this team will scale great heights very soon.",
      clientName: "Tan θ",
      clientPosition: "CTO CelebVue",
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <Slider {...settings} className="z-0">
          {ClientSliderData.map((element) => {
            return (
              <div className=" mt-4 mb-10 client-details" key={element.id}>
                <div className=" px-4 md:px-14 xl:px-28 my-auto">
                  <div className="flex justify-center">
                    <Image
                      src={"/assets/games/sliderGames.png"}
                      alt="SliderImage"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
