import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1>Click to Increment or Decrement the counter</h1>
			<p>Counter: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
		</div>
	);
}

export default App;
