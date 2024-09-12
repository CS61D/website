---
sidebar_position: 2
---

# 1. JavaScript

## Assignment Links

## Assignment Overview

The goal of this assignment is to get you familiar with JavaScript syntax, focussing on arrays, objects, and functions. None of the problems are designed to be overly difficult to complete conceptually. We also have several problems that can be completed using the map an filter methods, which will be extremely useful throughout the course. If you are struggling with map and filter, try solving the problem first using a for loop, and then convert your solution to using map and/or filter after.

## Running the tests

All the tests that will be used for this assignment are located in the tests directory. We use a testing framework called vitest. A test for the first problem of this assignment looks like this.

```javascript
import { describe, it, expect } from "vitest";

// Import the function written for the problem from the correct file
import printIndex from "../problems/Problem1";

describe("printIndex Function", () => {
  // Test Suite
  it("Basic Case", () => {
    // Individual Test Case
    // Define sample inputs
    const array = [10, 20, 30, 40, 50];
    const index = 2;

    // Get the result from the user created function
    const result = printIndex(index, array);

    // Define expected behavior
    const expected = "Value at index 2 is 30";

    // Check if expected behavior matches actual behavior
    expect(result).toBe(expected);
  });
});
```

Much like CS 61A or 61B, we run a series of tests on your solution code to verify it works properly. The tests that you have a local copy of are the exact same tests that we will use in the auto grader. If all of the tests pass locally, they should all pass on the auto grader and you will get full credit on the assignment. We also use the same testing framework for more or less the entire first half of the course, so take some time to play around with it and learn how it works now.

### Run all tests in all testing files

```console
bun install # Just run this once to install the vitest framework
bun vitest # Run in watch mode
bun vitest run # Run the tests a single time
```

If you run a test in watch mode, the tests will rerun any time you make changes to a file. However, running all of the tests will bombard you with tons of failures for questions you have not even started working on yet.

### Run all tests for a single file/problem

```console
bun vitest run -t "TestName"
```

You can pass the name of a specific test or test suite to run only those tests.

If you want to learn more about vitest cli commands check out the [vitest docs](https://vitest.dev/guide/cli.html)

## Problem 1: printIndex

Create a function printIndex, which takes an index and an array as parameters. The function should return a string that says "Value at index (index value) is (value of array at given index)". You may assume that the given index will not be out of bounds for the given array.

```javascript
const index = 2;
const array = [5, 10, 15, 20];
printIndex(index, array); // Returns "Value at index 2 is 15"
```

Create the function printIndex in the Problem1.js file. Once you have defined the function, uncomment the line at the bottom of the file exporting the function.

## Problem 2: largestMystery

Given an array of numbers, arr, and an arbitrary one argument function, mysteryFunc which returns a either true or false, return the largest number in arr that causes mysteryFunc to return true. If no number causes the function to return true, return "No number passes the function!"

:::note
mysteryFunc can be any function that returns a boolean. You will have to call mysteryFunc on every element or arr and you can't assume anything about how mysteryFunc works.
:::

```javascript
const arr = [-5, -2, 0, 6, 10, 55, 71];
const divisibleByFive = (num) => num % 5 === 0; // Returns true if num is divisible by 5
largestMystery(arr, divisibleByFive); // Returns 55

const isNegative = (num) => num < 0; // Returns true if num is negative
largestMystery(arr, isNegative); // Returns -2
```

## Problem 3: multiplyBy

Given an array of numbers, return an array in which each number is multiplied by the multiplier input.

```javascript
const arr = [-3, 4, 10, 5];
const multiplier = 2;
multiplyBy(arr, multiplier); // Returns [-6, 8, 20, 5]
multiplier = 10;
multiplyBy(arr, multiplier); // Returns [-30, 40, 100, 50]
```

## Problem 4: indexAndConcat

Given an array of strings, return a new array that has the index of the string concatenated with the string itself.

```javascript
const arr = [
  "Hello!",
  "My name is Elder Price",
  "And I would like to share with you",
  "The most amazing book.",
];
indexAndConcat(arr);
/**
 * Returns
 * ["0Hello!",
 * "1My name is Elder Price",
 * "2And I would like to share with you",
 * "3The most amazing book."]
 */
```

## Problem 5: Where's Waldo?

Given an array of strings, return all an array of all of the strings containing the all lower case string "waldo". Be sure to ignore any instances of waldo besides the all lower case version. Additionally, we want to make sure that we can find waldo, so make all of the returned strings FULL UPPER CASE.

```javascript
const arr = [
  "Who is waldo?",
  "where is he?",
  "what is waldo doing?",
  "WalDo is already here",
];
uppercaseStringsContainingWaldo(arr); // Returns ["WHO IS WALDO?", "WHAT IS WALDO DOING?"]
```

## Problem 6: Are People Objects?

Given an array of names, and an array of ages, return an array of objects with the properties name and age. You may assume that the names and ages arrays are of the same length

```javascript
const names = ["Taylor", "Jake"];
const ages = [20, 29];
namesAndAges(names, ages);
// Returns the value assigned to expectedReturn
const expectedReturn = [
  {
    name: "Taylor",
    age: 20,
  },
  {
    name: "Jake",
    age: 29,
  },
];
```

## Problem 7: We're all getting older

You are given an object obj in string form. Parse the object and determine if it has an age property. If it does, double it. If it doesn't add an age property and set it to zero. Return the parsed object.

```javascript
const expected = {};

// Note the inputs are strings
const agelessWonder = '{"beauty":10,"followers":1000000,"name":"Ariana"}';
const oldMan = '{"beauty":0,"backPain":true,"age":50}';

doubleAge(agelessWonder); // Returns the value assigned to expected
expected = {
  beauty: 10,
  followers: 1_000_000,
  name: "Ariana",
  age: 0,
};

doubleAge(oldMan); // Returns the value assigned to expected
expected = {
  beauty: 0,
  backPain: true,
  age: 100,
};
```
