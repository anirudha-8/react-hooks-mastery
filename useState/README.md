# useState Hook in React

## 📌 What is `useState`?

The `useState` hook is a fundamental React Hook that allows functional components to manage state. It returns an array with two values:

1. **Current state value**

2. **Setter function** to update the state

State changes using `useState` trigger a re-render of the component, making it useful for dynamic updates like user interactions, form handling, and UI state management.

## 🎯 When to Use `useState`?

- Managing simple state variables like numbers, strings, and booleans.

- Handling form inputs (controlled components).

- Keeping track of user interactions (like button clicks or toggles).

- Storing UI-related state that doesn’t need global management.

## 📝 Syntax

```jsx
const [state, setState] = useState(initialValue);
```

- `state` → The current state value.

- `setState` → Function to update the state.

- `initialValue` → The starting value of the state.

---

## 🚀 Examples

Here are two practical examples demonstrating the use of `useState`.

### 1️⃣ Counter Example

A simple counter that increments and decrements when buttons are clicked.

#### **Code (App.jsx)**

```jsx
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Click to Increment or Decrement the counter</h1>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default App;
```

#### **Explanation:**

- `count` stores the current counter value.

- `setCount` updates the value when clicking **Increment** or **Decrement**.

- The component re-renders whenever `count` changes.

---

### 2️⃣ Controlled Input Example

A controlled input field that updates state as the user types.

#### **Code (App.jsx)**

```jsx
import { useState } from "react";

function App() {
    const [userInput, setUserInput] = useState("");

    return (
        <div>
            <h1>Controlled Input Example</h1>
            <input
                type="text"
                placeholder="Enter something..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <p>
                Your text: <strong>{userInput}</strong>
            </p>
        </div>
    );
}

export default App;
```

#### **Explanation:**

- `userInput` stores the current value of the text input.

- `setUserInput` updates the state whenever the user types.

- The `<input>` element’s `value` is controlled by React state.

---

## 📂 Project Setup & Running the Code

1. Navigate to the `useState` folder.

    ```sh
        cd useState
    ```

2. Install dependencies (if not installed already).

    ```sh
        npm install
    ```

3. Start the development server.

    ```sh
        npm run dev
    ```

Now, open `http://localhost:5173/` in your browser to see the examples in action! 🚀

---

## 🎯 Key Takeaways

- **`useState` helps manage component-level state.**

- **State updates trigger re-renders.**

- **Can be used for various interactive UI elements.**

Happy coding! 🎉
