import { useEffect, useRef, useState } from "react";

const FancyInput = () => {
	const [inputValue, setInputValue] = useState("");

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current && inputRef.current.focus();
	}, []);

	return (
		<div>
			<input
				type="text"
				name="text"
				id="text"
				placeholder="type something..."
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				ref={inputRef}
			/>
			<p>You typed = {inputValue}</p>
		</div>
	);
};
export default FancyInput;
