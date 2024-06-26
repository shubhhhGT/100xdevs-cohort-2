import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState();
  // Your solution starts here
  const expensiveValue = useMemo(() => {
    // adding logs to check if it is getting rendered or not
    console.log("use memo is renedered");
    let ans = 1;
    if (input === 0) return 1;
    for (let i = 2; i <= input; i++) {
      ans *= i;
    }
    return ans;
  }, [input]);
  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
