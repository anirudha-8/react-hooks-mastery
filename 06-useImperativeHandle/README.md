# useImperativeHandle Hook in React  

The `useImperativeHandle` hook in React is used to customize the instance value that is exposed when using `ref` with a child component. It allows the parent component to call specific functions inside the child component, providing more control over its behavior.

## 📌 When to Use `useImperativeHandle`  

- When you need to expose specific functions from a child component to its parent.  
- When you want to control a child component's behavior without modifying its internal state directly.  
- Commonly used with `useRef` for managing focus, clearing input fields, or triggering animations.  

---

## 🛠️ Example: Custom Input Field  

### **1️⃣ FancyInput.jsx (Child Component)**

```jsx
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
            setInputValue("");
        },
    }));

    return (
        <div>
            <input
                type="text"
                placeholder="Type something..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                ref={inputRef}
            />
            <h1>You typed: <strong>{inputValue}</strong></h1>
        </div>
    );
};

export default FancyInput;
```

---

### **2️⃣ App.jsx (Parent Component)**

```jsx
import { useRef } from "react";
import "./App.css";
import FancyInput from "./components/FancyInput";

function App() {
    const fancyInputRef = useRef();

    return (
        <div>
            <FancyInput ref={fancyInputRef} />
            <button onClick={() => fancyInputRef.current.focus()}>FOCUS</button>
            <button onClick={() => fancyInputRef.current.clear()}>CLEAR</button>
        </div>
    );
}

export default App;

```

---

## 🎯 Explanation

- FancyInput is a controlled input component that exposes two functions (focus and clear) to the parent via useImperativeHandle.

- The parent component (App.jsx) uses useRef to store a reference to FancyInput.

- Clicking the "FOCUS" button sets the focus on the input field.

- Clicking the "CLEAR" button clears the input field and resets the state.

---

## 🚀 Benefits of useImperativeHandle

✅ Improves encapsulation by allowing selective exposure of functions.

✅ Avoids direct manipulation of child state from the parent.

✅ Useful for managing focus, animations, or DOM interactions efficiently.
