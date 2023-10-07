import React from "react";

const Work = () => {
  return (
    <div id="work" className="text-white bg-primary-bg p-web max-sm:p-mobile">
      <h1 className="text-primary-orange text-xl heading ">Sample Work </h1>
      <div className="flex gap-6 items-center  justify-around py-10 max-sm:flex-col flex-wrap ">
        <div className="flex-1 w-full">
          <iframe
            className="rounded-md w-full h-[350px]"
            src="https://www.youtube.com/embed/gOEwpgnrsrE?si=EGEJ5Wbbbxji5fBc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex-1 w-full">
          <iframe
            className="rounded-md w-full h-[350px]"
            src="https://www.youtube.com/embed/DUYVF_a2gd0?si=lU6PSV4pNTMtFaZa"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Work;
