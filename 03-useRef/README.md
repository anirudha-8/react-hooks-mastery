# useRef Hook in React

## What is `useRef`?

The `useRef` hook is a built-in React hook that allows you to persist values across renders **without causing re-renders**. It is commonly used for:

- **Accessing DOM elements** (e.g., focusing an input field)

- **Storing mutable values** that persist across renders

- **Maintaining references** to elements or previous values

## When to Use `useRef`?

- When you need to **reference a DOM element** (e.g., focus an input field on mount)

- When you want to **store values without causing re-renders**

- When you need to **preserve previous values** across renders

## Example: Auto-Focus Input Field

This example demonstrates how `useRef` can be used to focus an input field when the component mounts.

### `App.jsx`

```jsx
import { useEffect, useRef, useState } from "react";

export function App() {
    const [userInput, setUserInput] = useState("");
    const userInputRef = useRef(null);

    // Focus input field when component mounts
    useEffect(() => {
        userInputRef.current && userInputRef.current.focus();
    }, []);

    return (
        <div>
        <h2>useRef - Auto-Focus Input</h2>
        <input
            type="text"
            placeholder="Type something..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            ref={userInputRef} // Attaching ref to the input element
        />
        <p>Typed text: {userInput}</p>
        </div>
    );
}
```

---

### Summary

- ✅ useRef helps interact with DOM elements without causing re-renders.
- ✅ Useful for focusing input fields, storing previous values, or keeping references.
- ✅ Unlike useState, changing useRef does not trigger a re-render.
