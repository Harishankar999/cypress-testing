import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [counter, setCounter] = useState(0);

  const fetcData = () => {
    axios.get("http://localhost:8080/counter").then(({ data }) => {
      console.log("XLRI response from fetch", data);
      setCounter(data.value);
    });
  };

  const incrementHandler = () => {
    axios
      .post("http://localhost:8080/counter", { value: counter + 1 })
      .then((res) => {
        setCounter(res.data.value);
      });
  };

  useEffect(() => {
    console.log("XLRI Going to fetch");
    fetcData();
  }, []);
  return (
    <div className="App">
      <h2>Count is {counter}</h2>
      <button className="Inc_btn" onClick={incrementHandler}>
        Increment
      </button>
      {/* <button className="Dec_btn" onClick={() => setCounter(counter - 1)}>
        Decrement
      </button> */}
    </div>
  );
}

export default App;
