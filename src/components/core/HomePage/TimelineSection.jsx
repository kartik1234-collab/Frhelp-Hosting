import React from "react";

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Description: "Fully committed to the success of the company",
  },
  {
    Logo: Logo2,
    heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    heading: "Flexibility",
    Description: "Ability to adapt quickly to change",
  },
  {
    Logo: Logo4,
    heading: "Problem Solving",
    Description: "We solve real-world challenges with code",
  },
];

const TimelineSection = () => {
  return (
    <div className="w-full py-20">
      <div className="flex flex-col lg:flex-row gap-16 items-center">

        {/* ================= LEFT TIMELINE ================= */}
        <div className="relative w-full lg:w-[45%] flex flex-col gap-12">

          {/* Vertical line */}
          <div className="absolute left-[24px] top-0 h-full w-[2px] 
          bg-gradient-to-b from-richblack-300 via-richblack-400 to-transparent"></div>

          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative flex gap-6 items-start group
              transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Icon */}
              <div
                className="z-10 w-[48px] h-[48px] rounded-full bg-white 
                flex items-center justify-center shadow-md
                transition-all duration-300
                group-hover:scale-110 group-hover:shadow-blue-300"
              >
                <img src={item.Logo} alt={item.heading} className="w-6 h-6" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-richblack-800">
                  {item.heading}
                </h3>
                <p className="text-sm text-richblack-500 leading-6 max-w-[320px]">
                  {item.Description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative w-full lg:w-auto group">

          {/* Glow background */}
          <div className="absolute -inset-6 bg-gradient-to-tr 
          from-blue-200 to-cyan-200 blur-2xl opacity-60"></div>

          <img
            src={timelineImage}
            alt="Timeline"
            className="relative rounded-xl shadow-xl
            transition-all duration-500
            group-hover:scale-[1.03]"
          />

          {/* Stats Card */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-caribbeangreen-700 text-white
            flex gap-8 px-8 py-6 rounded-lg shadow-lg
            transition-all duration-300 hover:scale-105"
          >
            <div className="flex gap-3 items-center border-r border-caribbeangreen-300 pr-6">
              <p className="text-3xl font-bold">10</p>
              <p className="text-xs text-caribbeangreen-200 uppercase">
                Years<br />Experience
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <p className="text-3xl font-bold">250</p>
              <p className="text-xs text-caribbeangreen-200 uppercase">
                Types of<br />Courses
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TimelineSection;
