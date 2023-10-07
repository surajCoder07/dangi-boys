import React from "react";
import logo from "../assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div
      id="contact"
      className="text-white bg-primary-bg p-web max-sm:p-mobile"
    >
      <h1 className="text-primary-orange text-xl heading ">Contact me</h1>
      <div className="flex items-center flex-wrap max-sm:flex-col gap-5 ">
        <div className="flex-1">
          <img src={logo} alt="logo" width={"250px"} />
          <span className="  my-3 font-semibold linear-text-bg text-3xl ">
            Any Query ?
          </span>
          <span className="  flex text-xl my-2 font-semibold items-center gap-4">
            <FaPhoneAlt size={"1.5em"} color="#fcac11" /> 9627283304 ,
            7409269014
          </span>
          <span className="  flex text-xl py-2 font-semibold items-center gap-4">
            <FaLocationDot size={"1.5em"} color="#fcac11" />
            Lohaghat,Uttarakhand-262524
          </span>
        </div>
        <div className="flex-1 flex items-center w-full  justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27806.042517596685!2d80.0651296297752!3d29.406713195992612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0e01bcefa0a4d%3A0xb4f8dfae2a3677!2sLohaghat%2C%20Uttarakhand%20262524!5e0!3m2!1sen!2sin!4v1696670484641!5m2!1sen!2sin"
            className="w-[100%] h-[300px] max-md:w-full max-sm:h-[200px] border-none rounded-md"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
