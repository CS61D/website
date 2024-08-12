# Lecture 6: Advanced State Management

## Objective:
You will learn advanced state management techniques in React, including the use of reducers, context, and providers, as well as building custom hooks. By the end, you will refactor your Todo list application to use context to minimize the need for prop passing.

## Duration:
Aiming for 1 hour

---

## 6.1: Introduction to Reducers

### Learning Goals:
- Understand the concept of reducers in state management
- Learn how to use the `useReducer` hook in React

### Outline:
1. **Understanding Reducers**
   - What is a reducer?
   - Benefits of using reducers for complex state logic

2. **Using the `useReducer` Hook**
   - Syntax and usage
   - Initial state and dispatching actions

### Activities:
- Create a simple counter using `useReducer`
- Modify the counter to handle more complex actions

### Resources:
- [Using the Reducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [Reducers in React](https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down)

---

## 6.2: Context and Providers

### Learning Goals:
- Understand the concept of context in React
- Learn how to use the `createContext` and `Provider` components

### Outline:
1. **Understanding Context**
   - What is context?
   - When and why to use context

2. **Using Context and Providers**
   - Creating a context
   - Using the `Provider` to pass down data

### Activities:
- Create a theme context to manage light and dark modes
- Use the context in various components to toggle themes

### Resources:
- [Context](https://reactjs.org/docs/context.html)

---

## 6.3: Combining Reducers and Context

### Learning Goals:
- Learn how to combine `useReducer` and context for state management
- Understand the benefits of this approach

### Outline:
1. **Combining `useReducer` and Context**
   - Setting up the context with `useReducer`
   - Providing the state and dispatch function

2. **Using the Combined Approach in Components**
   - Consuming the context in child components
   - Dispatching actions from child components

### Activities:
- Refactor the theme context to use `useReducer`
- Implement complex state logic with the combined approach

### Resources:
- [Combining Reducers and Context](https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down)

---

## 6.4: Building Custom Hooks

### Learning Goals:
- Understand the purpose and benefits of custom hooks
- Learn how to build and use custom hooks

### Outline:
1. **Introduction to Custom Hooks**
   - What are custom hooks?
   - When to create custom hooks

2. **Building Custom Hooks**
   - Extracting logic into a custom hook
   - Using the custom hook in components

### Activities:
- Create a custom hook for fetching data
- Use the custom hook in multiple components

### Resources:
- [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

---

## 6.5: Refactoring the Todo List with Context

### Learning Goals:
- Apply the learned concepts to refactor the Todo list application
- Minimize prop passing by using context

### Outline:
1. **Project Overview**
   - Understanding the current structure and prop drilling issues
   - Planning the refactor

2. **Refactoring the Todo List**
   - Creating a context for Todo state
   - Using `useReducer` for state management
   - Providing and consuming the context

### Activities:
- Refactor the existing Todo list to use context and reducers
- Test the refactored application for functionality

### Resources:
- [Todo List with Context](https://reactjs.org/docs/context.html)

---

## 6.6: Review and Enhancement

### Learning Goals:
- Review the refactored Todo list application
- Discuss potential enhancements and optimizations

### Outline:
1. **Review the Refactored Application**
   - Walk through the refactored code
   - Discuss the improvements and remaining issues

2. **Enhancing the Todo List**
   - Adding new features (e.g., filter todos, persist state)
   - Optimizing performance

### Activities:
- Implement additional features in the Todo list
- Optimize the Todo list for performance and scalability

### Resources:
- [Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html)

---

## Reading Material with Examples

### Reducers

```jsx
// counterReducer.js
export const initialState = { count: 0 };

export function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
