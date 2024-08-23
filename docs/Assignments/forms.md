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

:::tip
On the example form (and in your form eventually), the submitted form data is logged to console upon clicking the submission button (but only when the data is valid. To see the submitted form data, open the Inspect Element tool in your web browser by right-clicking on the form page and selecting Inspect. You can also use keyboard shortcuts:
* Mac: Press Command+Option+i
* Windows or Linux: Press Ctrl+Shift+i

Then, click the Console tab. When you click the submission button, if your data passes validation, it will show up here.
:::

Your form will contain various different types of input fields that a user can fill out with their information. Some should be required fields which are fields that the user must fill out. Some fields should have special rules for what counts as a valid input. Your form should also display error messages. See more information below.

---

### Setup

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

The skeleton code already provides submission logic for you, including an `onSubmit` function. When the form is submitted, if the data is found valid by `handleSubmit`, `onSubmit` calls `console.log()` and logs the submitted form data to console. **Please do not change the provided `onSubmit` function.**

#### Submission Button

Finally, add a submission button at the bottom of your form.

:::tip
Again, to see the submitted form data, open the Inspect Element tool in your web browser by right-clicking on the form page and selecting Inspect. You can also use keyboard shortcuts:
* Mac: Press Command+Option+i
* Windows or Linux: Press Ctrl+Shift+i

Then, click the Console tab. When you click the submission button, if your data passes validation, it will show up here.

**This is a good way to check the correctness of your form.**
:::

---

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

With that, congrats on completing your React Hook Form + Zod form!

---

## Part 3 (Optional): Using External UI Libraries

At this point, you can optionally give your form a much more polished look and feel by incorporating UI components from powerful external UI libraries. One external UI library that we recommend (and will be using as an example for the rest of this assignment) is [Material UI (MUI)](https://mui.com/material-ui/).

In this part, you will replace the basic form elements (`<input>`, `select`, `label`, and `button`) with better-looking components from the MUI library.

While you do not have to do this section, we recommend playing around a little bit with it, since most forms (and apps in general) will use some external UI library.

### Install and Import MUI

Install MUI with this command:
```bash
bun install @mui/material @emotion/react @emotion/styled
```
`@emotion/react` and `@emotion/styled` are basically utility libraries that MUI uses itself.

The next thing to do is to import components from the MUI library. Add the following imports to your `Forms.tsx` file:

```tsx
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
```

### Components Breakdown

Each of these MUI components replaces the following elements you had been using:

* **`TextField`**: Replaces `<input>` fields for text input, password input, and date input.
* **`Select` and `MenuItem`**: Replaces `<select>` and `<option>` respectively for dropdown selection.
* **`InputLabel`**: Replaces `<label>`.
:::tip
When using `TextField`, you don't need to explicitly include `InputLabel` because `TextField` automatically handles the label internally. You only need to manually add an `InputLabel` for the `<select>`/`Select` field (and other components which we are not using, like `Input`). 
:::
* **`FormControl`**: Wraps around the `Select`/`MenuItem` components.
:::info
The `FormControl` component in MUI manages layout, labels, and error messages for form components. We use it with components like `Select` because things like label handling and helper text (e.g., your "Required" error messages) are not integrated into the component itself. 

In contrast, `TextField` already takes care of these features internally, so it doesn't require `FormControl` for managing its label and helper text.
:::
* **`FormControlLabel` and `Checkbox`**: Holds the subscription message/label and replaces the checkbox `<input>` field, respectively. 
* **`Button`**: Replaces `<button>` for your submit button.


#### TextField/Email Field example
Here is an example, where the email field is refactored to use the `TextField` MUI component:

```tsx
<TextField
{...register("email")}
    id="email"
    label="Email Address"
    variant="outlined"
    error={!!errors.email}
    helperText={errors.email ? errors.email.message : ""}
    fullWidth
/>
```
**Props Breakdown**
* Register the field like before.
* As previously mentioned, `TextField` takes in a `label`, rather than there being another label element/component.
* `variant="outlined"`: The textbox has a rectangular outline. The label fills the box when empty, and it floats above on the line when the user types in the box.
* `error={!!errors.email}`: This prop is used to indicate whether there's an error.
    * `errors.email` is an object containing validation errors related to the `email` field.
    * `!!errors.email` converts this object to a boolean: true if there's an error, and false if there isn't. (The 2nd ! cancels out the first one, which is just there to convert to a boolean).
    * When `error={true}`, MUI styles the input field with an error state (e.g., changing the border color to red).
* `helperText={errors.email ? errors.email.message : ""}`: This conditionally renders the helper message (i.e., email error message).
* `fullWidth`: This prop makes the input field take up the full width of its container, rather than just the length of its content.

#### Select/Role Field example
Here is an example with the role field, using `FormControl`, `InputLabel`, `Select`, and `MenuItem`.

**Props Breakdown**
* `FormControl`: `fullWidth` and `error` are passed in to this component, functioning like before. 
* `InputLabel`'s `id` prop should be the same as `Select`'s `labelId` prop.

```tsx
<FormControl fullWidth error={!!errors.role}>
    <InputLabel id="role-label">Role</InputLabel>
        <Select
        {...register("role")}
        id="role"
        labelId="role-label"
        label="Role"
        defaultValue=""
        >
            {/* MenuItems here */}
        <Select>
</FormControl>
```

#### Date of Birth Field example
Finally, here is a fairly useful prop for the date of birth field: `InputLabelProps`.

**Prop Breakdown**
`InputLabelProps={{ shrink: true }}`:
* `InputLabelProps`: This prop lets you to pass additional properties to the above `InputLabel` component.
* `shrink: true`: This forces the label to stay in its "shrunken" position (i.e., above the input field) always. This is to get the label out of the way of the `mm/dd/yyyy` hint.

```tsx
<TextField
    {...register("birthDate")}
    id="birthDate"
    ...
    InputLabelProps={{ shrink: true }}
    ...
/>
```

We leave the task of refactoring the subscription checkbox field and the submission button up to you. 

Again, check out the [MUI docs](https://mui.com/material-ui/)!

With that, congrats on completing your React Hook Form + Zod + MUI form!
