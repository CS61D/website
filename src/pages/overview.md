---
sidebar_position: 1
---

# Course Overview

This page covers the overall philosophy and motivations behind the course. For detailed information about grading and policies see the [syllabus](syllabus)

## Why 61D?

After taking an introductory computer science course, such as [Berkeley's CS61A](https://cs61a.org/) or [Harvard CS50](https://pll.harvard.edu/course/cs50-introduction-computer-science), there is no immediately obvious next step a student should take to learn how to build a modern full stack application from design to deployment. Knowledge of functions, conditionals, loops, recursion, and even complex data structures is not enough to actually create and launch a web application. Even after a full computer science degree, there is no guarantee that a student will ever interact with a database, a web server, build any kind of user interface, or deploy to more than an autograder.

This course bridges that gap. Designed to be taken after a first-semester university-level computer science course, 61D teaches an opinionated set of technologies which are widely used in industry to build full stack applications. The course is designed to be taken in a single semester, and is structured to be accessible to students with no prior experience in web development. All course materials will be open source and free forever. Our goal is to be the default next step all aspiring software engineers take when learning how to build full stack applications.

<!-- The motivations for creating the course are inspired by my own (far from unique) experiences trying to learn how to actually build and ship software. The rest of this page covers roadblocks that student and self taught developers face and how 61D addresses them.

## The Struggles of Self Taught Developer

Pretend you have no knowledge of web technologies, perhaps just a working knowledge of Python or Java, and you want to build a web app that can be used to track shared expenses for you and your roommates. It may seem simple on the surface, but there are several key requirements you need to meet to realize this vision:

1. **User Interface**: You need a user interface to input and view expenses. This could either be a web app or a mobile app, but for simplicity, let's say you want a web app.
2. **Data Storage**: You need a way to store the expenses. You can't store them locally on your machine, because you want your roommates to be able to see them too. You need a database.
3. **Authentication**: You need to make sure that only your roommates can see the expenses. You also want to make sure that
4. **Application Logic**: You want to be able to keep a running

When self taught developer starts teaching themself how to build a web application, they are faced immediately faced with several problems all at once:

1. **What Scope**: (What can I actually build)
2. **What tools**: (What should I learn to build it)
3. **What resources**: (Where can I learn these tools) (docs aren't always meant for learning)

4. **What order**: (What order should I learn these tools)
5. **Actually Learning**: (The important part)

61d eliminates every single one of those challenges except for the last one.

## Issues with Existing Online Courses

> There are dozens of possible ways, and it's impossible to ever crown a best way. Just pick a very good way and get started.

-->

## Technologies We Cover, and Why We Chose Them

The technologies used in the course are inspired by the [t3 stack](https://create.t3.gg/). All technology choices have tradeoffs, but we believe our choices provide the best set of tradeoffs for a student looking to get developing quickly without taking shortcuts. Most importantly, the stack is a **complete solution** for building web applications. All of the individual parts mesh well together, and there are no black boxes or missing layers of connective tissue.

1. **Move quickly, break nothing:** The t3 stack has a cli tool which can be used to scaffold a project in seconds. End to end typesafety is the built in.
2. **Use standard open source tools:** We teach only open source industry standard tools. You are never at risk of vendor lock in with the t3 stack. Further, there is a rich ecosystem of resources and guides online teaching the various components of the stack.
3. **Prioritize developer experience:** The t3 stack is a joy to code with. The tooling and interoperability within the stack lets you code, debug, and ship faster.

4. **Fundamentals**:
   - **[Git](https://git-scm.com/)**: Industry standard version control.
   - **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) + [TypeScript](https://www.typescriptlang.org/)**: [The most popular programming language in the world](https://survey.stackoverflow.co/2024/technology/#most-popular-technologies), which is used in all interactive front end applications, and are also widely used in non-performance critical back end applications.
   - **Developer Productivity**: Efficient use of the command line, linters and formatters, the VSCode ecosystem, and basic debugging.
5. **Front End**:
   - **[React](https://react.dev/)**: The most popular industry standard framework for building front ends.
   - **[Tailwind CSS](https://tailwindcss.com/)**: A modern approach to styling which locates styles inline instead of in a separate file.
   - **[Next JS](https://nextjs.org/)**: The world's most popular React framework which provides the functionality needed to build full stack applications.
   - **[React Query](https://tanstack.com/query/latest) (aka Tanstack Query)**: Used in one in six of all React applications, React Query is the industry standard way of managing server state in React applications.
   - **[shadcn-ui](https://ui.shadcn.com/)**: Building components completely from scratch in a waste of time for the vast majority of projects. However, typical component libraries often provide minimal options for customization. Shadcn-ui is quickly becoming the default choice for React projects as the source code for all components lives in your codebase.
   - **[React Hook Form](https://react-hook-form.com/)**: The quickest and easiest way to create controlled and validated forms in react. Works beautifully with zod and shadcn-ui.
6. **Back End**:
   - **[tRPC](https://trpc.io/)**: A modern type-safe back end framework.
   - **[zod](https://zod.dev/)**: The most popular Typescript data validation library used on both the frontend and the backend.
   - **[PostgreSQL](https://www.postgresql.org/) with [Drizzle ORM](https://orm.drizzle.team/)**: [The most popular relational database](https://survey.stackoverflow.co/2024/technology/#1-databases), with the most modern tool for accessing it.
   - **[Auth.js](https://authjs.dev/)**: Open source authentication library allowing use authentication with any OAuth provider.
   - **APIs and Webhooks**: Subscribing to webhooks and using APIs of external services.
7. **Deployment and Infrastructure**:
   - **Managed Deployments with [Vercel](https://vercel.com/)**: Deploy and scale globally with a single command to popular platforms with generous free tiers.
   - **Self Hosted Deployment with [Docker](https://www.docker.com/) and [Coolify](https://coolify.io/)**: Run you applications on any machine with open source self hostable technologies. Use free cloud credits provided to students to run your applications.

## Course Content

### Lectures

All course content is covered in a series of 24 lectures, which will be available on our YouTube channel. These lectures will be a mix of covering conceptual concepts, and working through live examples. Most lectures will have a some starter code in a github repository that can be used to follow along with the lecture.

### Readings

Combing through YouTube videos to find that one code snippet is tough. Readings provide at a glace cheat sheets and reference for the materials covered in lecture, and useful code snippets which can be copied and pasted directly into your project. They also provide links to other resources to explore further, or cover extra supplemental content not covered in lecture.

### Labs

The course will have 12 labs, which are meant to be guided demonstrations and practice of concepts covered in the lectures. These will be held in person, and be the best place to ask questions about course materials and content.

### Assignments

All content will be practiced in coding assignments, which will be graded by the course staff or by auto graders. All assignments will come with starter code, and have detailed instructions which hold your hand at first and slowly let you take the reigns. Assignments will range in length and difficulty. The starter code for assignments will be public, and solutions will be available after submission. All assignments will also include a rubric for self grading if you are auditing the course. Assignments include but are not limited to:

1. Building a simple frontend todo list with **React**
2. Creating a registration form with input validation using **React Hook Form**
3. Styling a landing page for a travel agency with **Tailwind CSS**
4. Creating a ranked choice voting system with **tRPC and Drizzle**
5. Building a simple blog website with **NextJs and shadcn-ui**
6. Creating an [integration with GitHub](https://github.com/CS61D/Webhooks-Assignment-Sample-Repo) which automatically leaves comments on pull requests

### Projects

The course will have two projects, one smaller front end project, and one final full stack project. The final project will still have guidelines and a specification, but will be much less structured than the rest of the assignments in the course.

1. Create an [image format converter](https://quickconvert.61d.org/) which allows you to change the file format of images in the browser.

2. Create a [splitwise](https://www.splitwise.com/) clone to track and organize shared expenses and repayments.

The name of the course is inspired by the naming of UC Berkeley lower division computer science courses. CS 61A, 61B, and 61C are official courses, and we think that the content our course, 61D, is almost as important!
