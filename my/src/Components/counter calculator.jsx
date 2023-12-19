import React, { useState } from "react";

const Calculator = () => {
  const [first, setfirst] = useState(0);

  const [second, setsecond] = useState(0);

  const [third, setthird] = useState(0);

  return (
    // 1
    <div className="w-[500px] h-[400px] border-2 border-orange-400 ml-[350px] mt-[100px]">
      {/* 2 */}

      <div className="w-[300px] h-[40px] border-2  ml-8 mt-16 bg-gray-100 shadow-slate-50">
        {third}
      </div>

      {/* 3 */}

      <div className="w-[300px] h-[200px] border-2  flex gap-x-8  ml-8 mt-8">
        {/* {second} */}
        {/* 1 */}
        <div className=" w-fit">
          <div className="px-[20px] py-[20px]  flex  items-center  w-[50px] h-[50px] border bg-red-500 mt-[20px]  ml-[40px]">
            {first}
          </div>

          <button
            className="w-10 h-10  border-2 ml-4  flex justify-center items-center  bg-orange-500 text-black"
            onClick={() => setfirst(first + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-up-fill"
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
          </button>

          <button
            className="w-10 h-10  border-2 flex justify-center items-center -mt-10  ml-20  bg-orange-500 text-black "
            onClick={() => setfirst(first - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
        </div>

        {/* 2 */}
        <div className="  ">
          <div className="w-[50px] h-[50px]   flex gap-x-8   bg-red-500  px-[20px] py-[10px]  mt-[20px]   border-orange-400  ml-[40px]">
            {second}
          </div>

          <button
            className="w-10 h-10  border-2 ml-4  flex justify-center items-center   bg-orange-500 text-black"
            onClick={() => setsecond(second + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-up-fill"
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
          </button>

          <button
            className="w-10 h-10  border-2 flex justify-center items-center -mt-10  ml-20  bg-orange-500 text-black "
            onClick={() => setsecond(second - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* 4 */}

      <div className=" ml-[400px] mt-[-300px] ">
        <div className=""></div>

        <div
          className="w-[40px] h-[40px] border-2 bg-red-500 text-white flex items-center justify-center "
          onClick={() => setthird()}
        >
          AC
        </div>

        <div
          className=" w-[40px] h-[40px]  font-bold  text-xl text-black  flex justify-center items-center border-2 mt-[20px] ml-[1px]  "
          onClick={() => setthird(first + second)}
        >
          +
        </div>

        <div
          className=" w-[40px] h-[40px]  font-bold  text-xl text-black  flex justify-center items-center border-2 mt-[20px] ml-[1px]"
          onClick={() => setthird(first - second)}
        >
          -
        </div>

        <div
          className=" w-[40px] h-[40px]  font-bold  text-xl text-black  flex justify-center items-center border-2 mt-[20px] ml-[1px]"
          onClick={() => setthird(first * second)}
        >
          *
        </div>

        <div
          className=" w-[40px] h-[40px]  font-bold  text-xl text-black  flex justify-center items-center border-2 mt-[20px] ml-[1px]"
          onClick={() => setthird(first / second)}
        >
          /
        </div>
      </div>
    </div>
  );
};

export default Calculator;
