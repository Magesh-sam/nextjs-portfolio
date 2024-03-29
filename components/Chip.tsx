import React from "react";

function Chip({ name }: { name: string }) {
  return (
    <span className="  rounded-md bg-pink-600 px-2 py-1 text-xs text-white transition duration-300 hover:bg-pink-800">
      {name}
    </span>
  );
}

export default Chip;
