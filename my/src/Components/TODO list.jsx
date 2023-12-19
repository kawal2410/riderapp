import React, { useState } from "react";

const TODO = () => {
  const [input, setInput] = useState("");
  // console.log("asdaa", input);

  const [list, setList] = useState([]);
  // console.log("kkkk", list);

  const Add = () => {
    const id = Math.random() * 10;
    setList((prev) => [...prev, { title: input, _id: id, completed: false }]);
    setInput("");
  };

  const Remove = (_id) => {
    setList(list.filter((item) => item._id !== _id._id));
    console.log("updatedlist", _id);
    // setList("");
  };
  const handleLine = (ojj) => {
    console.log("line", ojj);
    setList((v) =>
      v.map((item) => {
        if (item?.id === ojj?.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div className=" ">
      {/* input section */}
      <div className=" w-[60%] h-[20vh] bg-red-500 ">
        <div className=" text-white font-bold  text-xl flex justify-center pt-[20px] ">
          My To Do List
        </div>

        <div className="flex ml-[20px]  ">
          <input
            onChange={(e) => setInput(e?.target?.value)}
            type="text"
            value={input}
            placeholder="Tilte..."
            className="w-[70%] py-[7px] "
          />
          <button className="px-14 border  bg-gray-300 " onClick={Add}>
            Add
          </button>
        </div>

        <div className=" mt-10 ">
          {list?.map((item) => (
            <li
              onClick={() => handleLine(item)}
              className={`${
                item?.completed ? `line-through` : ``
              }border-0  mb-2 bg-blue-500 justify-between flex border-black`}
              // key={item._id}
            >
              <div className="">{item.title}</div>
              <div>
                <button
                  className="px-2 py-2  hover:text-white  hover:bg-red-500"
                  onClick={() => Remove(item)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TODO;
