# useId Hook in React  

The `useId` hook in React is used to generate unique IDs for accessibility and form elements, ensuring there are no ID conflicts when rendering multiple instances of a component.

## 📌 When to Use `useId`  

- When you need a **unique** and **stable** ID for form elements.  
- When rendering multiple instances of a component that require distinct IDs.  
- Helps with **accessibility** by linking labels to form inputs correctly.  

---

## 🛠️ Example: Unique ID for Checkboxes  

### **1️⃣ Checkbox.jsx (Reusable Checkbox Component)**

```jsx
import { useId } from "react";

const Checkbox = () => {
    const checkBoxId = useId();
    
    return (
        <div>
            <input type="checkbox" id={checkBoxId} />
            <label htmlFor={checkBoxId}>Terms & Conditions</label>
        </div>
    );
};

export default Checkbox;
```

---

### **App.jsx (Parent Component)**

```jsx
import "./App.css";
import Checkbox from "./components/Checkbox";

function App() {
    return (
        <div>
            <Checkbox />
            <Checkbox />
        </div>
    );
}

export default App;
```

---

## 🎯 Explanation

- The `useId` hook generates a unique ID for each Checkbox component instance.

- The `<label>` element is linked to the `<input>` field using `htmlFor={checkBoxId}`.

- Even when multiple checkboxes are rendered, each one gets a unique ID, preventing accessibility issues.

---

## 🚀 Benefits of useId

✅ Ensures unique and stable IDs in component-based structures.

✅ Helps with accessibility by properly linking form inputs and labels.

✅ Prevents ID conflicts when rendering multiple instances of a component.
