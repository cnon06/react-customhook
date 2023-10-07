import React from "react";
import useToggle from "./useToggle";

function MyComponent() {
  const [isToggled, toggle] = useToggle();

  return (
    <div>
      <p>Toggle State: {isToggled ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default MyComponent;
