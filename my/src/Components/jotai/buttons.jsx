import { useAtom } from "jotai";
import React from "react";
import { Buttontabs } from "../../store.js/store";

const Actionbutton = () => {
  const [, setFirst] = useAtom(Buttontabs);
  // console.log("first", wow);

  const Buttons = [
    { tilte: "hello" },
    { tilte: "how are you ?" },
    { tilte: "have a good day " },
    { tilte: " bye" },
  ];
  return (
    <div>
      <div className=" flex gap-4 bg-red-500">
        {Buttons?.map((val) => (
          <button
            onClick={() => setFirst(val?.tilte)}
            className="px-[40px] py-[8px] bg-pink-600 rounded-xl text-white  hover:bg-blue-500  "
          >
            {val?.tilte}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Actionbutton;
