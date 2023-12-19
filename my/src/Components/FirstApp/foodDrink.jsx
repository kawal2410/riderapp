import React, { useEffect, useState } from "react";

const Fooddrink = () => {
  const [count1, setCount1] = useState(" ");

  const [list, setList] = useState([]);

  const [total, setTotal] = useState([]);

  const [foodcount, setFoodCount] = useState(0);

  const [drinkcount, setDrinkCount] = useState(0);

  const [result, setResult] = useState(0);

  const add = () => {
    console.log("add", add);
    const get = Math.random() * 10;
    setList((prev) => [...prev, { title: count1, id: get }]);
    setCount1("");
  };

  const remove = (val) => {
    console.log("remove", remove);
    const del = list.filter((del) => del?.id !== val?.id);
    setList(del);
    console.log("del", del);
  };

  const add1 = () => {
    console.log("add1", add);
    const drink = Math.random() * 10;
    setTotal((prev) => [...prev, { title: count1, id: drink }]);
    setCount1("");
  };

  const remove2 = (val) => {
    console.log("remove2", remove2);
    const rem = list.filter((del) => del?.id !== val?.id);
    setTotal(rem);
    console.log("rem", rem);
  };

  const data = document.title;
  console.log("data", data);

  useEffect(() => {
    setFoodCount(list.length);
  }, [list]);

  useEffect(() => {
    setDrinkCount(total.length);
  }, [total]);

  useEffect(() => {
    setResult(foodcount + drinkcount);
  }, [foodcount, drinkcount]);

  return (
    <div className=" mt-[80px]">
      {/* 1 */}
      <div className="border bg-black h-[10vh] flex items-center justify-center">
        <input
          onChange={(e) => setCount1(e?.target?.value)}
          type="text"
          value={count1}
          placeholder="Enter an item..."
          className="w-[20%] border   "
        />
        <button
          onClick={add1}
          className="border bg-orange-500 rounded-lg px-6 ml-4 font-bold"
        >
          Food
        </button>

        <button
          onClick={add}
          className="border bg-orange-500  rounded-lg px-6 ml-4 font-bold"
        >
          Drink
        </button>
      </div>

      {/* 1st list */}
      <div className=" border border-black bg-black w-[30%] h-[50vh] mt-[80px] ml-[100px]   overflow-y-scroll ">
        <div className="text-white border bg-orange-500 flex justify-center">
          Food Counter{drinkcount}
        </div>
        {total?.map((item) => (
          <li className="justify between  mt-[10px] flex items-center bg-orange-500   border gap-[60%] ">
            <div className="ml-[20px] ">{item.title}</div>
            <div className=" flex items-center">
              <button onClick={() => remove2(item)} className=" ml-[40px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </div>

      {/* 2 */}

      <div className=" border border-black bg-black w-[30%] h-[50vh] mt-[-320px] ml-[60%]  overflow-y-scroll ">
        <div className="text-white border bg-orange-500 flex justify-center">
          Drink Counter{foodcount}
        </div>
        {list?.map((arr) => (
          <li className="justify between  mt-[10px] flex items-center bg-orange-500   border gap-[60%] 	">
            <div className="ml-[20px]  ">{arr.title}</div>
            <div className=" flex items-center">
              <button onClick={() => remove(arr)} className="  ml-[40px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </div>

      {/* 3 */}

      <div className=" ">
        <div className="text-black text-5xl font-bold flex flex-col gap-2 justify-center items-center  ">
          TOTAL
          <input
            type="text"
            value={result}
            className="flex  items-center justify-center   w-[10%] border bg-orange-500 "
          />
        </div>
      </div>
    </div>
  );
};
export default Fooddrink;
