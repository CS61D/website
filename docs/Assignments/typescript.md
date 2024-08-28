---
sidebar_position: 3
---

# 2. Typescript

## Assignment Links
- [Starter Code](https://github.com/CS61D/Assignment-Starter-Typescript)

## Assignment Overview

This assignment uses a series of problems to teach the basics of TypeScript. All solutions must be written in TypeScript not JavaScript.

Most problems use predefined types in the types.ts file. While you do not need to edit any of these types, to look at the type definitions to understand the data you will be working with in you functions. For this assignment, none of the function signatures are written for you. Each problem will tell you its expected inputs and outputs, and it is up to you to create a function that uses said inputs and outputs.

## Running the Tests

Just as with the JavaScript assignment, this assignment uses vitest. First install the required dependencies.

```console
bun install
```

And then run the tests using vitest

```console
bun vitest
```

## Problem 1: Fun with Types!

Write a function that takes two numbers as input, converts them to a string, and then concatenates them. Pay attention to the type of the inputs and the outputs.

```typescript
concatNumbers(4, 5); // returns "45"
concatNumbers(5, -9); // returns "5-9"
```

## Problem 2: Student Roster

Using the created type Student, create a function to return an array of students given an array of student names and student ages. Return the students in the same order as the names and ages. You may assume that the array of names will be the same length as the array of ages. Feel free to copy your solution from the JavaScript assignment, and just add types to your function.

```typescript
const names: string[] = ["Joe", "Schmo"];
const ages: number[] = [50, 60];
arrayOfStudents(names, ages);
// returns
// [
//     {
//         name: "Joe",
//         age: 50
//     },
//     {
//         name: "Schmo",
//         age: 60
//     }
// ]
```

## Problem 3: Class Schedules

Given a professor, return the names of all the students the professor teaches in increasing order by their age. You can and should use the [.sort array method](https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/) and use a custom [comparator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description) to decide what student is "greater than" or "less than" another student based on the property we want to sort by.

```typescript
// sorts the numbers in the list in increasing order
list.sort((num1: number, num2: number) => num1 - num2);
list.reverse(); // built in method will also do the opposite order of the sort function
```

There is no runtime requirement for this problem. Assume all ages are unique, so there is no need to worry about ties. You should assume that only one professor teaches each class. However, the same students may be in several classes taught by a professor. Make sure you don't have any duplicates in your array of students.

```typescript
const professor: Professor = {
  name: "Aidan",
  classes: [
    {
      className: "CS 61A",
      students: [
        { name: "Shruti", age: 12 },
        { name: "Nemer", age: 18 },
        { name: "Elaine", age: 19 },
      ],
    },
    {
      className: "CS 61B",
      students: [
        { name: "Ayush", age: 17 },
        { name: "Rayna", age: 21 },
        { name: "Dhruv", age: 20 },
      ],
    },
  ],
};
studentsTaughtByProf(professor); // returns ["Shruti", "Ayush", "Nemer", "Elaine", "Dhruv", "Rayna"];
```

## Problem 4: Student Athletes

An athlete is a type of student that has an additional "sport" property. All athletes are students, but not all students are athletes! Given an array of students, some of whom are also athletes, convert all of the students into athletes that play the given default sport. Students who were athletes to begin with should retain their original sport. Return the athletes in the same order as the initial student array.

```typescript
// Union type is used to create an array of either type Student or type Athlete
const input: (Student | Athlete)[] = [
  { name: "Joe", age: 100, sport: "Baseball" },
  { name: "Trump", age: 90 },
];
allAthletes(input, "Football");
// returns
// [
//   { name: "Joe", age: 100, sport: "Baseball" },
//   { name: "Trump", age: 90, sport: "Football" },
// ];
```

## Problem 5: generics

Create a function that takes an array of items of a generic type, T, and an individual item of the same generic type T. Return the number of times the individual item occurs in the array of items. Your function only needs to be able to handle primitive types, not complex object types (in other words, the === operator is sufficient to check for equality). If the given value does not occur in the array, return 0.

```typescript
const numArr = [2, 4, 6, 6, 8];
countOccurrences(numArr, 6); // returns 2

const boolArr = [true, true, true];
countOccurrences(boolArr, false); // returns 0
```

## Problem 6: All accounted for?

The User type has entirely optional properties. That means that an empty object, or an object containing all of the properties or an object some of the properties are all valid.

```typescript
const u1: User = {
  id: "1",
}

const u2: User = {
  id: "2";
  name: "Satish";
  address: {
    street: "1624 Shattuck";
    city: "Berkeley";
  };
}
```

Write a function that verifies that the user has all of the possible attributes. If all possible attributes (id, name, address, street, and city) are defined within the user then return the user object. If any of the properties are missing, return a string array containing the missing properties. You do not have to worry about the ordering of the array. If a null or undefined value is passed into the function, include "userData" in the list of missing properties.

```typescript
verifyUser(u1); // returns the string array ["name", "address", "street", "city"]

verifyUser(u2); // returns the u2 user object because the object has all properties defined
```

:::caution
Be sure to check that the properties are defined in a way that will not error if a property does not exist. For example, if an empty object is passed into the function, accessing userData.address.street will error because userData.address will be undefined, and therefore (undefined).street will error. Check out [optional chaining](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html) in the TypeScript docs.
:::
