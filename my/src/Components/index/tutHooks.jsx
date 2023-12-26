import React from "react";

import { useAtom } from "jotai";

import { priceAtom } from "../../store.js/store";

const TestJotai = () => {
  const [value] = useAtom(priceAtom);

  return <div>{value}</div>;
};

export default TestJotai;
