import React, { useState } from "react";

const Todolistone = () => {
  const [input, setinput] = useState("");

  const [list, setlist] = useState([]);

  const Add = () => {
    const get = Math.random() * 10;
    setlist((prev) => [...prev, { title: input, id: get, completed: false }]);
    setinput("");
  };

  const Remove = (val) => {
    console.log("remove", val);
    const del = list.filter((elm) => elm?.id !== val?.id);
    // console.log("del", del);
    setlist(del);
  };

  return (
    // main div
    <div className="w-[30%] h-[60vh] border-2 ml-[350px] mt-[100px] ">
      <div className=" flex justify-center  font-bold  text-2xl mt-[30px] ">
        <h1>TO DO List</h1>
      </div>

      {/* input filed */}
      <div className="flex  justify-between">
        <div className="">
          <input
            onChange={(e) => setinput(e?.target?.value)}
            type="text"
            value={input}
            placeholder="Add your new todo"
            className="border w-[300px] h-[30px] px-[20px]  mt-[20px] ml-[20px]"
          />
        </div>

        <div>
          <button
            onClick={Add}
            className="py-[2px] px-[8px] mt-[18px]  mr-[35px] border bg-purple-500 text-white"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-[10px]  ">
        {list?.map((item) => (
          <li className=" border h-[40px] justify-between bg-gray-200  flex items-center mt-[10px] list-none">
            <div className=""> {item.title}</div>

            <div className="flex justify-end mt-[-20px]">
              <button
                onClick={() => Remove(item)}
                className=" border  mt-[20px] px-[5px] py-[5px] bg-red-400 text-white "
              >
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
    </div>
  );
};
export default Todolistone;
