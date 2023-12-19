import React, { useState } from "react";
import ChildProp from "./childProp";

const ParentProp = () => {
  const [firstValue, setfirstValue] = useState(0);
  const [secondValue, setsecondValue] = useState(0);
  return (
    // main div
    <div className="w-[40%] h-[50vh] bg-blue-400 border-2">
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={firstValue}
          className="px-[30px] py-[5px] border border-red-400 ml-[30px] mt-[20px]"
        />
        <div className=" flex gap-4 mt-[20px]">
          <button
            onClick={() => setfirstValue(firstValue + 1)}
            className="border py-[5px] px-[5px]  bg-orange-500 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
              />
            </svg>
          </button>

          <button
            onClick={() => setfirstValue(firstValue - 1)}
            className="border py-[5px] px-[5px] bg-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          value={secondValue}
          className="px-[30px] py-[5px] border border-red-400 ml-[30px] mt-[20px]"
        />
        <div className=" flex gap-4 mt-[20px]">
          <button
            onClick={() => setsecondValue(secondValue + 1)}
            className="border py-[5px] px-[5px]  bg-orange-500 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
              />
            </svg>
          </button>

          <button
            onClick={() => setsecondValue(secondValue - 1)}
            className="border py-[5px] px-[5px] bg-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
              />
            </svg>
          </button>
        </div>
      </div>

      <div>
        <ChildProp firstValue={firstValue} secondValue={secondValue} />
      </div>
    </div>
  );
};

export default ParentProp;
