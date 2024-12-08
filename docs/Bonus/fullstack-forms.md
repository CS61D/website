---
sidebar_position: 4
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Rapid Full Stack Form Prototyping with T3

* [View example](https://fullstackforms.aidansunbury.dev/)

The beauty of the T3 stack is that the frontend and backend of an application can be so tightly integrated. A database schema defined with Drizzle can automatically be used to generate zod validators, which can be allows for use of the same validation on the frontend and the backend. Moreover, zod integrates flawlessly with react-hook-form, which in turn integrates beautifully with shadcn.

The one downside is that creating these forms over and over again often requires a lot of boilerplate code, especially when adding ui/ux enhancements such as loading indicators and success messages. This page walks through setting up a simple full stack form, and gives you convenient copy and paste code snippets for setting up the imports, form state, and actual form components.

## Setup

First, make sure you have the needed dependencies installed:

```bash
bun add drizzle-zod react-beforeunload
```

And the required shadcn components:

```bash
bunx --bun shadcn@latest add dialog button input form select command badge
```

Also add the [multiple-selector](https://shadcnui-expansions.typeart.cc/docs/multiple-selector) and [loading button](https://shadcnui-expansions.typeart.cc/docs/loading-button) expansion component. I just replaced my existing button component, seeing as all of the functionality is the same except for the optional loading state.

Finally, make a wrapper component for the `drizzle-zod` createInsertSchema function which omits any fields that should only be created by the database. This will make your forms and tRPC procedures safer. You may want to modify this function to suit your needs.

```ts src/lib/safeInsertSchema.ts
import type { Table } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";

// Ensures the id and createdAt columns are automatically set by the database, but all other values may be passed in.
export function safeInsertSchema<TTable extends Table>(table: TTable) {
  return createInsertSchema(table).omit({
    id: true,
    createdAt: true,
  });
}
```

You may optionally modify your shadcn `FormLabel` component to be able to display a nice asterisk for required fields.

```tsx src/components/form.tsx
interface FormLabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  optional?: boolean;
}

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  FormLabelProps
>(({ className, optional = true, children, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    >
      {children}
      {!optional && <span className="text-destructive ml-1">*</span>}
    </Label>
  )
})
FormLabel.displayName = "FormLabel"
```

Now you are ready to copy and paste forms from [fullstackforms.aidansunbury.dev](https://fullstackforms.aidansunbury.dev/).