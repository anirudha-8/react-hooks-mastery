import { useId } from "react";

const Checkbox = () => {
	const checkBoxId = useId();
	return (
		<div>
			<input type="checkbox" name="check" id={checkBoxId} />
			<label htmlFor={checkBoxId}>Terms & Conditions</label>
		</div>
	);
};
export default Checkbox;
