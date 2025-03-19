# React Hooks Mastery

Welcome to my **React Hooks Journey** repository! 🚀 This repository documents my learning process as I explore and master React Hooks. It includes explanations, code examples, and best practices for each hook.

## 📌 What You’ll Find in This Repository

- **Detailed explanations** of each React Hook.

- **Code examples** demonstrating practical use cases.

- **Comparisons** between similar hooks.

- **Performance optimization techniques** using hooks.

- **Custom Hooks** to solve real-world problems.

## 📖 Hooks I Have Learned

### 🔹 Fundamental Hooks

- [`useState`](./01-useState/) – Manage state in functional components.

- [`useEffect`](./02-useEffect/) – Handle side effects like fetching data or DOM updates.

- [`useRef`](./useRef) – Access DOM elements or persist values without re-rendering.

### 🔹 Advanced Hooks

- [`useContext`](./useContext) – Manage global state without prop drilling.

- [`useReducer`](./useReducer) – Handle complex state logic as an alternative to `useState`.

- [`useImperativeHandle`](./useImperativeHandle) – Expose methods to parent components.

- [`useId`](./useId) – Generate unique IDs for accessibility and forms.

> NOTE - We were not going to study / discuss about `"useMemo"` and `"useCallback"` as in REACT-19 it can handles this memoization stuff right out of the box

🔰 **JUST TO KNOW ABOUT `useMemo` & `useCallback`**

- [`useMemo`](./useMemo) – Optimize performance by memoizing values.

- [`useCallback`](./useMemo-useCallback) – Optimize function references to prevent unnecessary re-renders.

### 🔹 React 19 Hooks

- [`useTransition`](./useTransition) – Manage transitions in UI state changes.

- [`useDeferredValue`](./useDeferredValue) – Improve performance by deferring updates.

- [`useActionState`](./useActionState) – Manage action states (new in React 19).

- [`useFormStatus`](./useFormStatus) – Track form submission status.

- [`useOptimistic`](./useOptimistic) – Implement optimistic UI updates.

### 🔹 Custom Hooks

- [`Custom Hooks`](./Custom-Hooks) – Build reusable logic for better code organization.

## 🚀 How to Use This Repository

1. Clone the repo:

    ```sh
        git clone https://github.com/anirudha-8/react-hooks-mastery.git
    ```

2. Navigate to a specific hook’s directory to see examples:

    ```sh
        cd react-hooks-mastery/useState
    ```

3. Run the code in a React project:

    ```sh
        npm run dev
    ```

## 🌱 Why I Created This Repository

- To **document** my learning journey in React Hooks.

- To **help others** understand React Hooks with practical examples.

- To **build a strong foundation** in modern React development.

Feel free to explore, fork, or contribute! 😊 Happy coding! 🎉
