import React, { useState } from "react";

const Button = ({ ...prop }) => {
  console.log("prop1", prop.prop);

  const add = (val) => {
    prop.prop.setResult(val);
  };
  return (
    <div>
      <div className="flex gap-4 ">
        {prop.prop.headerProp.map((item) => (
          <button
            onClick={() => add(item)}
            className={`${
              prop?.prop?.Result?.title === item?.title
                ? `bg-red-500`
                : `bg-blue-500`
            } border  py-[10px] px-[10px]   rounded-t-lg`}
          >
            {item.button}
          </button>
        ))}
      </div>

      {/* <ButtonFile button={result} /> */}
    </div>
  );
};
export default Button;
