import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [click, setClick] = useState(false);
  const input = useRef(null);
  // const handleClick = () => {};

  useEffect(() => {
    console.log(input.current);
    console.log(click);
    input.current.focus();
  }, [click]);

  return (
    <div>
      <input type="text" ref={input} />
      <input type="text" />
      <button onClick={() => setClick(!click)}>Press</button>
    </div>
  );
}

export default App;
