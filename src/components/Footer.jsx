import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-primary-bg text-white p-web max-sm:p-mobile">
      <h1 className="text-primary-orange my-4 text-2xl font-semibold text-center">
        {" "}
        Thanks for visiting!{" "}
      </h1>
      <p className="text-center ">
        Copyright © {currentYear}{" "}
        <a
          href="https://www.youtube.com/@DangiBoys67"
          target="blank"
          className="cursor-pointer text-primary-orange"
        >
          Random shots (Dangi boys)
        </a>{" "}
        All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
