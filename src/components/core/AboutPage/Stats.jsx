import React from "react";

const statsData = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponent = () => {
  return (
    <div className="bg-gradient-to-r from-[#111827] to-[#020617] py-16">
      <div className="w-11/12 max-w-6xl mx-auto text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-y-10">
          {statsData.map((data, index) => (
            <div key={index} className="flex flex-col gap-2 py-6">
              <h1 className="text-4xl font-bold text-yellow-400">
                {data.count}
              </h1>
              <h2 className="font-medium text-base text-gray-400">
                {data.label}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
