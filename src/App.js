import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [press, setPress] = useState(false);
  const [press2, setPress2] = useState(false);

  // when the component render firstly

  useEffect(() => {
    console.log("A");
  }, []);

  // it works with any render
  useEffect(() => {
    console.log("B");
  });

  // it works when only press2 state is set
  useEffect(() => {
    console.log("C");
  }, [press2]);

  const handleClick = () => {
    setPress(!press);
    console.log(press);
  };

  const handleClick2 = () => {
    setPress2(!press2);
    console.log(press2);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Press</button>
      <button onClick={handleClick2}>Press</button>
    </div>
  );
}

export default App;
