import { useEffect, useRef, useState } from "react";

export function App() {
	const [userInput, setUserInput] = useState(null);
	const userInputRef = useRef(null);
	useEffect(() => {
		userInputRef.current && userInputRef.current.focus();
	}, []);
	return (
		<div>
			<input
				type="text"
				name="text"
				id="text"
				value={userInput}
				onChange={(e) => {
					setUserInput(e.target.value);
				}}
				ref={userInputRef}
			/>
			<p>Typed text: {userInput}</p>
		</div>
	);
}
