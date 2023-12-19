import React, { useState } from "react";

const Logo = () => {
  const [first, setFirst] = useState(0);

  const [second, setSecond] = useState(0);

  const [third, setThird] = useState(0);

  const [result, setResult] = useState(0);

  return (
    <div className=" ">
      <div className="flex justify-around mt-[50px]">
        {/* first div */}
        <div className="">
          <div className="text-3xl font-bold">North</div>
          <button
            onClick={() => setFirst(first + 1)}
            className=" w-[50px] h-[50px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="currentColor"
              class="bi bi-bicycle"
              viewBox="0 0 16 16"
            >
              <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
            </svg>
          </button>
          <div>
            <input
              type="text"
              value={first}
              className="border  px-2  w-[50%] bg-orange-500 rounded-lg  text-center"
            />
          </div>
        </div>

        {/* second div */}

        <div className=" ">
          <div className="text-3xl font-bold">Turn left</div>
          <button
            onClick={() => setSecond(second + 1)}
            className=" w-[50px] h-[50px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-arrow-90deg-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"
              />
            </svg>
          </button>
          <div>
            <input
              type="text"
              value={second}
              className="border  w-[50%] bg-orange-500 rounded-lg  text-center"
            />
          </div>
        </div>

        {/* third div */}
        <div className=" ">
          <div className="text-3xl font-bold">Turn Right</div>
          <button
            onClick={() => setThird(third + 1)}
            className="w-[50%] h-[50%] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-arrow-90deg-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"
              />
            </svg>
          </button>
          <div>
            <input
              type="text"
              value={third}
              className="border w-[50%] bg-orange-500 rounded-lg text-center "
            />
          </div>
        </div>
      </div>

      {/* result */}

      <div className=" flex justify-center mt-[80px]">
        <button
          onClick={() => setResult(first + second + third)}
          className="border  w-[10%]  rounded-lg py-2  bg-orange-500"
        >
          Total
        </button>

        <input
          type="text"
          value={result}
          className="border w-[8%] bg-orange-500 ml-4 rounded text-center"
        />
      </div>
    </div>
  );
};
export default Logo;
