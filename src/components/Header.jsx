import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { HiMenuAlt1 } from "react-icons/hi";
import logo from "../assets/logo2.png";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between bg-transparent   text-white items-center relative      h-[100px] px-4 ">
      <Fade className="z-[999]" duration={3000} triggerOnce>
        <img
          src={logo}
          alt="logo"
          className="w-[150px] max-sm:w[100px] relative z-[9999999] h-auto"
        />
      </Fade>
      <Fade
        duration={3000}
        triggerOnce
        className={`max-sm:absolute max-sm:flex max-sm:justify-center max-sm:items-center  max-sm:shadow-lg max-sm:bg-primary-bg max-sm:top-0 max-sm:h-screen  max-sm:w-[60%] max-sm:z-[9999] max-sm:left-0 max-sm:duration-300 
        ${isOpen ? " max-sm:-translate-x-0 " : "max-sm:-translate-x-[100%]"}`}
      >
        <ul className="flex items-center gap-5 max-sm:flex-col z-[9999] relative ">
          <li
            onClick={() => handleClick()}
            className="cursor-pointer text-lg text-shadow btn"
          >
            <a>Home</a>
          </li>
          <li
            onClick={() => handleClick()}
            className="cursor-pointer text-lg text-shadow btn"
          >
            <a href="#about">About</a>
          </li>
          <li
            onClick={() => handleClick()}
            className="cursor-pointer text-lg text-shadow btn"
          >
            <a href="#tools">Tools</a>
          </li>
          <li
            onClick={() => handleClick()}
            className="cursor-pointer text-lg text-shadow btn"
          >
            <a href="#services">Services</a>
          </li>
          <li
            onClick={() => handleClick()}
            className="cursor-pointer text-lg text-shadow btn"
          >
            <a href="#work">Work</a>
          </li>
          <li
            onClick={() => handleClick()}
            className="cursor-pointer text-lg text-shadow btn"
          >
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </Fade>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="z-10 relative hidden max-sm:flex"
      >
        {isOpen ? (
          <RiCloseFill
            size={"1.5em"}
            color="#ffffff"
            className=" text-white cursor-pointer"
          />
        ) : (
          <HiMenuAlt1
            size={"1.5em"}
            color="#ffffff"
            className="text-white cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
