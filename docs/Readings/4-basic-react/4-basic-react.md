---
title: Lecture 4 — Basic React
metadata:
  - Can be provided
  - as: objects
    or: arrays
---

# Lecture 4: Basic React

Duration: Aiming for 30 min to 1 hour

![React Logo](https://www.patterns.dev/img/reactjs/react-logo@3x.svg)

### Objectives:

Learn React fundamentals, including:

- Basic HTML markup
- Importing, Exporting, and Composing Components
- Passing Props, and Type safe React
- Using JavaScript Within React

By the end, you will be able to incrementally build a website by adding components and HTML elements to starter code. [eventually link to Assignment]

---
    




## 4.3: Passing Props and Type Safe React

### Learning Goals:

- Understand how to pass data using props
- Learn the basics of type safety with PropTypes and TypeScript

### Outline:

1. **Passing Props**

   - What are props?
   - Passing data through props
   - Prop drilling and managing props

2. **Type Safe React**
   - Introduction to PropTypes
   - Basic TypeScript in React

### What are Props?:

### Activities:

- Create a Card component that accepts props for title and content
- Implement PropTypes for the Card component

### Resources:

- [React Props](https://reactjs.org/docs/components-and-props.html)
- [PropTypes Documentation](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

## 4.4: Using JavaScript Within React

### Learning Goals:

- Integrate JavaScript logic within React components
- Manage state with useState hook
- Handle events in React

### Outline:

1. **JavaScript in JSX**

   - Embedding JavaScript expressions
   - Conditional rendering
   - List rendering

2. **Managing State**

   - Introduction to useState
   - Updating state

3. **Handling Events**
   - Adding event handlers
   - Synthetic events

### Activities:

- Create a Counter component with increment/decrement functionality
- Create a TodoList component that adds/removes items

### Resources:

- [React State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [Handling Events](https://reactjs.org/docs/handling-events.html)

---

## 4.5: Building the Project

### Learning Goals:

- Apply learned concepts to build a small project
- Incrementally add components and HTML elements to starter code

### Outline:

1. **Project Overview**

   - Introduction to the starter code
   - Understanding the final website structure

2. **Incremental Development**

   - Adding components step-by-step
   - Integrating HTML elements and styles

3. **Review and Testing**
   - Reviewing the completed project
   - Testing functionality

### Activities:

- Recreate a finished website from starter code by adding components and HTML elements

### Resources:

- [React Project Examples](https://github.com/facebook/create-react-app)
- [CodeSandbox](https://codesandbox.io/) for online React development

---

## Reading Material with Examples

### Basic React and HTML Markup

```jsx
// App.js
import React from "react";

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to your first React app.</p>
    </div>
  );
}

export default App;
```
