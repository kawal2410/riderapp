import React, { useEffect, useState } from "react";

const Rider = () => {
  const [first, setFirst] = useState(0);

  function increase() {
    if (first < setFirst) {
      setFirst(first + 1);
    }
  }

  const data = document.title;
  console.log("data", data);

  useEffect(() => {
    document.title = `Change rider ${first + 1}`;
  }, [first]);

  return (
    <div className="border bg-black text-white">
      <div className="text-4xl font-extrabold	">Heads Towards North</div>
      <div className="flex items-center justify-end gap-8 mt-[-40px] ">
        <div className="font-extrabold items-center text-2xl">Kawal</div>
        <div className="border w-[9%] px-2 py-2 bg-orange-500 text-orange font-bold mr-4">
          <button onClick={() => setFirst(first + 1)}>Change Rider</button>
        </div>
        <div className="mr-4">
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
        </div>
      </div>
    </div>
  );
};
export default Rider;
