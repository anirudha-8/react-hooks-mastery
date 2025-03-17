# 📌 useContext Hook – Theme Toggle Example

## 🔹 What is `useContext`?

The `useContext` hook allows you to share state or values between components **without manually passing props** at every level. It helps manage **global state** efficiently.

## 🔹 When to Use?

- To **avoid prop drilling** (passing props through multiple levels).

- When you need **global state management** but don't want to use external libraries like Redux.

- Ideal for themes, authentication, language settings, etc.

---

## 🛠️ Example: Theme Toggle using `useContext`

This example demonstrates a **light/dark theme toggle** using `useContext`.

### **1️⃣ Create the Context** (`ThemeContext.jsx`)

```jsx
import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
 const [isDarkTheme, setIsDarkTheme] = useState(false);

 const toggleTheme = () => setIsDarkTheme((prev) => !prev);

 return (
  <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
   {children}
  </ThemeContext.Provider>
 );
};

export default ThemeContext;
```

### ✅ Purpose

- Creates a ThemeContext.

- Provides the isDarkTheme state and toggleTheme function globally.

- Wraps the app with ThemeProvider to allow access to the theme state.

---

### 2️⃣ **Consume the Context in** (`App.jsx`)

```jsx
import "./App.css";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {
 const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
 return (
  <div className={`${isDarkTheme ? "dark-theme" : "light-theme"}`}>
   <h1>{isDarkTheme ? "Dark" : "Light"} Theme</h1>
   <button onClick={toggleTheme}>
    Change to {isDarkTheme ? "Dark" : "Light"} theme
   </button>
  </div>
 );
}
export default App;
```

### ✅ Purpose of `useContext()`

- Uses useContext(ThemeContext) to access isDarkTheme and toggleTheme.

- Updates the theme dynamically based on the state.

---

## 🚀 How It Works

- 1️⃣ ThemeProvider provides the theme state globally.

- 2️⃣ useContext accesses the theme state inside App.jsx.

- 3️⃣ Clicking the button toggles the theme between light and dark.

## 🎯 Key Takeaways

- ✔ useContext makes state accessible globally without prop drilling.

- ✔ Perfect for themes, authentication, or app-wide settings.

- ✔ Simple yet powerful alternative to state management libraries.
