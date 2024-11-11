import React, { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export function Toggle({ children }) {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => setIsActive((prev) => !prev);

  return (
    <ToggleContext.Provider value={{ isActive, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

Toggle.Active = function Active({ children }) {
  const { isActive } = useContext(ToggleContext);
  return isActive ? <div>{children}</div> : null;
};

Toggle.Inactive = function Inactive({ children }) {
  const { isActive } = useContext(ToggleContext);
  return !isActive ? <div>{children}</div> : null;
};

Toggle.ToggleButton = function ToggleButton() {
  const { toggle } = useContext(ToggleContext);
  return <button onClick={toggle}>Toggle</button>;
};
