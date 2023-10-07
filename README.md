A custom hook in React is a function that encapsulates reusable logic for your components. It typically starts with the word "use" to indicate that it's a hook. Here's an example of a simple custom hook that manages a boolean toggle state:

jsx
Copy code
import { useState } from 'react';

// Custom hook to manage a boolean toggle state
function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
}

export default useToggle;
In this example, the useToggle hook takes an initial state as an optional argument (defaulting to false) and returns an array containing the current state value and a function to toggle the state.

You can use this custom hook in your components like this:

jsx
Copy code
import React from 'react';
import useToggle from './useToggle';

function MyComponent() {
  const [isToggled, toggle] = useToggle();

  return (
    <div>
      <p>Toggle State: {isToggled ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default MyComponent;
Now, when you use useToggle in your components, it encapsulates the logic for managing the toggle state, making your code cleaner and more reusable.
