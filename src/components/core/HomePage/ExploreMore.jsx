import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skill paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState("Free");

  const selectedData = HomePageExplore.find(
    (item) => item.tag === currentTab
  );

  return (
    <div className="text-white mt-20">
      <h2 className="text-4xl font-semibold text-center mb-6">
        Unlock the <span className="text-yellow-400">Power of Code</span>
      </h2>

      <div className="flex justify-center gap-4 mb-8">
        {tabsName.map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`px-6 py-2 rounded-full ${
              currentTab === tab
                ? "bg-richblack-800"
                : "bg-richblack-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        {selectedData?.courses?.map((course) => (
          <div
            key={course.heading}
            className="bg-richblack-800 p-5 rounded-lg w-[280px]"
          >
            <h3 className="text-lg font-semibold mb-2">
              {course.heading}
            </h3>
            <p className="text-sm text-richblack-300 mb-2">
              {course.description}
            </p>
            <p className="text-sm text-yellow-400">
              {course.level} • {course.lessionNumber} Lessons
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
