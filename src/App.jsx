import { useState } from "react";
import Greeting from "./Greeting";
import "./styles.css";
export default function App() {
  const [name, setName] = useState("Csaba");
  const [hello, setHello] = useState(true);

  const handleChange = () => {
    setHello(!hello);
  };

  const handleClick = () => {
    setName("Gergő");
  };

  return (
    <div className="App">
      <Greeting name={name} hello={hello} onChange={handleChange} />
      <p>{name}</p>
      <button onClick={handleClick}>Greet Gergő</button>
      <button onClick={() => setHello(false)}>Say goodby</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
