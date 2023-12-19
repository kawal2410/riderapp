import React from "react";

const Whitedisplay = ({ ...prop }) => {
  console.log("wow", prop.prop);
  return (
    <div className="w-[100%] h-[50vh]    bg-red-300">
      <div className="text-xl text-white">{prop?.Result?.tilte}</div>
    </div>
  );
};
export default Whitedisplay;
