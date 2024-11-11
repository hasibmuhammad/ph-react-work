import React from "react";
import { Toggle } from "./Toggle";

export const CompoundDemo = () => {
  return (
    <Toggle>
      <Toggle.Active>Toggle Active</Toggle.Active>
      <Toggle.Inactive>Toggle Inactive</Toggle.Inactive>
      <Toggle.ToggleButton />
    </Toggle>
  );
};
