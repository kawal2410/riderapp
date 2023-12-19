import React, { useState } from "react";

function Good() {
  const [first, setFirst] = useState(0);

  const [second, setSecond] = useState(0);

  const [third, setThird] = useState(0);

  return (
    <div className=" w-[600px] h-[400px] border-2  mt-20 ml-60   bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800  ">
      {/* 1 */}
      <div className="  bg-gree   ">
        <div className=" w-[200px] text-white h-[30px] border-2 mt-10 ml-10">
          {first}
        </div>
        <div className="flex mt-4 ml-4">
          <button
            className="w-20 h-10  border-2 ml-4  flex justify-center items-center text-white"
            onClick={() => setFirst(first + 1)}
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
            className="w-20 h-10  border-2 flex justify-center items-center -mt-0  ml-10 text-white "
            onClick={() => setFirst(first - 1)}
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
      {/* 2 */}

      <div className="">
        <h1 className=" w-[200px] h-[30px] text-white border-2 mt-[-90px] ml-[350px]">
          {second}
        </h1>

        <div
          className="w-20 h-10  border-2 flex justify-center items-center mt-5 ml-[350px] text-white "
          onClick={() => setSecond(second + 1)}
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
        </div>
        <div
          className="w-20 h-10   flex justify-center items-center border-2 mt-[-40px]  ml-[480px] text-white "
          onClick={() => setSecond(second - 1)}
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
        </div>
      </div>

      {/* 3 */}
      <div className=" ">
        <h1 className=" text-white w-[200px] h-[30px] border-2 mt-[90px] ml-[200px]">
          {third}
        </h1>

        <div className="flex mt-4 flex text-center items-center ">
          <div
            className=" w-20 h-10  font-bold  text-xl text-white  border-2 ml-[100px]  "
            onClick={() => setThird(first + second)}
          >
            +
          </div>

          <div
            className=" w-20 h-10   font-bold  text-xl  text-white   border-2 ml-[20px]"
            onClick={() => setThird(first - second)}
          >
            -
          </div>

          <div
            className=" w-20 h-10    font-bold  text-xl  text-white  pt-2  border-2  ml-[20px]"
            onClick={() => setThird(first * second)}
          >
            *
          </div>

          <div
            className=" w-20 h-10   font-bold  text-xl  text-white  border-2 ml-[20px] "
            onClick={() => setThird(first / second)}
          >
            /
          </div>
        </div>
      </div>
    </div>
  );
}

export default Good;
