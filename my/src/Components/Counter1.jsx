import React, { useState } from "react";

const Counter1 = () => {
  const [Count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(20);
  const [minCount, setMixCount] = useState(0);

  function increase() {
    if (Count < maxCount) {
      setMaxCount(Count + 1);
    }
  }

  function decrease() {
    if (Count > minCount) {
      setMixCount(Count - 1);
    }
  }

  const resetSet = () => setCount(0);
  return (
    <div className=" border-2 w-[500px] h-[300px] mt-[32px] mx-[450px] ">
      <div className="text-center text-xl  font-semibold pt-4 leading-[50px]">
        <h2>counter app</h2>
        <div className="">
          <h2>Count{Count}</h2>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="  ">
          <div className="">
            <button
              className="bg-red-500  border-2 w-[50px] h-[45px]  pt-[-2px]   mt-10 ml-[20px] text-white font-bold text-2xl"
              onClick={increase}
            >
              +
            </button>
          </div>
        </div>

        <div>
          <button
            className="bg-green-500  border-2 w-[50px] h-[45px]  pt-[-2px]  mt-10  ml-94  text-white font-bold text-2xl "
            onClick={decrease}
          >
            -
          </button>
        </div>
      </div>

      <div>
        <button
          className="bg-red-500 w-[70px] h-[50px] pt-2  mt-30 ml-56 text-white font-semibold text-lg"
          onClick={resetSet}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter1;
