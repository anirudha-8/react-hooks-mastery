# 🚀 `useReducer` Hook – Counter Example

## 🔹 What is `useReducer`?

The `useReducer` hook is an **alternative to `useState`** for managing complex state logic in React. It is **useful when state transitions depend on the previous state**.

## 🔹 When to Use?

- When state updates involve **multiple conditions** (like a switch case).

- If the next state depends on the **previous state**.

- When the logic for updating state is **separate from the UI**.

- Suitable for **counters, form handling, and complex state updates**.

---

## 🛠️ Example: Counter using `useReducer`

### **1️⃣ Define Initial State and Reducer Function**

```jsx
const initialState = 0;

const countReducer = (state, action) => {
    switch (action.type) {
    case "INCREMENT":
        return state + 1;
    case "DECREMENT":
        return state - 1;
    case "RESET":
        return 0;
    default:
        return state;
 }
};
```

#### ✅ Purpose

- initialState: The starting value of the state (0).

- countReducer: A function that handles state transitions based on the action.type.

- Uses a switch statement to define logic for "INCREMENT", "DECREMENT", and "RESET" actions.

---

### **2️⃣ Use useReducer in** (`App.jsx`)

```jsx
import { useReducer } from "react";
import "./App.css";

function App() {
    const [count, dispatch] = useReducer(countReducer, initialState);

 return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
        <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
 );
}

export default App;
```

#### ✅ How It Works

- Calls useReducer(countReducer, initialState), which returns count (state) and dispatch.

- dispatch({ type: "ACTION_TYPE" }) updates the state based on the action type.

- The UI re-renders when the state changes.

---

## 🎯 Key Takeaways

✔ useReducer is useful for managing complex state with multiple actions.

✔ Helps separate logic from UI, making the code more maintainable.

✔ A great alternative to useState for state-dependent updates.
