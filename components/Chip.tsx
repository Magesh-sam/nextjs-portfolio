import React from "react";

function Chip({ skill }: { skill: string }) {
  return (
    <span className="rounded-full bg-[#FFDD55] px-2 py-1 text-[12px] text-[#1f1f1f]">
      {skill}
    </span>
  );
}

export default Chip;
