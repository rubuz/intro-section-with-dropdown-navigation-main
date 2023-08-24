import React from "react";
import databiz from "../assets/client-databiz.svg";
import audiophile from "../assets/client-audiophile.svg";
import meet from "../assets/client-meet.svg";
import maker from "../assets/client-maker.svg";
import heroPicture from "../assets/image-hero-desktop.png";

const Hero = () => {
  return (
    <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-32 items-end justify-center">
      <div>
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-almost-black font-bold text-[4rem]">
            Make <br /> remote work
          </h1>
          <p className="text-medium-gray">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-almost-black px-7 py-2 text-alomost-white rounded-xl border-2 border-almost-black hover:bg-transparent hover:text-almost-black hover:border-almost-black hover:border-2 duration-200">
            Learn More
          </button>
        </div>
        <div className="flex items-center justify-start mt-20 gap-7">
          <img src={databiz} alt="databiz logo" />
          <img src={audiophile} alt="audiophile logo" />
          <img src={meet} alt="meet logo" />
          <img src={maker} alt="maker logo" />
        </div>
      </div>
      <div>
        <img
          src={heroPicture}
          alt="hero picture with shapes and man standing with laptop"
        />
      </div>
    </div>
  );
};

export default Hero;
