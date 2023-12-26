import React from "react";

import { useAtom } from "jotai";

import { priceAtom } from "../../store.js/store";

const Jotaitutorial = () => {
  const [value, setValue] = useAtom(priceAtom);
  return (
    <div>
      <div className="" onClick={() => setValue(value + 1)}>
        click me
      </div>
    </div>
  );
};
export default Jotaitutorial;
