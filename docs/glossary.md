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
