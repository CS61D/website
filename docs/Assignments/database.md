---
title: Online Ordering System
metadata:
  - Can be provided
  - as: objects
    or: arrays
---

---

## Tech Stack:

- Drizzle ORM + Drizzle Kit
- SQLite
- Zod

## Resources:

- [Drizzle Kit Overview](https://orm.drizzle.team/kit-docs/overview)
- [Drizzle Queries](https://orm.drizzle.team/docs/rqb#declaring-relations)

## Objectives:

- Learn to set up a database schema using an ORM like Drizzle
- Learn to write functions to interact with a database
- Learn to validate data with Zod to ensure data integrity
- Learn to perform database migrations to keep our database schema updated

## Description:

This is a 3-part assignment and will be completed one section at a time after each lecture (out of 3 lectures total).

- You will start by setting up a database schema given our context with specific requirements.
- You will then learn to perform CRUD operations on the database by writing functions, validating the data, and doing migrations.
- You will also get to try writing more complicated/advanced functions that mimic real-life operations.

We will walk through some example questions in class together as a demo and we will leave the rest as homework. We will go over solutions in the next class to make sure everyone is on the same page so you can move on to the next section with the correct setup.

## Context:

Imagine you are developing a simpler version of an online ordering system like Snackpass for a restaurant. The system needs to handle different entities such as customers, orders, menu items, and some order details. This system will allow customers to browse the menu, modify customer information, place orders, and track each day's total sales.

### Setup:

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run src/index.ts
```

To run tests:

```bash
bun vitest
```

## Part 1: Building a Drizzle Schema

Given the following setup and relations, create your database schema:

# Tables

**Customer**

- id: This is the primary key for this table. It can be a default integer that is automatically incremented by the sqlite database whenever a new record is created.
- name: This should be a non-Null string.
- email: This should be a non-Null string.
- phone: This should be a non-Null string.

**MenuItem**

- id: This is the primary key for this table. It can be a default integer that is automatically incremented by the sqlite database whenever a new record is created.
- name: This should be a non-Null string.
- price: This should be a non-Null real number.

**Order**

- id: This is the primary key for this table. It can be a default integer that is automatically incremented by the sqlite database whenever a new record is created.
- totalAmount: This should be a non-Null real number.
- orderDate: This should be a non-Null string.

**OrderItem**

- id: This is the primary key for this table. It can be a default integer that is automatically incremented by the sqlite database whenever a new record is created.
- orderId: This is a foreign key that corresponds with the "id" column of the Order table.
- menuItemId: This is a foreign key that corresponds with the "id" column of the MenuItem table.
- quantity: This should be a non-Null real number.

# Relationships

- Each Order can have multiple OrderItems, but each OrderItem is linked to one Order.
- Each MenuItem can correspond to multiple OrderItems, but each OrderItem can only be matched to one MenuItem.
- Each Customer can have multiple Orders, and each Order can include multiple Customers. Hint: This relationship can be represented by a third junction table **customersToOrders**.

## Part 2: CRUD Operations

Using the schema defined in Part 1, write functions to perform the following CRUD operations and use Zod to validate the inputs for these functions to ensure data integrity.:

- **Create:** Add new records to the customers, menu_items, orders, and order_items tables.
- **Read:** Retrieve data from these tables. Implement functions to get all records and to get a record by its ID.
- **Update:** Update existing records in the tables.
- **Delete:** Remove records from the tables.

## Part 3: Advanced functions and migrations

Write more complex functions to perform operations such as filtering, aggregating, data transactions, and pivoting:

- **Question 1:** Create a function to place an order, which involves inserting records into orders and order_items tables as a single transaction. Use the schema "placeOrderSchema" given.
- **Question 2:** Retrieve all orders for a specific customer sorted by the order's creation date.
- **Question 3:** Retrieve all orders for a specific day and find the total sales for that day. Use the schema "getOrdersForDaySchema" given.
