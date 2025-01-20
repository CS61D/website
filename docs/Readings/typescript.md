---
sidebar_position: 5
---

# TypeScript

## Why TypeScript?

In [why JavaScript](javascript.md#why-javascript), we established that learning JavaScript is necessary for frontend, and a decent choice for backend. With that being said, dynamic typing is **terrible** for developer experience and productivity.

```javascript
const numberArray = [1, 2, 3, 4];
numberArray.push("five"); // Oops!
const doubled = numberArray.map((val) => val * 2);
// [ 2, 4, 6, 8, NaN ]
```

If we were using a statically types language, we would know for sure that our doubled array contains only numbers, and then could reason about it properly. So called _type errors_ are an entire class of bugs which only get worse as codebases expand in complexity.

We can't change the fundamental way that JavaScript executes in the browser or on the server (runtime), but we can mimic the guarantees of a statically typed language by adding types that are checked before our code executes (compile time). JavaScript with the addition of types is called TypeScript, which has become the industry standard way of writing JavaScript.

<!-- ## Primitive Types and Type Errors -->

<!-- ## Typing Arrays and Functions -->

<!-- ## Generics -->

<!-- ## Typing Objects -->

<!-- ## Unions and Intersection Types -->

<!-- ## TypeScript Wizardry -->

<!-- [full sql database with typescript types](https://github.com/codemix/ts-sql) -->
