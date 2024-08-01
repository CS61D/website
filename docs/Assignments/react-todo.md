---
title: "React State: TodoList"
sidebar_position: 4
metadata:
  - Can be provided
  - as: objects
    or: arrays
---

---

## Overview

In this assignment, you will be creating a Todo list app. At the end of the project, it should look something like this: [insert example website].

The basic functionality that you are expected to implement includes:

- Adding a new Todo item
- Marking it as complete
- Deleting the Todo item
  The sky is the limit!
  After this assignment is over, you can continue building on top of it to expand its functionality. More on this at the end of the spec.

---

### Learning Objectives

By the end of this assignment, you should be able to:

- Create and compose React components.
- Pass and use props within components.
- Manage component state using `useState`.
- Implement conditional rendering based on state.
- Render lists dynamically from state.
- Use `useEffect` for managing side effects.
- Implement state management using Context and Reducers.

---

### Setup

Follow the [assignment setup workflow] to pull the assignment from the skeleton. After you open the file in VSCode, you should see the following file structure:

```txt
todolist/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── TodoList.tsx
│   │   └── TodoItem.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   └── Interfaces.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

#### Installing Dependencies

To compile your code, you need to install a few dependencies that this project will rely on. This installs TypeScript and type definitions for Node.js, React, and ReactDOM:

```bash
npm install typescript @types/node @types/react @types/react-dom
```

In the project directory, you can run:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000/) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console, which you can open by right-clicking on the browser window and selecting “Inspect” from the menu.

---

### Structure

#### Component Structure

How do we want to structure our TodoList app? If we think in terms of components, it might make sense to make a `TodoList` component, in case we want to have multiple `TodoLists` in different parts of the UI.

Can we break down a todo-list even further though? What about each todo item on a todo list? Let’s make that a component as well, called `TodoItem`.

Notice that we have put these components into a folder under src called `components`. This is generally good practice to keep your files organized.

Now that we have a `TodoItem` component and a `TodoList` component, we want to start designing the state. Which component should keep track of what?

---

#### State Management

It is generally better to store state in a higher-level component and pass it down as props to child components. This approach makes the state management more centralized and easier to maintain. For instance, the `TodoList` component should keep track of the list of Todo items and their states. It can then pass down individual Todo item data and functions to update the state to the `TodoItem` component as props.

---

#### Interfaces and Components

Now, let’s take a look in the `Interfaces.ts` file, in `src`. We have defined an `ITask` interface that allows us to type the attributes of a task object, which include `id`, `taskName`, `deadline`, and `completed`.

<details>
    <summary>Why do we need both an interface for the task and a TodoItem component?</summary>

    The interface ITask is used to define the shape of the data for a Todo item. It ensures that the data objects we work with have the correct structure. The TodoItem component, on the other hand, is responsible for rendering the Todo item and handling interactions (like marking it as complete or deleting it).

</details>

At a high level, the `TodoList` component maintains the state of the list of Todo items. It passes down individual `Todo` item data and callback functions (for updating the state) as props to the `TodoItem` component. The `TodoItem` component uses these props to render the Todo item and handle interactions like marking the item as complete or deleting it.

---

## Part 1: Getting User Input

Let’s add the functionality to get user input so we can later process it to make our Todo item!

:::info
Deliverable: Implement the `return` statement of the `TodoList` component.
:::

### Make a form

Navigate to the `TodoList.tsx` file, under `src/components` directory.
Let's start by creating a form element. The form will contain input fields for the task name and deadline, and a submit button.
Here's some fields that you can use that are part of the form jsx tag.

```jsx
<form onSubmit={doSomething}> // set the onSubmit attribute of form.
    // What do we want to do once we submit the form?
  {insert other elements here, such as input boxes}
  ...
</form>
```

Inside the form, add two `input` elements.
We need **two** fields to input our task name and its corresponding deadline.
In TodoList.tsx, modify the file so that there are two fields: the first should accept text, and the second should accept positive integers.

The `input` html tag has a few attributes that you might find useful:
\*Note: these are dummy values and you can and should change them.

```jsx
<input
  name="taskName"
  type="..."
  placeholder="..."
  value={task}
  onChange={yourFunctionHere}
  required // indicates that input is required
/>

<input
  name="deadline"
  type="..."
  placeholder="..."
  value={...}
  onChange={yourFunctionHere}
/>

