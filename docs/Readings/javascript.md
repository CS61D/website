---
sidebar_position: 4
---

# JavaScript

> "Any application that _can_ be written in JavaScript, will eventually be written in JavaScript."

\-- Jeff Atwood, co-founder of Stack Overflow, in a [2007 blog post](https://blog.codinghorror.com/the-principle-of-least-power/)

> "JavaScript is the only language that I’m aware of that people feel they don’t need to learn before they start using it"

\-- Douglas Crockford, author of _JavaScript: The Good Parts_ and creator of the JSON file format

## Links

- [JavaScript Lecture](https://www.youtube.com/watch?v=TrAyq1hSUpI)
- [JavaScript Lecture Code](https://github.com/CS61D/Lecture-JavaScript)

## Why JavaScript?

JavaScript is the only programming language which can run natively in a web browser. If you ever want to build a frontend web UI that isn't static markup, you need to know JavaScript.

There are many more options on the backend, but JavaScript is a serviceable choice. This means that you can kill two birds with one stone and become a fullstack developer while only learning one language.

JavaScript is an interpreted language (like python), compared to a compiled language like C++ or Java. This means that it will never have a performance ceiling as high as a compiled language, but it is more than good enough. For any small application without tens of thousands of users (a.k.a your beginner side projects), the most important factor is the speed of iteration and ease of development, which using the same language on the frontend and backend undoubtedly helps with.

## Browser versus Node.js

[Node.js](https://nodejs.org/en/) is a JavaScript execution engine that runs outside of the browser. There are other ways of running JavaScript outside of a web browser, but the differences between them are insignificant for out purposes. The only distinction you need to think about is client side JavaScript (in the browser) versus server side JavaScript (Node.js).

JavaScript works the same way in the browser and in Node.js, but they have access to different APIs (a.k.a they can do different things) by virtue of the environment they are running in. For example, a browser application can't directly access a your device file system. Similarly, a web server running Node.js in a data center somewhere can't change your website UI into dark mode when a button is clicked.

## Basic Syntax Speedrun

:::note
61d generally assumes that you have at least a small amount of general _programming_ experience, even if you don't have any web dev experience. If you are unfamiliar with terms like "variable", "function", or "loop", the beginning of 61d may be a bit too fast paced.
:::

### Variables

```js
let age = 21; // let defines a mutable variable
const name = "Aidan"; // const defines a constant
```

### Control Flow

```js
// All these values will evaluate to false when used in a conditional
let falsyValues = ["", null, undefined, 0, false];

let age = 19;
if (age >= 30) {
  console.log("Welcome to our establishment"); // Log to command line
} else if (age >= 21) {
  console.log("Let me check your ID");
} else {
  console.log("Not old enough");
}

// Ternary operator, evaluates to first term if condition is true,
// or second term if condition is false
const response = age >= 21 ? "Allowed" : "Not allowed";

// Other operators
// || is the OR operator
// && is the AND operator
// the NOT operator is !
```

### Functions

```js
// function declaration, that takes a name argument
function greet(name) {
  console.log(`Hello ${name}`); // Template string
}

// arrow function syntax
const goodbye = (firstName, lastName) => {
  console.log(`Goodbye ${firstName} ${lastName}`);
};
```

Either method of defining

## Arrays and array methods

An array is just another word for a list of items. In JavaScript, array sizing is dynamic, meaning you do not have to define the size of the array ahead of time.

### Basic Array Looping and Accessing

```js
//* Arrays with loops
const names = ["Alice", "Bob", "Charlie"];

// Loop by value
for (const name of names) {
  console.log(name);
}

// for loop by index
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// Loop by value and index
for (const [index, name] of names.entries()) {
  console.log(index, name);
}
```

### Utility Array Functions

```js
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];

// Get index or check for value
const indexOfEleven = primes.indexOf(11); // 4
const includesSeven = primes.includes(7); // true

// Slicing
const firstThreePrimes = primes.slice(0, 3); // [2, 3, 5]
const primesAfterFive = primes.slice(3); // [7, 11, 13, 17, 19, 23]
const lastThreePrimes = primes.slice(-3); // [17, 19, 23]

// Mutating
primes.push(29); // Adds 29 to array, does not
primes.shift(); // returns 2 and deletes from array
primes.pop(); // returns 29 and deletes from array

// Flattening
const nested = [
  [1, 2],
  [3, 4],
];
const flat = nested.flat(); // [1,2,3,4]
```

### Higher Order Array Functions

An extremely common pattern is to loop through all elements of an array and perform some kind of transformation or calculation on all the elements. This always can be accomplished with traditional for loops, but the preferred approach is to use built in higher order array functions. They are more concise, and easier to immediately interpret the effect of than a traditional loop.

All of these methods have a similar structure. They take in a function as an argument (a callback function) which determines what operation should be computed on each item, and apply it to each item in the array. The five most useful of these methods are `map`, `filter`, `reduce`, `some`, and `every`.

- **map**: Perform a transformation to every element in the array
- **filter**: Remove elements from the array that do not meet a certain condition
- **reduce**: Combine the elements of the array in some way, such as summing them all together.
- **some**: Check if at least one value in the array satisfies a condition
- **every**: Check if all values in the array satisfy a condition

```js
const numbers = [1, 2, 3, 4];

// Functions give access to the value at the current index,
// the current index, and the array itself if needed
const doubled = numbers.map((value, index, array) => value * 2); // [2, 4, 6, 8]
const odd = numbers.filter((value) => value % 2 === 1); // [1, 3]
const allNumbersLessThanFour = numbers.every((value) => value < 4);
const aNumberLessThanFour = numbers.some((value) => value < 4);
```

The syntax for `reduce` is a bit more complicated, as its callback function processes a current value and a previous value. You also must pass an initial value, which serves as the previous value for the first item in the array.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((prev, curr) => prev + curr, 0); // Our sum starts at zero
```

## Objects and JSON

One of the most commonly used data formats on the web is JavaScript Object Notation (JSON). It has a hierarchical structure that maps keys to values.

```json
{
  "name": "Aidan",
  "age": 20,
  "duesPaid": true,
  "infractions": null,
  "courses": ["data structure", "roman history", "statistics"],
  "requirements": {
    "general": true,
    "lowerDivision": true,
    "upperDivision": false
  }
}
```

JSON supports the string, numbers, booleans, null, arrays, and objects.

### Spread Operator (...)

## Asynchronous JavaScript

## JavaScript Data Structures

### Set

A set is a collection of items that can check if a value is in the collection in constant time. If you are frequently performing `array.includes()` operations on large arrays, a set will be much faster.

### Map

A map data structure serves works the same way as an object, but it is better optimized and more performant.

### Date
