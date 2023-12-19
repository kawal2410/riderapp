import React, { useState } from "react";

const Show = () => {
  const [first, setFirst] = useState(0);

  const [second, setSecond] = useState(0);

  const [third, setThird] = useState(0);
  return (
    // 1
    <div className="w-[500px] h-[400px] border-2 border-red-400 ml-[350px] mt-[100px]">
      {/* 2 */}
      <div className=" ">
        <h2 className="h-[50px] w-[300px] border-2 ml-14 mt-8 bg-zinc-200"></h2>
      </div>
      {/* 3 */}
      <div className=""></div>
    </div>
  );
};

export default Show;
