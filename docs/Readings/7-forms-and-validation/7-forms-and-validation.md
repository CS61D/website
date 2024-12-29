# Lecture 7: Forms and Validation

## Objective:

You will learn how to create and manage forms in React using React Hook Form, including typing forms, registering inputs, handling submissions, and validating inputs. You will also learn to implement custom validation using Zod. By the end, you will build a form with various input types, validation, and respond to form state changes.

## Duration:

Aiming for 45 min to 1 hour

---

## 7.1: Introduction to Forms

### Learning Goals:

- Learn the basics of the pure Form HTML element
- See a few useful form elements

### Outline:

1. **Introduction to Forms**

   - What is the Form element?

2. **Form Elements**
   - Input and Label
   - Select and Button

### Activities:

- Set up a basic pure HTML form

### Resources:

- [HTML Form Elements](https://www.w3schools.com/html/html_form_elements.asp)

---

## 7.3: React Hook Form

### Learning Goals:

- Dissect the `useForm` custom Hook
- Learn how to handle form submissions
- Understand how to register inputs
- Understand how to validate form inputs
- Learn to handle and display validation errors
- Learn how to type forms with TypeScript

### Outline:

1. **Core Functionality**

   - Handling the `onSubmit` function with `handleSubmit`
   - Registering different input types with the `register` function
   - Defining form field types in TypeScript

2. **Practical Examples**
   - Registering various form input types
   - Handling input changes
   - Creating a typed form with TypeScript

### Activities:

- Create a typed form with built-in validation rules
- Display and handle validation errors

### Resources:

- [React Hook Form](https://react-hook-form.com/)

---

## 7.6: Custom Validation with Zod

### Learning Goals:

- Learn how to implement custom validation using Zod
- Integrate Zod with React Hook Form for enhanced validation

### Outline:

1. **Introduction to Zod**

   - What is Zod?
   - Benefits of using Zod for validation

2. **Integrating Zod with React Hook Form**
   - Setting up Zod schema for form validation
   - Using Zod with React Hook Form

### Activities:

- Create a form with Zod validation schema
- Handle custom validation and display errors

### Resources:

- [Zod Documentation](https://zod.dev/)
- [React Hook Form with Zod](https://react-hook-form.com/get-started#SchemaValidation)

---

## Reading Material with Examples

### Setting Up React Hook Form

```jsx
// BasicForm.js
import React from "react";
import { useForm } from "react-hook-form";

function BasicForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First Name" />
      <input {...register("lastName")} placeholder="Last Name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicForm;
```
