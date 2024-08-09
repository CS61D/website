---
title: Online Ordering System
metadata:
  - Can be provided
  - as: objects
    or: arrays
---

---

## Tech Stack

- Drizzle ORM + Drizzle Kit
- SQLite
- Zod

## Resources

- [Drizzle Kit Overview](https://orm.drizzle.team/kit-docs/overview)
- [Drizzle Queries](https://orm.drizzle.team/docs/rqb#declaring-relations)

## Objectives

- Learn to set up a database schema using an ORM like Drizzle
- Learn to write functions to interact with a database
- Learn to validate data with Zod to ensure data integrity
- Learn to perform database migrations to keep our database schema updated

## Description

This is a 3-part assignment and will be completed one section at a time after each lecture (out of 3 lectures total).

- You will start by setting up a database schema given our context with specific requirements.
- You will then learn to perform CRUD operations on the database by writing functions, validating the data, and doing migrations.
- You will also get to try writing more complicated/advanced functions that mimic real-life operations.

We will walk through some example questions in class together as a demo and we will leave the rest as homework. We will go over solutions in the next class to make sure everyone is on the same page so you can move on to the next section with the correct setup.

## Context

Imagine you are developing a simpler version of an online ordering system like Snackpass for a restaurant. The system needs to handle different entities such as customers, orders, menu items, and some order details. This system will allow customers to browse the menu, modify customer information, place orders, and track each day's total sales.

### Setup

To get started, clone the repository using the following command:

```bash
git clone git@github.com:CS61D/Assignment-Starter-Databases.git
cd Assignment-Starter-Databases
```

To install dependencies:

```bash
bun install
```

Feel free to test your code by adding functions in the src/index.ts file. To run:

```bash
bun run src/index.ts
```

When you are ready, run tests:

```bash
bun vitest
```

## Part 1: Schema Definitions

### Customers

- **Schema**: `customerSchema`
  - `name`: (string) The name of the customer. Must be a non-empty string.
  - `email`: (string) The email address of the customer. Must be a valid email address.
  - `phone`: (string) The phone number of the customer. Must be a non-empty string.

### Menu Items

- **Schema**: `menuItemSchema`
  - `name`: (string) The name of the menu item. Must be a non-empty string.
  - `price`: (number) The price of the menu item. Must be a positive number.

### Orders

- **Schema**: `orderSchema`
  - `totalAmount`: (number) The total amount of the order. Must be a positive number.
  - `orderDate`: (string) The date of the order. Must be in the format `YYYY-MM-DD`.

### Order Items

- **Schema**: `orderItemSchema`
  - `orderId`: (number) The ID of the order. Must be a positive number.
  - `menuItemId`: (number) The ID of the menu item. Must be a positive number.
  - `quantity`: (number) The quantity of the menu item ordered. Must be a positive number.

### Customers to Orders

- **Schema**: `customersToOrdersSchema`
  - `customerId`: (number) The ID of the customer. Must be a positive number.
  - `orderId`: (number) The ID of the order. Must be a positive number.

:::note

### **Relationships**

- Each Order can have multiple OrderItems, but each OrderItem is linked to one Order.
- Each MenuItem can correspond to multiple OrderItems, but each OrderItem can only be matched to one MenuItem.
- Each Customer can have multiple Orders, and each Order can include multiple Customers. Hint: This relationship can be represented by a third junction table customersToOrders.
  :::

## Part 2: CRUD Functions

Using the schema defined in Part 1, write functions to perform the following CRUD operations and use Zod to validate the inputs for these functions to ensure data integrity.

### Customers

1. **Create a Customer**

   - **Function**: `createCustomer`
   - **Parameters**:
     - `db`: Database instance.
     - `data`: An object adhering to `customerSchema`.
   - **Description**: Inserts a new customer into the `customers` table.

2. **Get a Customer by Name**

   - **Function**: `getCustomerByName`
   - **Parameters**:
     - `db`: Database instance.
     - `name`: Customer's name.
   - **Description**: Retrieves a customer by their name from the `customers` table.

3. **Update a Customer**

   - **Function**: `updateCustomer`
   - **Parameters**:
     - `db`: Database instance.
     - `name`: The current name of the customer.
     - `data`: An object with fields to update, adhering to `customerSchema`.
   - **Description**: Updates customer details based on their name.

4. **Delete a Customer**
   - **Function**: `deleteCustomer`
   - **Parameters**:
     - `db`: Database instance.
     - `name`: Customer's name.
   - **Description**: Deletes a customer from the `customers` table.

### Menu Items

1. **Create a Menu Item**

   - **Function**: `createMenuItem`
   - **Parameters**:
     - `db`: Database instance.
     - `data`: An object adhering to `menuItemSchema`.
   - **Description**: Inserts a new menu item into the `menuItems` table.

2. **Get a Menu Item by Name**

   - **Function**: `getMenuItemByName`
   - **Parameters**:
     - `db`: Database instance.
     - `name`: Name of the menu item.
   - **Description**: Retrieves a menu item by its name from the `menuItems` table.

3. **Update a Menu Item by Name**

   - **Function**: `updateMenuItemByName`
   - **Parameters**:
     - `db`: Database instance.
     - `name`: Current name of the menu item.
     - `data`: An object with fields to update, adhering to `menuItemSchema`.
   - **Description**: Updates menu item details based on its name.

4. **Delete a Menu Item by Name**
   - **Function**: `deleteMenuItemByName`
   - **Parameters**:
     - `db`: Database instance.
     - `name`: Name of the menu item.
   - **Description**: Deletes a menu item from the `menuItems` table.

### Orders

1. **Create an Order**

   - **Function**: `createOrder`
   - **Parameters**:
     - `db`: Database instance.
     - `data`: An object adhering to `orderSchema`.
   - **Description**: Inserts a new order into the `orders` table.

2. **Get All Orders**

   - **Function**: `getOrders`
   - **Parameters**:
     - `db`: Database instance.
   - **Description**: Retrieves all orders from the `orders` table.

3. **Get an Order by ID**

   - **Function**: `getOrderById`
   - **Parameters**:
     - `db`: Database instance.
     - `id`: ID of the order.
   - **Description**: Retrieves an order by its ID from the `orders` table.

4. **Update an Order**

   - **Function**: `updateOrder`
   - **Parameters**:
     - `db`: Database instance.
     - `id`: ID of the order.
     - `data`: An object with fields to update, adhering to `orderSchema`.
   - **Description**: Updates order details based on its ID.

5. **Delete an Order**
   - **Function**: `deleteOrder`
   - **Parameters**:
     - `db`: Database instance.
     - `id`: ID of the order.
   - **Description**: Deletes an order from the `orders` table.

### Order Items

1. **Create an Order Item**

   - **Function**: `createOrderItem`
   - **Parameters**:
     - `db`: Database instance.
     - `data`: An object adhering to `orderItemSchema`.
   - **Description**: Inserts a new order item into the `orderItems` table.

2. **Get Order Items by Order ID**

   - **Function**: `getOrderItemsByOrderId`
   - **Parameters**:
     - `db`: Database instance.
     - `orderId`: ID of the order.
   - **Description**: Retrieves all order items for a specific order.

3. **Update an Order Item**

   - **Function**: `updateOrderItem`
   - **Parameters**:
     - `db`: Database instance.
     - `orderId`: ID of the order.
     - `menuItemId`: ID of the menu item.
     - `data`: An object with fields to update, adhering to `orderItemSchema`.
   - **Description**: Updates order item details based on order ID and menu item ID.

4. **Delete Order Items by Order ID**
   - **Function**: `deleteOrderItemsbyOrderId`
   - **Parameters**:
     - `db`: Database instance.
     - `orderId`: ID of the order.
   - **Description**: Deletes all order items for a specific order.

## Part 3: Advanced functions

Write more complex functions to perform operations such as filtering, aggregating, data transactions, and pivoting:

### Question 1: Place an Order

- **Function**: `placeOrder`
- **Description**: Places an order for a customer. This function calculates the total amount of the order, creates the order, inserts order items, and links the customer to the order. The operation is performed within a database transaction to ensure consistency.
- **Parameters**:
  - `db`: Database instance.
  - `data`: An object adhering to `placeOrderSchema`, which includes:
    - `customerId`: The ID of the customer placing the order.
    - `items`: An array of items to be included in the order. Each item includes:
      - `menuItemId`: The ID of the menu item.
      - `quantity`: The quantity of the menu item ordered.
- **Returns**: An object containing:
  - `success`: A boolean indicating whether the order was placed successfully.
  - `orderId`: The ID of the newly created order.

### Question 2: Retrieve Orders for a Specific Customer

- **Function**: `getOrdersForCustomer`
- **Description**: Retrieves all orders for a specific customer, sorted by the order's creation date in descending order.
- **Parameters**:
  - `db`: Database instance.
  - `customerId`: The ID of the customer whose orders are to be retrieved.
- **Returns**: A list of orders for the specified customer, sorted by order date (newest first).

### Question 3: Retrieve Orders for a Specific Day and Calculate Total Sales

- **Function**: `totalSale`
- **Description**: Retrieves all orders for a specific day and calculates the total sales for that day.
- **Parameters**:
  - `db`: Database instance.
  - `data`: An object adhering to `getOrdersForDaySchema`, which includes:
    - `date`: The date for which orders are to be retrieved (in `YYYY-MM-DD` format).
- **Returns**: An object containing:
  - `ordersList`: A list of orders for the specified date.
  - `totalSales`: The total sales amount for the specified date.
