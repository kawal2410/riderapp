import React, { useState } from "react";

const Counter = () => {
  const [count1, setcount1] = useState();

  const [count2, setcount2] = useState(0);

  const [count3, setcount3] = useState(0);

  // const [result, setresult] = useState(0);
  return (
    // 1
    <div className="w-[30%] h-[50vh] border border-red-400 bg-black  mx-64 my-36">
      {/* 2  */}
      <div className="ml-14  mt-5">
        <input
          type="text"
          value={count1}
          className="border-black border  p-4 px-8  pt-0 "
          onChange={(e) => setcount1(+e?.target?.value)}
        />
        {/* console.log(count1); */}
      </div>
      {/* 3 */}

      <div className=" flex justify-center gap-14 mt-8">
        {/* 1 */}
        <div className=" ">
          <div className="p-4  w-fit bg-red-500  ">{count2}</div>
          <button
            className="mt-4 p-4  py-2 bg-orange-500 "
            onClick={() => {
              setcount2(count1);
              setcount1(0);
            }}
          >
            get
          </button>
        </div>

        {/* 2 */}
        <div className="">
          <div className="p-4  w-fit bg-red-500">{count3}</div>
          <button
            className="mt-4 p-4  py-2 bg-orange-500 "
            onClick={() => {
              setcount3(count1);
              setcount1(0);
            }}
          >
            get
          </button>
        </div>
      </div>

      {/* 4 */}

      <div className="flex justify-center gap-4 mt-4">
        <button
          className="bg-cyan-500 px-4  py-3 rounded"
          onClick={() => setcount1(count2 + count3)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </button>
        <button
          className="bg-cyan-500 px-4  py-3 rounded"
          onClick={() => setcount1(count2 - count3)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-dash"
            viewBox="0 0 16 16"
          >
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
          </svg>
        </button>
        <button
          className="bg-cyan-500 px-4  py-3 rounded"
          onClick={() => setcount1(count2 * count3)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-asterisk"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1" />
          </svg>
        </button>
        <button
          className="bg-cyan-500 px-4  py-3 rounded"
          onClick={() => setcount1(count2 / count3)}
        >
          /
        </button>
      </div>
    </div>
  );
};
export default Counter;
