import React from "react";
import HeaderDisplay from "./headerDisplay";
import Actionbutton from "./buttons";
import Displaytext from "./whitedisplay";
import { useAtom } from "jotai";
import { Buttontabs } from "../../store.js/store";

const ParentJoati = () => {
  return (
    <div>
      <div className="border  h-[20vh]">
        <HeaderDisplay />
        <Actionbutton />
        <Displaytext />
      </div>
    </div>
  );
};

export default ParentJoati;
