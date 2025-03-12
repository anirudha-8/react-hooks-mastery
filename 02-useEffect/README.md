# useEffect Hook in React

## 📌 What is `useEffect`?

The `useEffect` hook is used to handle **side effects** in React functional components. Side effects include fetching data, subscribing to events, updating the DOM, or running timers.

## 🎯 When to Use `useEffect`?

- Fetching data from an API.

- Subscribing to or cleaning up event listeners.

- Running timers or intervals.

- Updating the document title or interacting with browser APIs.

## 📝 Syntax

```jsx
useEffect(() => {
    // Side effect logic here
    return () => {
        // Cleanup (optional)
    };
}, [dependencies]);
```

- **Callback function** → Contains the side effect logic.

- **Cleanup function (optional)** → Runs when the component unmounts or before re-executing the effect.

- **Dependency array** → Controls when the effect runs.

  - `[]` → Runs **once** (on mount).

  - `[someState]` → Runs when `someState` changes.

  - No dependencies → Runs on **every render**.

---

## 🚀 Examples

Here are two practical examples demonstrating `useEffect`.

### 1️⃣ Timer Example (Using `setInterval`)

This component starts a timer when mounted and increments every second. The effect cleans up the interval when the component unmounts.

#### **Code (Timer.jsx)**

```jsx
import { useEffect, useState } from "react";

const Timer = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTime) => prevTime + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return <div>Timer: {timer}</div>;
};

export default Timer;
```

#### **Explanation:**

- **Starts a timer** when the component mounts.

- **Updates `timer` state** every second.

- **Cleans up the interval** when the component unmounts.

---

### 2️⃣ Fetching API Data (Fetching Posts from JSONPlaceholder)

This component fetches a list of posts when the component mounts.

#### **Code (Post.jsx)**

```jsx
import { useEffect, useState } from "react";

const Post = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h1>Post Title Information</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Post;
```

#### **Explanation:**

- **Fetches data from an API** when the component mounts.

- **Updates the `data` state** with the fetched results.

- **Renders a list of post titles.**

---

## 📂 Project Setup & Running the Code

1. Navigate to the `useEffect` folder.

   ```sh
   cd useEffect
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

- **`useEffect` helps manage side effects in functional components.**

- **The dependency array controls when the effect runs.**

- **Cleanup function prevents memory leaks (especially for timers and event listeners).**

Happy coding! 🎉
