import { useState } from 'react';


export default function Demo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Clear
      </button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}
