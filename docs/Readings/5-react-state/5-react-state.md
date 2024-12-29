---
title: Lecture 5 — React State
metadata:
  - Can be provided
  - as: objects
    or: arrays
---

## Objective:

Learn state management techniques in React, including the use of hooks such as `useState` and `useEffect`, conditional rendering, list rendering, and updating arrays and objects in state. By the end, you will build a simple interactive To-do list with all data stored in the local state.

### Duration:

idk

---

## 5.1: Introduction to React State and `useState`

### Learning Goals:

- Understand the concept of state in React
- Learn how to use the `useState` hook to manage state

### Outline:

1. **Understanding State in React**

   - What is state?
   - Difference between props and state

2. **Using the `useState` Hook**
   - Syntax and usage
   - Initial state and updating state

### Activities:

- Create a simple counter using `useState`
- Modify the counter to increase and decrease the count

### Resources:

- [React State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)

---

## 5.2: Conditional Rendering with `useState`

### Learning Goals:

- Learn how to conditionally render components based on state

### Outline:

1. **Conditional Rendering**

   - Using conditional statements in JSX
   - Ternary operators and logical &&

2. **Examples of Conditional Rendering**
   - Show/hide elements based on state
   - Render different components based on state

### Activities:

- Create a toggle button that shows/hides a message
- Create a login/logout component that renders different content based on login state

### Resources:

- [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)

---

## 5.3: Rendering Lists

### Learning Goals:

- Understand how to render lists in React
- Learn the importance of keys in list rendering

### Outline:

1. **Rendering Lists**

   - Mapping over arrays to create elements
   - Using the `key` prop

2. **Common Use Cases**
   - Displaying a list of items
   - Rendering components based on array data

### Activities:

- Create a component that renders a list of names
- Enhance the component to render a list of objects with properties

### Resources:

- [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

---

## 5.4: Updating Arrays and Objects in State

### Learning Goals:

- Learn how to update arrays and objects in state
- Understand immutability and why it’s important in React

### Outline:

1. **Updating Arrays in State**

   - Adding, removing, and updating items in an array
   - Using the spread operator

2. **Updating Objects in State**
   - Updating nested properties
   - Merging state updates

### Activities:

- Create a component that allows adding and removing items from a list
- Create a component that updates user profile information

### Resources:

- [State Updates](https://reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props)

---

## 5.5: Introduction to `useEffect`

### Learning Goals:

- Understand the purpose of the `useEffect` hook
- Learn how to perform side effects in functional components

### Outline:

1. **Using the `useEffect` Hook**

   - Syntax and basic usage
   - Cleaning up side effects

2. **Common Use Cases**
   - Fetching data from an API
   - Subscribing to event listeners

### Activities:

- Create a component that fetches data from an API and displays it
- Create a component that updates the document title based on state

### Resources:

- [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)

---

## 5.6: Building a Simple Interactive Todo List

### Learning Goals:

- Apply all learned concepts to build a simple Todo list application
- Manage all data in the local state

### Outline:

1. **Project Overview**

   - Introduction to the Todo list project
   - Understanding the project requirements and structure

2. **Building the Todo List**

   - Setting up the initial state and UI
   - Adding new todos
   - Toggling todo completion status
   - Removing todos

3. **Review and Testing**
   - Reviewing the completed project
   - Testing functionality

### Activities:

- Build a Todo list application from scratch
- Add features to add, toggle, and remove todos

### Resources:

- [Building a Simple Todo App](https://reactjs.org/docs/thinking-in-react.html)

---

## Reading Material with Examples

### React State and `useState`

```jsx
// Counter.js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```