```

<details>
  <summary>Hint 1</summary>

The `onChange` attribute should handle state updates when the input changes.

</details>

<details>
  <summary>Hint 2</summary>

You might want to handle one of `handleNewTask`, `addTask`, or `deleteTask` when filling in the input.

</details>

### Add a `Todo` button

Add a button element inside the form. What should the button do `onClick`?

<details>
  <summary>Hint 1</summary>

You might want to handle one of `handleNewTask`, `addTask`, or `deleteTask` `onClick`.

</details>

### Adding state variables

At the top of the `TodoList` functional component, use the `useState` hooks to track all the appropriate variables we need to keep track of. Two are already given.

```jsx
const TodoList: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  // Add more as needed

  ...
};
export default TodoList;

```

You might need to track the state of more than just the task. For reference, the staff solution is tracking four variables in state. You may use more or fewer.

In order to actually view this in the development server, you need to add an instance of the `TodoList` component to your `App.tsx` function.
By the end of implementing the form, your output should look something like this:

[INSERT PIC]
Don’t worry if the styling isn’t the same.

---

## Part 2: Implementing Handlers

:::info
Deliverable: Implement the `handleNewTask`, `handleAddTask`, `handleDeleteTask`, and `handleCompleteTask` in `TodoList.tsx`.
:::

### `handleNewTask`

This function updates the state whenever the user types in the input fields. Make sure to check the `name` of the input to update the correct state variable.

<details>
  <summary>Hint 1</summary>

Check the name of the input field using `e.target.name`. If the `name` is "task", update the task state.
If the `name` is "deadline", update the deadline state.

</details>

### `handleAddTask`

This function handles form submission to add a new task. It creates a new task object with a unique ID, the task name, deadline, and a completed status. It then updates the state to include the new task and resets the input fields.

:::note
The unique ID is important because we can use that to map over each task when we render them later. It can also be used to identify which task to modify or delete.
:::

This function handles form submission to add a new task. First, check if the task state is empty or only contains whitespace → If so, alert the user and return with `alert(“message”)`

Finally, make sure to reset the input fields after successfully adding the task. To reset the input fields, you can simply change them back to empty strings:

```tsx
setTask("");
setDeadline("");
```

<details>
  <summary>Hint 1</summary>

What should the completed status be when we first add a todo?
To implement a unique ID, we can use the index of the todo items. How can we get the index?

</details>

### `handleDeleteTask`

This function removes a task from the todo list based on its ID. It filters out the task with the matching ID from the state.

<details>
  <summary>Hint 1</summary>

Use the `filter` method on the `todoList` state to remove the task with the matching ID. Update the `todoList` state with the filtered list.

</details>

### `handleCompleteTask`

This function toggles the completed status of a task based on its ID. It maps over the tasks and updates the completed status of the matching task.

<details>
  <summary>Hint 1</summary>

Use the `map` method on the `todoList` state to find the task with the matching ID. Update the `todoList` state with the modified list.

</details>

---

## Part 3: Implementing TodoItem

Our TodoItem component should be keeping track of its own state and implementing some functionality.

**Question**: Why do we need both an `Interface` for `Todo` objects and also a `TodoItem` component? Aren't we already structuring our `TodoList` as an array of `Todo` objects? Isn’t this redundant?

**Answer**: Separation of concerns: the `ITask` interface ensures type safety and consistency for `Todo` objects, while the `TodoItem` component encapsulates the UI and related logic for displaying and interacting with individual `Todo` items.

Navigate to the `TodoItem.tsx` file, under `src/components` directory.

:::info
Deliverable: implement the `TodoItem` component.
:::

### Fill out the interface `TodoItemProps`.

These are the props that TodoList will pass down to each TodoItem instance. Make sure to correctly pass in the props to our functional component.

Things to consider: what actions apply to one `TodoItem` at a time? For example, recall that we want to mark the `TodoItem` as completed if we toggle the checkbox, and we want to delete the `TodoItem` if we click the delete button

[insert gif]

### Add elements to the return statement

Notice that we have four elements that make up a TodoItem:

1. An input of type `checkbox` that toggles the completion of the task
2. The name of the task
3. The deadline of the task, with the suffix “day(s) away
   1. Note that if the deadline is 0, do not render “0 day(s) away”. Simply keep it blank like the “eat dinner” entry.
4. a Delete button that will delete the task

[insert reference image]

First, try adding the task name in the `<span> {content here} </span>` to see it rendered on your [localhost:3000](http://localhost:3000/).

Fill in the rest of the elements so your output looks like the picture above. Recall that inputs have a few variables including `type`, `checked`, and `onChange.`

<details>
  <summary>Hint 1</summary>

Consider looking at the examples in [5.2 Conditional Rendering] to implement the logic for conditionally rendering the deadline. If it is 0 days away, do not render the "day(s) away" suffix.

</details>

<details>
  <summary>Hint 2</summary>

What functions might we want to pass in for the checkbox input and the delete button?

</details>

You can change the first `<span>` to the following for additional styling.

```tsx
// toggles the strikethrough through the task name for when a task is completed.
  <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
