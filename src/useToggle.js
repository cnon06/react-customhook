import { useState } from "react";

// Custom hook to manage a boolean toggle state
function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
}

export default useToggle;
