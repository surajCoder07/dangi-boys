import React from "react";
import Header from "./Header";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import photo from "../assets/photo-3.jpg";

const HeroBanner = () => {
  return (
    <div
      id="hero-banner"
      className="relative h-[600px] max-sm:h-fit  text-white"
    >
      <span className="bg-opacity-bottom absolute top-0 w-full z-[1] h-[300px] rotate-180 left-0"></span>
      <Header />
      <div className="p-web max-sm:p-mobile h-[60%] max-sm:py-5 max-sm:pb-9  flex gap-4 max-sm:flex-col ">
        <div className="flex-1 flex flex-col justify-evenly">
          <h1 className=" z-20  relative text-7xl max-sm:text-5xl max-[300px]:text-4xl font-semibold my-2">
            <span className="text-shadow"> Hey I'm </span>
            <span className="linear-text-bg ">Shatish Dangi</span>
          </h1>
          <p className="text-gray-300 text-justify text-shadow text-xl max-sm:text-lg  py-2">
            I am a dedicated and passionate professional in the world of wedding
            photography and video editing. With over 10+ of experience.
          </p>
          <div className="flex items-center z-10 gap-5">
            <a href="https://www.facebook.com/shatish.dangi" target="blank">
              <FaFacebookF size={"2em"} className="hover:text-primary-orange" />
            </a>
            <a href="https://www.instagram.com/shatish_dangi/" target="blank">
              <FaInstagram size={"2em"} className="hover:text-primary-orange" />
            </a>
            <a href="https://www.youtube.com/@DangiBoys67" target="blank">
              <FaYoutube size={"2em"} className="hover:text-primary-orange" />
            </a>
            <a href="https://wa.me/9627283304?text=Hello" target="blank">
              <FaWhatsapp size={"2em"} className="hover:text-primary-orange" />
            </a>
          </div>
        </div>
        <div className="flex-1 h flex justify-center max-sm:hidden  relative">
          <img
            src={photo}
            alt="photo"
            className="w-[350px] h-full rounded-lg    object-cover"
          />
        </div>
      </div>
      <span className="bg-opacity-bottom absolute bottom-0 w-full z-[2] h-[150px]  left-0"></span>
    </div>
  );
};

export default HeroBanner;
