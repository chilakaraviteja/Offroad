import React from "react";
import i from "../assets/Images/image-I.png";

const Hero = ({ status, data }) => {
  const { p1, model, description, b_content, b1_content, b2_content } = data;
  return (
    <>
      <div
        data-status={status}
        className="group cars ix1-banner i4-banner bg-no-repeat bg-cover md:bg-cover w-screen "
      >
        <div className="bg-gradient-to-t md:bg-gradient-to-r from-black px-7 md:px-8 py-16 h-dvh">
          <div className="i4-banner-content text-center md:text-left md:max-w-[50%] grid grid-cols-1 text-white md:mt-12 md:py-36 md:px-24">
            <div className="group-data-[status=cars]:md:mb-6 md:-mb-4">
              <p className="group-data-[status=cars]:text-3xl text-xl uppercase font-normal">
                {p1}
              </p>
            </div>
            <p className="text-8xl md:text-[140px] ">{model}</p>
            <div className="flex mb-6 ">
              {model && (
                <img
                  src={i}
                  alt="i symbol"
                  className="w-6 md:w-12 mb-2 md:mb-6"
                />
              )}
              <p className="group-data-[status=cars]:text-lg group-data-[status=cars]:normal-case text-lg md:text-2xl uppercase">
                {description}
              </p>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4  ">
              {(b1_content || b_content) && (
                <button className="bg-blue_medium hover:bg-blue_dark text-white px-32 py-2 md:px-9 md:py-3 font-semibold">
                  {b1_content || b_content}
                </button>
              )}
              {b2_content && (
                <button className="bg-transparent border-2 text-white px-32 py-2 md:px-9 md:py-3">
                  {b2_content}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
