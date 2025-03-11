import { useEffect, useState } from "react";

const Timer = () => {
	const [timer, setTimer] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((preTime) => preTime + 1);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return <div>Timer: {timer}</div>;
};
export default Timer;
