import { useState } from "react";

const Greeting = ({ name, hello, onChange }) => {
  return (
    <>
      <input type="checkbox" onChange={onChange} checked={hello} />
      <h1>
        {hello ? "Hello" : "Goodby"} {name}
      </h1>
    </>
  );
};

export default Greeting;
