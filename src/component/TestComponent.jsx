import { useState } from "react";

function TestComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newCount = count + 1;
    
    // newCount değişkenini kullan!
    console.log("içinde count: ", newCount);
    setCount(newCount);
  };

  console.log("count: ", count);
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <div>{count}</div>
    </div>
  );
}

export default TestComponent;
