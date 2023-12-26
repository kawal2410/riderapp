import React, { useState } from "react";
import Header from "./headerFile";
import Whitedisplay from "./whiteDisplay";

const BottomFile = () => {
  const Actionbutton = [
    { button: "actionbutton1", title: "Tab one " },
    { button: "actionbutton2", title: "Tab two" },
    { button: "actionbutton3", title: "Tab three" },
    { button: "actionbutton4", title: "Tab four" },
  ];
  const [Result, setResult] = useState({
    button: "actionbutton1",
    title: "Tab one",
  });
  console.log("Result", Result);
  return (
    <div className="">
      <div>
        <Header
          headerProp={Actionbutton}
          Result={Result}
          setResult={setResult}
        />
      </div>
      <div className="">
        <Whitedisplay
          Whitedisplay={Actionbutton}
          headerProp={Actionbutton}
          Result={Result}
          setResult={setResult}
        />
      </div>
    </div>
  );
};
export default BottomFile;
