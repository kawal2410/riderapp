import React, { useState } from "react";
import Button from "./buttonFile";

const Header = ({ ...headerPro }) => {
  console.log("headerPro", headerPro);
  return (
    //    main div //
    <div className="w-[100%]  border-2 bg-purple-500">
      <div className=" font-bold text-white text-4xl  mt-[8%]">
        {headerPro?.Result?.title}
      </div>
      <div className="flex items-end  h-[30vh]">
        <Button prop={headerPro} />
      </div>
    </div>
  );
};
export default Header;
