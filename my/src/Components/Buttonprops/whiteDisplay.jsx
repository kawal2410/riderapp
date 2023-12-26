import React from "react";

const Whitedisplay = ({ ...prop }) => {
  console.log("wow", prop);
  return (
    <div className="w-[100%] h-[50vh]    bg-green-300">
      <div className=" text-green-600 text-6xl pl-[60px] pt-[60px]">
        {prop?.Result?.tilte}
      </div>
    </div>
  );
};
export default Whitedisplay;
