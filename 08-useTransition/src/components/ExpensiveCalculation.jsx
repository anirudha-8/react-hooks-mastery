import { useState } from "react";

const ExpensiveCalculation = () => {
	const [input, setInput] = useState("");

	const [results, setResults] = useState([]);

	// ================ Simulate Expensive Calculation ================ //
	const runExpensiveCalculation = (value) => {
		const calculatedResults = [];

		for (let index = 0; index < 999999999; index++) {}

		// Simulate heavy work by running many calculations
		for (let i = 0; i <= 20000; i++) {
			const result = i * parseInt(value || "0", 10);
			if (i % 1000 === 0) {
				calculatedResults.push(result);
			}
		}
		return calculatedResults;
	};

	const handleInputChange = (e) => {
		// update the input immediately (high-priority)
		const newValue = e.target.value;
		setInput(newValue);

		// defer the expensive calculation (low-priority)
		const calculatedResults = runExpensiveCalculation(newValue);
		setResults(calculatedResults);
	};

	return (
		<div>
			<h1>"useTransition" hook demo</h1>
			<div>
				<label htmlFor="userInput">Enter a number:</label>
				<input
					type="text"
					name="number"
					id="userInput"
					value={input}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<h2>Results...</h2>
				<ul>
					{results.map((result, index) => (
						<li key={index}>
							{index * 1000} x {input} = {result}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
export default ExpensiveCalculation;
