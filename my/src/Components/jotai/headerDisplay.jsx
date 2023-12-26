import React from "react";
import { useAtom } from "jotai";
import { Buttontabs } from "../../store.js/store";

const HeaderDisplay = () => {
  const [first] = useAtom(Buttontabs);
  console.log("first", first);
  return (
    <div className="">
      <div className="border bg-yellow-200 h-[50vh] text-5xl  flex items-center ">
        {first}
      </div>
    </div>
  );
};
export default HeaderDisplay;
