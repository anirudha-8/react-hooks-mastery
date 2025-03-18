import { useReducer } from "react";
import "./App.css";

const initialState = 0;

const countReducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		case "RESET":
			return 0;
		default:
			return state;
	}
};

function App() {
	const [count, dispatch] = useReducer(countReducer, initialState);
	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
			<button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
			<button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
		</div>
	);
}

export default App;
