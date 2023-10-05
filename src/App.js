import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(700);
  const [rate, setRate] = useState(0);
  const [fromCur, setFromCur] = useState("USD");
  const [toCur, setToCur] = useState("USD");
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
    );

    const data = await res.json();
    const rates = data.rates["USD"];
    // console.log(data.rates["USD"]);
    setRate(Number(rates));
    setIsLoading(false);
  };

  useEffect(() => {
    if (fromCur === toCur) return setRate(amount);
    getData();
  }, [amount, fromCur, toCur]);

  const handleCalculate = async (e) => {
    setAmount(e);
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => handleCalculate(e.target.value)}
        // disabled={isLoading}
      />
      from
      <select
        name=""
        id=""
        onChange={(e) => setFromCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      to
      <select
        name=""
        id=""
        onChange={(e) => setToCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <h5>
        from {fromCur} to {toCur} {rate}
      </h5>
    </div>
  );
}

export default App;
