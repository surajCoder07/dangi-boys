import React from "react";
import { tools } from "../utils/tools";
import { JackInTheBox } from "react-awesome-reveal";

const Tools = () => {
  return (
    <div id="tools" className=" bg-primary-bg p-web max-sm:p-mobile pt-10 ">
      <h1 className="text-primary-orange text-xl heading ">Tools </h1>
      <div className="flex py-5 items-center flex-wrap gap-5 justify-between max-sm:grid max-sm:grid-cols-2  ">
        {tools?.map((tool) => {
          return (
            <JackInTheBox triggerOnce key={tool.id}>
              <div className="rounded-lg tool-card  relative flex flex-col max-sm:m-5 justify-center p-3 items-center max-h-[200px]">
                <img
                  src={tool?.src}
                  className="w-[200px] max-sm:w-[150px] h-auto object-cover "
                />
                <h2 className="text-primary-text font-semibold text-2xl pb-2  max-sm:text-center max-sm:text-sm max-[301px]:text-xs">
                  {tool?.name}
                </h2>
              </div>
            </JackInTheBox>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;