```

---

## Part 4: Render the `TodoItem` components inside of `TodoList.tsx`

Now that we have `TodoItem` components that will handle their own completion and deletion, let’s actually render them inside of `TodoList.tsx`, based on our todoList array of `Task` objects!

Fill out the TODO in `TodoList.tsx` in the return statement.
Make sure you’re passing in the correct props to the TodoItem component.

<details>
  <summary>Hint 1</summary>

Use the `map` function. What do you want to map over?

</details>

Finally, render the `TodoList` component within `App.tsx`. You should be all done!

---

## Part 5 (Optional): Scaling up with Reducers

At this point, you can get some extra practice refactoring your existing code to use context and reducers. However, this is an optional part of the assignment.

### Create a `todoReducer`

Create a file `TodoContext.tsx` to define your context and reducer.

[Read more in these notes to learn how to refactor your code using Reducers and Context]

1. Make sure to import the necessary modules at the top of the file:

```tsx
import React, {
  createContext,
  useReducer,
  ReactNode,
  ReactElement,
} from "react";
import { ITask } from "./Interfaces";
```

2. Define a reducer function `todoReducer`. Although you can structure the reducer many different ways, the overall logic is to:
   1. Use a switch statement to handle the different action types:
      1. For ADD_TASK, return a new state with the new task added and nextId incremented.
      1. For DELETE_TASK, return a new state with the specified task removed.
      1. For COMPLETE_TASK, toggle the completed status of the specified task.

For example,

```tsx
const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TASK":
    // logic for adding a task
    case "DELETE_TASK":
    // logic for deleting a task
    case "COMPLETE_TASK":
    // logic for completing a task
    default:
      return state;
  }
};
```

### Provide Context

Create a context `TodoContext` with `createContext`.

Wrap your main component or the part of your app that needs access to the todo state with a `provider`.

### Refactor the TodoList Component

Maintain local state for the task input fields using `useState`, but use `dispatch` to handle adding, deleting, and completing tasks.

Remember to add

```tsx
const { state, dispatch } = useContext(TodoContext);
```

in your TodoList component!

---

## Epilogue

If you would like to increase the functionalities of your Todo list, here are some ideas for additional functionalities.

- The deadline decrements as you advance days towards the due date
- Sorts the todos in order of priority
- Completed todos show up under a “Done” section
- Styling (confetti for every time you mark a todo as done)
- Ability to edit todos
- Ability to create sub-tasks
- Add tags to sort your todos
  - such as #personal, #work

<!-- You can interact with these features on the staff website, under [Fancy] -->

Or, you could even expand it into your own project. Here are a few project ideas:

1. **Project Management Tool**

   1. Expand the TodoList into a full-fledged project management tool. (Similar to tools like [Asana](https://asana.com/product?&utm_campaign=Brand--NAMER--US--EN--Core&utm_source=google&utm_medium=pd_cpc_br&gad_source=1&gclid=CjwKCAjwtNi0BhA1EiwAWZaANGa0GGCLtI37pSxzGo_mT39XHQqro9AHNxPpYYs3KpHeL8MWPA-imxoCS3UQAvD_BwE&gclsrc=aw.ds)) Add features like task dependencies, milestones, team collaboration (with user roles and permissions), Gantt charts or Kanban boards, time tracking, and progress reporting.

2. **Fitness Tracker**

   1. Design the TodoList around fitness goals. Users can create todos for workouts, track progress with metrics like weight, reps, or distance, set reminders for training sessions, integrate with health tracking APIs (like Fitbit, Apple Health, Strava), and provide insights on fitness trends.

3. **Recipe Organizer**
   1. Create a recipe management tool with the TodoList base. Users can create todos for recipes they want to try, manage ingredients and cooking steps, categorize recipes by cuisine or dietary preferences, integrate with meal planning calendars, and share recipes with friends.
