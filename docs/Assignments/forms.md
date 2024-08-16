---
title: "User Creation Form"
sidebar_position: 5
metadata:
  - Can be provided
  - as: objects
    or: arrays
---

---

## Overview

In this assignment, you will be creating a user creation form with React Hook Forms and Zod validation. At the end of the project, it should look something like this: [User Sign-Up](https://forms.education.codifyberkeley.org).

Your form will contain various different types of input fields that a user can fill out with their information. Some should be required fields which are fields that the user must fill out. Some fields should have special rules for what counts as a valid input. Your form should also display error messages. See more information below.

---

### Setup

Follow the [assignment setup workflow] to pull the assignment from the skeleton. 

To get started, clone the repository using the following command:

```bash
git clone git@github.com:CS61D/Assignment-Starter-Forms.git
cd Assignment-Starter-Forms
```

#### Installing Dependencies

To install dependencies:

```bash
bun install
```

#### Run

In the project directory, you can run:

```bash
bun run dev
```

This will run the app in development mode. Open [http://localhost:5173](http://localhost:5173/) to view it in the browser. The page will reload if you make edits.

---

### Structure

Unlike the previous TodoList assignment in which you built 3 components that were each fairly involved, for this assignment you will only be working in 2 files/components: `App.tsx` and `Form.tsx`. **A large majority of your work will be in `Form.tsx`.**

`App.tsx` will contain a bare bones `App` component. `Form.tsx` will contain your actual `Form` component, with all your form fields, validation logic, submission handling, etc.

---

### Form Fields

:::info
For form data validation, we suggest using Zod validation methods, rather than React Hook Form validation through `register`. The rest of the spec and the skeleton code will reflect this.
:::

Your form must include the following 8 fields into which a user can input their information. Each field should have the following validation rules. 

Some fields will be "required" fields, which are fields that the user *cannot* leave blank when they submit the form. "Optional" fields are fields that the user *can* leave blank.

:::warning
You must include all 8 fields in your form, even those that are "optional".
:::

#### 1. Email (required)
* This should be an `<input>` field of `type="email"`.
* **Email formatting** - Emails must contain the following in order:
    * A series of characters (alphanumeric, dots, underscores, hyphens) before the "@" symbol.
    * An "@" symbol.
    * A domain name (alphanumeric characters, dots, hyphens) after the "@" symbol.
    * A top-level domain (like .com, .org, etc.) with at least two letters (alphabetic characters).
:::tip
We suggest using Zod's `.email()` validation method, rather than manually enforcing email formatting (e.g. with regex).
:::

#### 2. First Name (required)
* This should be an `<input>` field of `type="text"`.

#### 3. Last Name (required)
* This should be an `<input>` field of `type="text"`.

#### 4. Role (optional)
* This should be a `<select>` field.
* The user should be able to select a role out of **at least 3 options**.
    * Ex. "Student", "Teacher", "Parent/Guardian"
* **Additionally, you must have a placeholder/hint option.**
    * Example hint: "---Select One---"
    * The hint must be the default option that the `select` field starts off on.
    * Its value must be the empty string (`""`).

#### 5. Date of Birth (optional)
* This should be an `<input>` field of `type="date"`.
* The user must *not* be able to submit a birth date that is in the future.
:::note
It's ok if the user can physically click/type a date that is in the future. The data just has to be found invalid upon submission.
:::

#### 6. Create Password (required)
* This should be an `<input>` field of `type="password"`.
* **The user's password must:** 
    * Be between 8-20 characters
    * Contain at least one lowercase letter
    * Contain at least one uppercase letter
    * Contain at lease one digit

#### 7. Confirm Password (required)
* This should be an `<input>` field of `type="password"`.
* The user must enter the same password in the confirmation field as in the creation field.

#### 8. Subscription opt-in/out (optional)
* This should be an `<input>` field of `type="checkbox"`.
* This field is optional in the sense that the user can choose to leave this checkbox unchecked. You can choose whether or not to call Zod's `.optional()` method on this field.

---

## Part 1: Form Content

You will first implement the form without any validation yet. All work will be in the `Form.tsx` file.

In this part, you'll add a few missing imports, define your Zod schema, and add typing. You'll do some setup with React Hook Form before finally filling out your form with form elements, including a submission button.

### Schema Definition and Setup

First, include the following import statements to the top of the `Form.tsx` file.

```tsx
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
```

Next, fill out your form's Zod schema definition. The schema defines the shape of the form data. For now, it can just contain the form's fields and each field's type. [Part 2](#part-2-validation) will add validation.

```tsx
const schema = z.object({
 // form fields here
})
```

Next, infer off the schema to create your custom type.
```tsx
type Inputs = null; // replace the null
```

Finally, within the `Form` component, grab any needed return props/functions from `useForm`. Remember to pass your custom type into `useForm`. Pass `zodResolver` into `useForm` as well.

```tsx
export default function Form() {
 // Call useForm here
...
```

### Form Elements

Now that you've taken care of your imports, defined your schema, and gotten everything you need from `useForm`, it's time to actually flesh out your form.

For each field, include:
1. A label
2. A form element for taking in user input

```tsx
<form onSubmit={handleSubmit(onSubmit)}>
 {/* form fields here */}
<form>
```

Remember to `register` each field.

The skeleton code already provides submission logic for you. **Please do not change the provided `onSubmit` function.**

#### Submission Button

Finally, add a submission button at the bottom of your form.

## Part 2: Validation

In this part, you will add validation rules. It's recommended that you use Zod validation methods for this, rather than validation with React Hook Form through the `register` function. The validation rules are outlined in the [Form Fields](#form-fields) section further above.

```tsx
const schema = z.object({
 // call validation methods here
}); // and here
```

### Error Messages

Write custom error messages for each validation rule. Display error messages below the field they correspond to. 

**Each field only needs to have one error message displayed below it at a time.** For example, if the user inputs a password that doesn't have both an uppercase letter and a digit, you only need to display the error message of one of the criteria.

### Required/Optional Marking

Finally, add some sort of visual marker or note that lets users be able to tell if a field is required or not. You can do this in `App.tsx` as well as `Form.tsx`.