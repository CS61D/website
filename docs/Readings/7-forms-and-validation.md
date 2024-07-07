# Lecture 7: Forms and Validation

## Objective:
You will learn how to create and manage forms in React using React Hook Form, including typing forms, registering inputs, handling submissions, and validating inputs. You will also learn to implement custom validation using Zod. By the end, you will build a form with various input types, validation, and respond to form state changes.

## Duration:
idk

---

## 7.1: Introduction to React Hook Form

### Learning Goals:
- Understand the benefits of using React Hook Form
- Learn the basics of setting up a form with React Hook Form

### Outline:
1. **Introduction to React Hook Form**
   - What is React Hook Form?
   - Benefits of using React Hook Form over traditional form handling

2. **Setting Up a Basic Form**
   - Installing React Hook Form
   - Creating a simple form with basic inputs

### Activities:
- Set up a basic form with React Hook Form
- Register basic inputs and handle form submission

### Resources:
- [React Hook Form Documentation](https://react-hook-form.com/)

---

## 7.2: Typing Your Form with TypeScript

### Learning Goals:
- Learn how to type forms in React Hook Form using TypeScript
- Understand the importance of type safety in forms

### Outline:
1. **Typing Forms in React Hook Form**
   - Defining form field types
   - Using TypeScript to ensure type safety

2. **Practical Examples**
   - Creating a typed form with TypeScript
   - Handling form data with type safety

### Activities:
- Create a typed form with various input fields
- Ensure type safety in form handling

### Resources:
- [React Hook Form with TypeScript](https://react-hook-form.com/get-started#TypeScript)

---

## 7.3: Registering Inputs

### Learning Goals:
- Understand how to register inputs in React Hook Form
- Learn the different methods of registering inputs

### Outline:
1. **Registering Inputs**
   - Using the `register` function
   - Registering different input types

2. **Practical Examples**
   - Registering text, checkbox, and select inputs
   - Handling input changes

### Activities:
- Create a form with various input types
- Register inputs and handle changes

### Resources:
- [Register Inputs](https://react-hook-form.com/get-started#Registerfields)

---

## 7.4: Handling Submissions

### Learning Goals:
- Learn how to handle form submissions in React Hook Form
- Understand how to process form data on submission

### Outline:
1. **Form Submission**
   - Handling the `onSubmit` function
   - Processing and validating form data

2. **Practical Examples**
   - Submitting a form and displaying submitted data
   - Handling submission errors

### Activities:
- Create a form with a submission handler
- Display submitted data on form submission

### Resources:
- [Handle Submissions](https://react-hook-form.com/get-started#HandleSubmit)

---

## 7.5: Validation and Errors

### Learning Goals:
- Understand how to validate form inputs in React Hook Form
- Learn to handle and display validation errors

### Outline:
1. **Validation in React Hook Form**
   - Using built-in validation rules
   - Displaying validation errors

2. **Custom Validation**
   - Writing custom validation functions
   - Using validation libraries like Zod

### Activities:
- Create a form with built-in validation rules
- Display and handle validation errors

### Resources:
- [Validation](https://react-hook-form.com/get-started#Applyvalidation)

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
import React from 'react';
import { useForm } from 'react-hook-form';

function BasicForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} placeholder="First Name" />
      <input {...register('lastName')} placeholder="Last Name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicForm;
