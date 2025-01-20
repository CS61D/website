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

Objects in JavaScript are hierarchical structure that maps keys to values. They are similar to dictionaries in Python. Since JavaScript objects are processed while your code is running, they can store any valid JavaScript data type.

```javascript
// Create an object
const myObject = {
  name: "Aidan",
  age: 20,
  duesPaid: true,
  infractions: null,
  courses: ["data structure", "roman history", "statistics"],
  requirements: {
    general: true,
    lowerDivision: true,
    upperDivision: false,
  },
  registrationDate: new Date(), // Date object
};

// Accessing object properties
console.log(myObject.name); // Aidan
console.log(myObject["name"]); // Aidan
console.log(myObject.requirements.general); // true
console.log(myObject.courses[0]); // data structure

// Modifying object properties
myObject.age = 21;
```

JavaScript objects are useful when we are running JavaScript code, but they don't work well for storing data in a file or sending data over the internet since they can only be understood when running JavaScript code. In such cases, we use JavaScript Object Notation (JSON) which is a file format based on JavaScript objects.

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
  },
  "registrationDate": "2021-09-01T00:00:00.000Z"
}
```

JSON is a _subset_ of JavaScript objects, meaning that all JSON is valid JavaScript objects, but not all JavaScript objects are valid JSON. JSON only supports strings, numbers, booleans, null, arrays, and nested JSON objects. Additionally, all properties must be declared with double quotes and the final item in the object may not have a comma (no trailing commas).

These stricter formatting rules allow JSON to be parsed by any programming language, not just JavaScript. This makes it the most common format for sending data back and forth between a frontend and backend.

### Destructuring

If an object property is frequently accessed, it can be useful to _destructure_ it into a variable. These destructured variables can also be renamed, to make them easier to understand in the context of the code.

```javascript
// Create an object
const student1 = {
  name: "Aidan",
  age: 20,
};

const student2 = {
  name: "Catherine",
  age: 19,
};

console.log(student1.name); // Aidan

// Destructuring object properties
const { name, age } = student1;
console.log(name); // Aidan
console.log(age); // 20

// With renaming
const { name: studentName, age: studentAge } = student2;
console.log(studentName); // Catherine
```

### Spread Operator

A frequent operation in JavaScript is to create a new objects based on a existing objects. The _spread operator_ (...) allows you to _expand_ an object into its individual properties.

```javascript
const attackingStats = {
  points: 5,
  assists: 3,
};
const defensiveStats = {
  rebounds: 1,
  blocks: 3,
};

// Create a new object with all the properties of attackingStats and defensiveStats
const fullStats = { ...attackingStats, ...defensiveStats };
```

An important property to take note of is that an object can't have duplicate keys, meaning that repeated keys will be overwritten by the last key in the object. This allows you to create a new object with the same properties as an existing object, but with some properties changed.

```javascript
const player = {
  name: "Aidan",
  age: 20,
  position: "Guard",
};

// Create a new object with all the properties of player, but with a new age
const olderPlayer = { ...player, age: 21 };
```

The same spread syntax can be used to create a new array based on an existing array. This is useful when you want to combine two arrays into one.

```javascript
const firstHalf = [1, 2, 3];
const secondHalf = [4, 5, 6];

// Create a new array with all the elements of firstHalf and secondHalf
const fullArray = [...firstHalf, ...secondHalf];
```

<!-- TODO -->
<!-- ## Asynchronous JavaScript -->

## JavaScript Data Structures

### Date

The `Date` object is used to work with dates and times. It can be instantiated from a date string or unix timestamp, or just the current date and time. Once instantiated, it can be used for comparisons, and formatting.

```javascript
const now = new Date(); // current date and time
const epoch = new Date(1735689600); // January 1, 2025 at 12:00:00 AM at UTC
const dateStr = new Date("2025-01-01T00:00:00Z"); // January 1, 2025 at 12:00:00 AM at UTC

// Comparing dates
const is2025 = now > epoch; // true

// Getting a formatted Date string
const formattedDate = now.toDateString(); // "Sun Sep 19 2021"
```

[More available methods](https://www.w3schools.com/jsref/jsref_obj_date.asp)

### Set

A set is a collection of items that can check if a value is in the collection in constant time. If you are frequently performing `array.includes()` operations on large arrays, a set will be much faster.

```javascript
const mySet = new Set(); // create an empty set
const setFromArray = new Set([1, 2, 3, 4, 5]); // create a set from an array

mySet.add(1); // add an element to the set
mySet.includes(1); // true
mySet.delete(1); // remove an element from the set
```

### Map

A map data structure serves works the same way as an object, but it is better optimized and more performant.

```javascript
const myMap = new Map(); // create an empty map
const mapFromArray = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]); // create a map from an array

myMap.set("key1", "value1"); // add an element to the map
myMap.get("key1"); // value1
myMap.delete("key1"); // remove an element from the map
myMap.has("key1"); // false
```
