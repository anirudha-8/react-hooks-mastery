import { useRef } from "react";
import "./App.css";
import FancyInput from "./components/FancyInput";

function App() {
	const fancyInputRef = useRef();
	return (
		<div>
			<FancyInput ref={fancyInputRef} />
		</div>
	);
}

export default App;
