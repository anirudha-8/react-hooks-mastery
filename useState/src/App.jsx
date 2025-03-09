import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);
	const [userInput, setUserInput] = useState("");

	return (
		<>
			<div>
				<h1>Click to Increment or Decrement the counter</h1>
				<p>Counter: {count}</p>
				<button onClick={() => setCount(count + 1)}>Increment</button>
				<button onClick={() => setCount(count - 1)}>Decrement</button>
			</div>
			<hr />
			<div>
				<h1>Controlled Input Example</h1>
				<input
					type="text"
					placeholder="Enter something..."
					value={userInput}
					onChange={(e) => {
						setUserInput(e.target.value);
					}}
				/>
				<p>
					Your text: <strong>{userInput}</strong>
				</p>
			</div>
		</>
	);
}

export default App;
