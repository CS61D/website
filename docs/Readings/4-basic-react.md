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

## 4.1: Introduction to Basic React and HTML Markup

### Outline:
- Understand the basic concepts of React
- Learn how to set up a React project (should this be in the assignment?)
- Basic HTML markup within React components

### What is React?
   -  **React is a Javascript library for building user interfaces (UI).**
   - Take a look at this webpage. React allows you, as the programmer to build reusable components, like a sidebar, a clickable button, or a paragraph of text. It allows programmers to efficiently build interactive UI's. 
   - React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. 

### Why React? 
   - Reusablity and Modularity:
       - React's component-based architecture, allow developers to create **reusable components** that manage their own state. Components are modular and can be easily maintained, tested individually, and reused. (Don't Repeat Yourself!) 

   -  Declarative UI:
       - Developers only need to describe what the UI should look like for a given state, and React handles the rendering. For example, think about a toggle switch between dark and light mode.

   - Efficient Updates and Rendering:
       - React uses a virtual DOM to optimize updates. Instead of directly manipulating the browser's DOM, React updates a virtual representation of the DOM, which is then used to calculate the most efficient way to update the real DOM.

   
 <details>
      <summary>DOM and Virtual DOM</summary>
    
      The **Document Object Model** (DOM), is the data representation of a web document. representing it as nodes and objects. This way it can be modified with a scripting language such as JavaScript.
        
    The **Virtual DOM** is a lightweight copy of the actual DOM. It’s a JavaScript object that React uses to keep track of changes in the UI. When a component’s state changes, React updates the virtual DOM instead of the real DOM. 

    How does Virtual DOM make React faster? 
    1. Batching Updates: React batches multiple updates to the virtual DOM, reducing the number of times the real DOM needs to be updated. 

    2. React compares the new virtual DOM to the previous virtual DOM to identify the minimal set of changes required. This process is called _reconciliation._

    3. After identifying the changes, React updates only the parts of the real DOM that have changed, rather than re-rendering the entire UI. This _selective rendering_ significantly improves performance, especially for complex UIs.

    
    </details>

   - Cross-Platform Development: You can use React in mobile app development, with [React Native](https://reactnative.dev/).
    

   - Extensive Resources and Strong Community: Check out the beautiful [React Official Documentation](https://react.dev/).

<!-- 2. **Setting Up a React Project** (this should be in the assignment)
   - Installing Node.js and npm
   - Using Create React App to set up a new project
   - Project structure overview -->

### Basic HTML Markup
   - What is HTML
   - Creating a simple component
   - Embedding HTML in JSX
   - Differences between HTML and JSX

### Activities:
- Install Node.js and Create React App
- Create a simple “Hello World” component

### Resources:
- [React Official Documentation](https://react.dev/)
- [Create React App Guide](https://reactjs.org/docs/create-a-new-react-app.html)

---

## 4.2: Importing, Exporting, and Composing Components

### Learning Goals:
- Understand component-based architecture
- Learn how to create, import, and export components
- Organizing components to build a UI

### Outline:
1. **Component-Based Architecture**
   - What are components?
   <!-- - ![component](https://www.adcisolutions.com/sites/default/files/styles/scale_w770/public/2022-09/table_1.jpg.webp?itok=r6bjjEm8) -->
   - Functional vs. Class components

2. **Creating and Exporting Components**
   - Creating functional components
   - Exporting components

3. **Importing and Composing Components**
   - Importing components into other components
   - Composing components to build a page

### Activities:
- Create a Header, Footer, and MainContent component
- Compose these components in an App component

### Resources:
- [React Component Guide](https://reactjs.org/docs/components-and-props.html)
- [JavaScript Import/Export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)

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
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to your first React app.</p>
    </div>
  );
}

export default App;
