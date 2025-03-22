import { useRef } from "react";
import "./App.css";
import FancyInput from "./components/FancyInput";

function App() {
	const fancyInputRef = useRef();
	return (
		<div>
			<FancyInput ref={fancyInputRef} />
			<button onClick={() => fancyInputRef.current.focus()}>FOCUS</button>
			<button onClick={() => fancyInputRef.current.clear()}>CLEAR</button>
		</div>
	);
}

export default App;
