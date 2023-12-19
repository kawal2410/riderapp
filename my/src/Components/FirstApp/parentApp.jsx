import React, { useState } from "react";
import Logo from "./rightLeft";
import Rider from "./rider";
import Fooddrink from "./foodDrink";

const ParentApp = () => {
  return (
    <div>
      <Rider />
      <Logo />
      <Fooddrink />
    </div>
  );
};

export default ParentApp;
