
--- 
### JSX: Connecting React to HTML

**What is JSX?**

 JSX (**J**ava**S**cript **X**ML) is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code within JavaScript.

**Basic JSX Syntax**:
JSX allows embedding JavaScript expressions within curly braces `{}`.

    ```jsx
    // Using a JavaScript expression within JSX
    const name = 'Alice';
    const element = <h1>Hello, {name}!</h1>;
    
    // Rendering the element to the DOM
    ReactDOM.render(element, document.getElementById('root'));

    ```

**JSX vs HTML**:
   - **Similarities**: JSX looks almost identical to HTML, making it intuitive for those familiar with HTML.
   - **Differences**:
     - JSX elements must be properly closed (e.g., `<img src="image.jpg" />`).
     - JSX uses camelCase for attribute names (e.g., `className` instead of `class`).

**Creating React Elements with JSX**:
   - **Rendering Elements**: React elements created with JSX are rendered using the `ReactDOM.render` method.
     ```jsx
     const element = <h1>Hello, world!</h1>;
     ReactDOM.render(element, document.getElementById('root'));
     ```

**Embedding HTML in JSX**:
   - **HTML Elements in JSX**: Any valid HTML element can be used within JSX.
     ```jsx
     const element = (
       <div>
         <h1>Hello, world!</h1>
         <p>This is a paragraph.</p>
       </div>
     );
     ```

**JSX Transpilation**:
   - **Transformation**: JSX is not valid JavaScript, so it needs to be transformed into JavaScript using a tool like [Babel](https://babeljs.io/).
     ```jsx
     const element = <h1>Hello, world!</h1>;
     // Transformed to:
     const element = React.createElement('h1', null, 'Hello, world!');
     ```
<details>
    <summary>Deep Dive: React Components vs Elements </summary>
    
     A component is a JavaScript function or class, while an element is what is being returned after compilation of JSX and calling of the `React.createElement` method. That is, the element is created in the Virtual DOM, and during rendering, it is transferred into a standard DOM of a web application; for example turning into a button the user can press.
   
     A component:
- can be a function or a class that receives some data and returns elements, other components, lines, and numbers
- operates based on a life cycle
- can change its state (has mutability)
- works with React hooks.

An element:
- is what components always return;
- is created and does not change (has no mutability), and therefore does not work with React hooks.
</details>

### Activities:

- Install Node.js and Create React App
- Create a simple “Hello World” component

### Resources:

- [React Official Documentation](https://react.dev/)
- [Create React App Guide](https://reactjs.org/docs/create-a-new-react-app.html)

---




--- 
4.2

### Learning Goals:
- Understand components and component-based architecture
- Learn how to create, import, and export components
- Organizing components to build a UI


### Outline:

1. **Component-Based Architecture**
    
   - What are components?
   - Functional vs. Class components

2. **Creating and Exporting Components**

   - Creating functional components
   - Exporting components

3. **Importing and Composing Components**
   - Importing components into other components
   - Composing components to build a page



<details>
    <summary>Functional vs. Class Components</summary>

| Functional Components                                                                                                  | Class Components                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| JavaScript functions that can receive properties (props) as an argument and return React elements (JSX) for rendering. | JavaScript classes that extend the `React.Component` class.                                     |
| Shine in simpler scenarios, embracing a more functional programming approach.                                          | Preferred for complex components that demand precise control over state and lifecycle behavior. |

</details>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!--
Here is an example of how you can implement a simple Counter using either a functional component or a class component.

<Tabs>
  <TabItem value="Functional Component Example" label="Functional Component Example" default>
    ```javascript
    // implementing a counter using functional component
    import React, { useState } from "react";

    const FunctionalComponent = () => {
        const [count, setCount] = useState(0);

        const increase = () => {
            setCount(count + 1);
        }

        return (
            <div style={{ margin: '50px' }}>
                <h3>Counter App using Functional Component : </h3>
                <h2>{count}</h2>
                <button onClick={increase}>Add</button>
            </div>
        )
    }

    export default FunctionalComponent;
```



  </TabItem>
  <TabItem value="Class Component Example" label="Class Component Example">
    ```javascript
    // implementing a counter using class component
    import React, { Component } from "react";

class ClassComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0
		};
		this.increase = this.increase.bind(this);
	}

	increase() {
		this.setState({ count: this.state.count + 1 });
	}

	render() {
		return (
			<div style={{ margin: '50px' }}>
				<h3>Counter App using Class Component : </h3>
				<h2> {this.state.count}</h2>
				<button onClick={this.increase}> Add</button>

			</div>
		)
	}
}

export default ClassComponent;
    ```
  </TabItem>
</Tabs> -->

---

### Building a Component

Read this quick guide on [creating your first component](https://react.dev/learn/your-first-component) from the official React documentation. It takes you through the basic syntax of defining simple functional components.

### Importing and Exporting Components

### Activities:

- Create a Header, Footer, and MainContent component
- Compose these components in an App component

### Resources:

- [React Component Guide](https://reactjs.org/docs/components-and-props.html)
- [JavaScript Import/Export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)

---

---




