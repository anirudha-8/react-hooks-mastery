import { createContext } from "react";

export const ThemeContext = createContext();

export default ThemeProvider = ({ children }) => {
	return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
