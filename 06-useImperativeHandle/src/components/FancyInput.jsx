import { useImperativeHandle, useRef, useState } from "react";

const FancyInput = ({ ref }) => {
	const [inputValue, setInputValue] = useState("");

	const inputRef = useRef(null);

	useImperativeHandle(ref, () => ({
		focus: () => {
			inputRef.current.focus();
		},
		clear: () => {
			inputRef.current.value = "";
		},
	}));

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
			<h1>
				You typed = <strong>{inputValue}</strong>
			</h1>
		</div>
	);
};
export default FancyInput;
