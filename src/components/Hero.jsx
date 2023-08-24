import React, { useEffect, useState } from "react";
import databiz from "../assets/client-databiz.svg";
import audiophile from "../assets/client-audiophile.svg";
import meet from "../assets/client-meet.svg";
import maker from "../assets/client-maker.svg";
import heroPicture from "../assets/image-hero-desktop.png";
import heroPictureMobile from "../assets/image-hero-mobile.png";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-[1150px] p-0 lg:p-6 mx-auto grid lg:grid-cols-2 gap-10 lg:gap-32 items-end justify-center">
      <div className="order-2 lg:order-1">
        <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-8">
          <h1 className="text-almost-black font-bold text-4xl lg:text-[4rem] leading-none text-center lg:text-left ">
            Make remote work
          </h1>
          <p className="text-medium-gray max-w-[90%] text-center lg:text-left">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="cursor-pointer bg-almost-black px-7 py-2 text-alomost-white rounded-xl border-2 border-almost-black hover:bg-transparent hover:text-almost-black hover:border-almost-black hover:border-2 duration-200">
            Learn More
          </button>
        </div>
        <div className="flex items-center justify-between mt-10 mx-2 lg:mt-28 gap-7">
          <img src={databiz} alt="databiz logo" />
          <img src={audiophile} alt="audiophile logo" />
          <img src={meet} alt="meet logo" />
          <img src={maker} alt="maker logo" />
        </div>
      </div>
      <div className="self-center lg:order-2">
        {windowWidth < 1024 ? (
          <img
            src={heroPictureMobile}
            alt="hero picture with shapes and man standing with laptop"
          />
        ) : (
          <img
            src={heroPicture}
            alt="hero picture with shapes and man standing with laptop"
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
