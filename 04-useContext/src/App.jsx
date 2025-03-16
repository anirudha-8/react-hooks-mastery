import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import App.css;

function App() {
	const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
	return (
		<div className={`${isDarkTheme ? "dark-theme" : "light-thme"}`}>
			<h1>{isDarkTheme ? "Dark" : "Light"} Theme.</h1>
			<button onClick={toggleTheme}>
				Change to {isDarkTheme ? "Dark" : "Light"} theme.
			</button>
		</div>
	);
}
export default App;
