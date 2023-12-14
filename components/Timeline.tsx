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
    <div className="mb-4 flex items-center ">
      <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-400">
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
      </div>
      <div className="ml-4">
        <h3 className="text-2xl font-medium">{date}</h3>
        <h4 className="text-xl text-gray-200">{title}</h4>
        <p className="text-lg text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <TimelineItem
        date="Apr 2021 - Jul 2023"
        title="Senior Software Engineer"
        description="Capgemini Technologies, India"
      />
      <TimelineItem
        date="Dec 2019 - Feb 2020"
        title="Software Engineer Intern"
        description="Shiash info Solution, India"
      />
      <TimelineItem
        date="Oct 2016 - Apr 2020"
        title="Computer Science Degree"
        description="Adhiyamaan college of engineering, India"
      />
      {/* Add more timeline items here */}
    </div>
  );
};

export default Timeline;
