import React from "react";
import { useAtom } from "jotai";
import { Buttontabs } from "../../store.js/store";

const Displaytext = () => {
  const [first] = useAtom(Buttontabs);

  return (
    <div>
      <div className="bg-orange-500 h-[50vh]  text-5xl  flex items-center ">
        {first}
      </div>
    </div>
  );
};
export default Displaytext;
