import "./App.css";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {
	const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
	return (
		<div className={`${isDarkTheme ? "dark-theme" : "light-theme"}`}>
			<h1>{isDarkTheme ? "Dark" : "Light"} Theme.</h1>
			<button onClick={toggleTheme}>
				Change to {isDarkTheme ? "Dark" : "Light"} theme.
			</button>
		</div>
	);
}
export default App;
