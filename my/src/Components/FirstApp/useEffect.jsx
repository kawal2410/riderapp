import React, { useEffect, useState } from "react";

const EffectTutorial = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  const data = document.title;
  console.log("data", data);

  useEffect(() => {
    document.title = `show count ${first + second}`;
  }, [first, second]);
  return (
    <div>
      <div>{first}</div>
      <div>{second}</div>

      <button
        onClick={() => setFirst(first + 1)}
        className="border  py-2 px-2 bg-red-400"
      >
        click me first
      </button>

      <button
        onClick={() => setSecond(second + 1)}
        className="border py-2 px-2  bg-green-400"
      >
        click me first
      </button>
    </div>
  );
};
export default EffectTutorial;
