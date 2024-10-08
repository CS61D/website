---
sidebar_position: 5
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# 5. Forms

## Assignment Links

* [Starter Code](https://github.com/CS61D/Assignment-Starter-Forms)
* [Finished Solution](https://forms.61d.org/) (what you will build)

## Assignment Overview

You are a front-end developer for a hot new ed-tech startup. You are tasked with creating a sign up form for new users to create accounts on the platform. You need to make sure that the form is user-friendly, responsive, and most importantly, validates user input before sending it to the backend.

First, take a look at the [finished solution](https://forms.61d.org/) to see what you will be building. Try filling in the form with both valid an invalid data to see how the form behaves. Each individual field has its own rules, and error messages explain what went wrong when a user tries to submit invalid data.

You will start by defining a [zod](https://zod.dev/) validation schema to define the shape of the form data and the validation rules for each field. Then we will integrate it with [React Hook Form](https://react-hook-form.com/) to handle the form state, and associate inputs with fields in our schema. Finally, we will show how to use pre build [shadcn](https://ui.shadcn.com/) components with React Hook Form to create a more polished and professional look.

You will only have to edit `validator.ts`, `Form.tsx`, and `ControlledForm.tsx` in parts 1-3 respectively. 

### Setup

Install the dependencies:
  
```bash
bun install
```

Start the development server:
```bash
bun dev
```

And then view the starter code at [http://localhost:5173/](http://localhost:5173/)

## Part 1: Form Content and Validation

We want our form to have the following fields and rules. Open up `validator.ts` in `src/lib/` and add each field to the zod validator. Remember that zod fields are required by default.

1. **firstName**: A required, nonempty string
2. **lastName**: A required, nonempty string
3. **email**: A required email address. Zod has a [built in](https://zod.dev/?id=strings) `.email()` method that you can use to validate email addresses.
4. **role**: An optional field that must be one of "student", "educator", or "parent/guardian". Use a [zod enum](https://zod.dev/?id=zod-enums) to ensure that the role can't just be any arbitrary string.
5. **subscribe**: An required boolean field
6. **birthDate**: An optional field that must be a valid date in the past. You can use the `.date()` method from zod to validate this.
7. **password**: A required field that must pass the following rules
    * Between 8-20 characters
    * At least one uppercase letter
    * At least one lowercase letter
    * At least one digit
These properties can be enforced through [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions), also known as regex, which zod supports with the `.regex()` operator. The following regex patterns will be useful.
    * At least one uppercase letter: `/[A-Z]/`
    * At least one lowercase letter: `/[a-z]/`
    * At least one digit: `/[\d]/`
Minimum and maximum length can be enforced with the `.min()` and `.max()` methods respectively.

8. **confirmPassword**: A required field that must match the password field. We don't know if this field passes validation without also looking at another field, we need to use the `.refine()` method to validate this field in context of the other fields in the form. When refining this field, make sure that you specify the error exists on the `confirmPassword` path and is not just a general form error. [This example](https://zod.dev/?id=customize-error-path) from the docs may be helpful.

:::note
Native HTML date inputs return a string, instead of a Date object, which will cause the zod validation to fail. To fix this, zod has functionality to [convert the string into a date](https://zod.dev/?id=coercion-for-primitives) before validating it. Instead of using `z.date()`, use `z.coerce.date()` to validate the date.
:::

:::important
Make sure that required string fields do not pass validation if they are empty. You can use the `.min()` method to enforce a minimum length of 1 character.
:::

When you think your validation schema is correct, try testing it out in the [zod playground](https://zod-playground.vercel.app/) to see if it behaves as expected. Or you can wait until building your own form and test it there.


### Error messages

You may do this part now, or come back to it later. It is recommended that you finish part 2 first, as you will have a better idea of what error messages you need to display.

A validation error is only useful if the user knows what is wrong. As you are testing your form, in the playground or in your own form, override the default error messages with custom messages for anything that is not immediately clear. Regex expressions especially need human readable messages to explain what the regex is testing for and why it failed.

You can pass in a custom error message as a second argument to the zod method that you are using.

```tsx
const requiredMsg = "Required";

export const formSchema = z
  .object({
    firstName: z.string().min(1, requiredMsg),
  })
```

## Part 2: HTML Form

Open `Form.tsx` located in `src/components/Form.tsx`. This file contains the form that you will be working with. All imports are already written for you.

### Part 2.1: Form Setup

A form is declared for you using the `useForm` hook from React Hook Form. This hook returns a bunch of useful functions and properties that you can use to manage your form. We have destructured the `register`, `handleSubmit`, and `errors` properties of the form.

<Tabs>
  <TabItem value="destructured" label="Destructured" default>
    ```tsx title="Form.tsx"
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>({
      resolver: zodResolver(schema),
    });
    ```
  </TabItem>
  <TabItem value="not" label="Not Destructured">
    ```tsx title="Form.tsx"
    const form = useForm<Inputs>({
      resolver: zodResolver(schema),
    });
    ```
  </TabItem>
</Tabs>

We have also used the `zodResolver` to ensure that our form uses our zod schema for validation. Depending on if the validation passes, a custom `onSubmit` function or `onError` is called.

However, we also need to properly type the `Inputs` type to define what fields the form should expect. Fortunately, once you have a zod schema, you can use the `z.infer` method to automatically generate the type for you based on the schema. 

```tsx
const mySchema = z.object({
    name: z.string("name"),
    age: z.number("age").
});

type Inputs = z.infer<typeof mySchema>;
```

Define the `Inputs` type based on the zod schema you created in part 1 so that our form knows what fields to expect.

### Part 2.2: Registering Form Fields

We already have an input created for the first name field. In order to associate it with the `firstName` field in our schema, we need to use the `register` function provided by React Hook Form. 

```tsx
<input
  {...register("firstName")}
  id="firstName"
  type="text"

/>
```

Create form inputs for the rest of the fields in the schema and register them. 

<details>
  <summary>Hint: password and checkbox inputs</summary>

Password and Checkbox inputs can be created by passing `type="password"` and `type="checkbox"` respectively to the input element. 
</details>

<details>
  <summary>Hint: role select</summary>

Dropdowns can't be created with an input element. Instead, use a `select` element with `option` elements inside. Make sure to register the `select` element instead of the `option` elements.

```tsx
<select {...register("role")} id="role">
  <option value="student">Student</option>
  <option value="educator">Educator</option>
  <option value="parent/guardian">Parent/Guardian</option>
</select>
```
</details>

After you have created all the form fields, you can test your form by filling it out and submitting it. The button with `type="submit"` will trigger the form `onSubmit` handler. Then, the `handleSubmit` function will validate the form and call the `onSubmit` function if the form is valid.

### Part 2.3: Error Messages

Currently, we are not displaying any error messages when the form is invalid. If a field has a validation error, our `error` object will have an error object on the field's path. You can use this object to display an error message below the field.

```tsx
{errors.firstName && (
  <p className="text-red-500">{errors.firstName.message}</p>
)}
```

If there is no error, the `errors.firstName` object will be `undefined`, and the error message will not be displayed. 

The error messages are automatically generated by zod, but they are not the most user friendly. If you have not already, return to [Error Messages](#error-messages) to create custom error messages for each field.

Congrats! You now have a fully functional sign up form! If you want, you can also destructure the `reset` function from the `useForm` hook and add it to the `onSubmit` function to clear the form after it is submitted.

## Part 3: Controlled Form with Shadcn Components

After deploying the form, your boss tells you that sign ups are not converting because it looks too plain. They want you to spend the next two weeks redesigning it to look more professional, but you have a trip to Hawaii planned tomorrow. 

In 99% of cases, creating beautiful frontend components from scratch is a waste of time. There are a million pre-built libraries of components that are more than adequate to get the job done. However, pre-built component libraries like [Material UI](https://mui.com/material-ui/) have limits to how much they can be customized. For that reason, 61D uses [shadcn](https://ui.shadcn.com/) components. They are not a dependency that is installed and has to be updated, but instead a set of components that are designed to be copied and pasted into your project. Since the source code of the components literally lives in your project, you can customize them to your heart's content. Further, seeing the actual source code of professional grade components is a great way to learn best practices in React.

All of the components in the `src/components/ui` directory are shadcn components. We have almost everything we need, but we still need the shadcn input component. Run the following command at the root of your project:

```bash
bunx --bun shadcn@latest add input
```

As you can see, nothing was changed in your `package.json` file. Instead, and new file was created in `src/components/ui/input.tsx`. This is the shadcn input component.

### Using the Components

Open up `ControlledForm.tsx` located in `src/components/ControlledForm.tsx` and uncomment the Input component import.

Shadcn already has components that properly handle the behaviors of form errors and labels, you just need to wrap them with their corresponding components. The `register` method only works on native html inputs, but React Hook Form provides a `control` object on the form that can be passed into an input component to turn it into a controlled component.

Use this example input to create the rest of the form fields (except the date of birth). The select and checkbox components are already implemented, you just have to add the correct `name` property for each of them.

```tsx title="ControlledForm.tsx"
<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
        <FormLabel>Email Address *</FormLabel>
        <FormControl>
        <Input
            placeholder="example@email.com"
            {...field}
        />
        </FormControl>
        <FormMessage />
    </FormItem>
  )}
/>
```

This example along with examples for controlling form inputs are on the [shadcn docs](https://ui.shadcn.com/docs/components/input). Copy and paste the [controlled date picker example](https://ui.shadcn.com/docs/components/date-picker#form) for the date of birth field. 

As important as your form now looking better, it is also more accessible. Shadcn components are compliant with [Aria accessibility standards](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) out of the box, meaning that users with disabilities can use your form with screen readers. Compliance with these standards is tricky, but shadcn has done the work for you.

Congrats! You now have a fully functional and professional looking sign up form in no time at all! Have fun in Hawaii!

## Optional Bonus: Forms with Arrays and Conditional Fields

Often times, we need to deal with forms that take in arrays of data. Imagine you are submitting attachments to a job application, and you had to upload a new submission for every additional file? For a better use experience, we could expect that:

1. An infinite number of items can be added to the form
2. Individual items should be able to be added, deleted, or modified independently

Fortunately, React Hook Form provides another hook we can use to handle this: [useFieldArray](https://react-hook-form.com/docs/usefieldarray). Let's add the ability for a parent/guardian to add multiple children to their account when they sign up.

You can preview what we are going to do in this part by selecting "Parent/Guardian" in the role dropdown of the shadcn form on the [finished solution](https://forms.61d.org/).

### Updating the schema
Add an array of children objects to the zod schema. You can add any properties you like, but we will use a `name` and `age` property for this example. 

<details>
    <summary>Solution</summary>
    
```tsx
export const formSchema = z.object({
  // Existing fields

  children: z
    .object({
      name: z.string().min(1, "Required"),
      grade: z.number().min(1).max(12),
    })
    .array()
    .optional(),
})
```
</details>

### useFieldArray()

Next, declare the `useFieldArray()` hook for our specific property. 

```tsx
const { fields, append, remove } = useFieldArray({
  control: form.control, // Form control from useForm()
  name: "children",
});
```

`fields` is an array of objects that represent each child in the array. `append` is a function that adds a new child to the array, and `remove` is a function that removes a child from the array. There are many other functions that can handle more complex operations.

Add a button to the form that calls the `append` function when clicked. This button will add a new child to the form.

Once you have some children added, you can render them by mapping over the fields array, and registering an input for each property or each child added. 

```tsx
{fields.map((child, index) => (
  <div key={child.id} className="flex flex-col space-y-2">
    <FormField
      control={form.control}
      name={`children.${index}.name`} // Take a close look at this line
      render={({ field }) => (
        <FormItem>
          <FormLabel>Child {index + 1} Name</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    {/* Age field omitted */}
    
    <Button 
     variant={"ghost"}
     onClick={() => remove(index)} // Use the remove function to remove the child
     className="self-end"
   >
     <TrashIcon />
   </Button>

  </div>
))}
```

There are a few important rules to follow when using `useFieldArray()`:
1. Properties are accessed using their index in the array. To get the name of the fourth child, you would use `children.3.name`.
2. The key of the mapped component should be the `id` property of the object in the fields array. This is how React knows which components to update when the array changes. Even though our child does not have an `id` property, the `useFieldArray()` hook will generate one for us.

Now we should have a working form that allows parents to add multiple children to their account. However, it only makes sense to display the option to add children if the role is "parent/guardian". We need to conditionally render the children form fields based on the role selected.

We can get the value of a field in the form by using the `watch` function from React Hook Form. This function takes in the name of the field you want to watch and returns the value of that field. It is also reactive, meaning that it can be used to update the UI when the value of the field changes.

```tsx
{form.watch("role") === "parent/guardian" && (
    // Children form fields
)}
```

Now the children form fields will only be displayed if the role is "parent/guardian". 

Congrats! You now have a fully functional sign up form that allows parents to add multiple children to their account! 