---
sidebar_position: 2
---

# Glossary

Many terms used throughout the 61d curriculum are applicable to more than one technology or tool we teach. In these circumstances, we will link to glossary definitions to provide a consistent explanation of the term.

## General

#### Environment Variable

A variable that is set outside of the application code and is used to configure the application. Environment variables are used to store sensitive information like API keys, database credentials, etc. They are also used to configure the application for different environments like development, testing, and production.

#### Dependency

A dependency is any library or package which your code needs to run. Any code that you call which you did not write from scratch is a dependency.

In our JavaScript context, dependencies are defined in a `package.json` file. For instance, below are the dependencies for the 61d Docusaurus site:

```json title="package.json"
{
  "dependencies": {
    "@docusaurus/core": "3.2.1",
    "@docusaurus/preset-classic": "3.2.1",
    "@mdx-js/react": "^3.0.0",
    "clsx": "^2.0.0",
    "dotenv": "^16.4.5",
    "posthog-docusaurus": "^2.0.1",
    "prism-react-renderer": "^2.3.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "rehype-external-links": "^3.0.0"
  }
}
```

When you run `bun install`, the dependencies listed are downloaded from the [node package registry](https://www.npmjs.com/) and installed in the `node_modules` directory.

#### Dev Dependency

A dev dependency is a dependency that is only needed during development. For example, a code formatter like biome is only needed during development. Adding dev dependencies will not impact the production build of your application.

You can add a dev dependency by using the `--dev` flag.

```bash
bun add --dev @biomejs/biome
```

#### UUID (Universally Unique Identifier)

A UUID is a 128 bit label used to uniquely identify objects. In string form, it looks something like this: `d15a3911-91db-40b0-bd79-a2bb6220d6d8`. UUIDs contain enough randomness such that you are unlikely to ever generate two of the same UUID unless you generate [literally quintillions of UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier#Collisions).

There are many variations and implementations of UUIDs. If you are generating primary keys for a database, use either [ULID](https://www.npmjs.com/package/ulidx) or [UUID v7](https://www.npmjs.com/package/uuid). They can be sorted chronologically to the nearest millisecond, and are optimal for database performance.

If database insert performance is not as important as having a shorter more url friendly identifier, [Nano ID](https://www.npmjs.com/package/nanoid) is a good alternative.

```ts
// Nano Id in a url
// app.com/V1StGXR8_Z5jdHi6B-myT

// UUID in a url
// app.com/d15a3911-91db-40b0-bd79-a2bb6220d6d8
```

#### Idempotency

The property of a request to a database, server, or external API that it can be safely retried or repeated without having a different result than if the request was only made once.

Some types of requests are idempotent by default. Any api `GET` request of sql `SELECT` statement is idempotent because it does not mutate data. _Most_ api `PUT` or sql `UPDATE` statements are also idempotent. Multiple update requests with the same inputs will not alter the end database state.

Requests which are not idempotent by default can be made to be idempotent with a bit of extra work. Take the example of completing a checkout on an e-commerce site like Amazon. If the user's connection is slow, they may click the submit button multiple times while waiting for a response. How can we ensure that a create order `POST` request does not create multiple orders for the same checkout flow.

For each checkout session, the client can generate a [uuid](#uuid-universally-unique-identifier) to serve as an _idempotency key_. When the server receives the request, it first checks if a previous request has been processed with the same idempotency key. If not, it returns a response, and stores a mapping of the idempotency key to the response. If another request arrives later with the same idempotency key, it returns the stored response to the original request.

See how [stripe](https://docs.stripe.com/api/idempotent_requests) implements idempotency.
