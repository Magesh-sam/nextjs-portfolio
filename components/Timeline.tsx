import React from "react";

const TimelineItem = ({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="group mb-8 flex max-w-max items-center border-b-2 border-slate-700 pb-3 ">
      <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-400 transition-all duration-300 ease-in group-hover:h-8 group-hover:w-8 group-hover:border-purple-500">
        <div className="h-2 w-2 rounded-full bg-gray-400 transition-all duration-200 ease-in group-hover:bg-pink-500 "></div>
      </div>
      <div className="ml-4 transition-all">
        <h3 className="text-2xl font-medium">{date}</h3>
        <h4 className="text-xl text-gray-200">{title}</h4>
        <p className="text-lg text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="flex flex-col gap-y-5 px-3">
      <TimelineItem
        date="Apr 2024 - Mar 2025"
        title="Software Engineer"
        description="EY GDS, India"
      />
      <TimelineItem
        date="Apr 2021 - Jul 2023"
        title="Software Engineer"
        description="Capgemini Technologies, India"
      />
      <TimelineItem
        date="Dec 2019 - Feb 2020"
        title="Software Engineer Intern"
        description="Shiash info solutions, India"
      />
      <TimelineItem
        date="Oct 2016 - Apr 2020"
        title="Computer Science Degree"
        description="Adhiyamaan college of engineering, India"
      />
    </div>
  );
};

export default Timeline;
