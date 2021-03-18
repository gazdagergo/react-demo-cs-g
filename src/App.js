import { useState } from "react";
import "./styles.css";

// ES6
// Babel

const Greeting = ({ name }) => (
  <h1>
    Hello {name}
  </h1>
)


export default function App() {
  const [name, setName] = useState('Csaba')

  const handleClick = () => {
    setName('Gergő')
  }

  return (
    <div className="App">
      <Greeting name={name} />
      <p>{name}</p>
      <button
        onClick={handleClick}
        >Greet Gergő
      </button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
