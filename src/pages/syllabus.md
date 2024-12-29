---
sidebar_position: 2
---

# Syllabus

This page covers specific course policies and procedures. If you are auditing the course or want to get a better idea of the high level course objectives, see the [course overview](overview)

## Course Details

- **Course Name**: 61d: Applied Software Development
- **Course Instructor**: TBA
- **Lecture Times**: TBA (Not mandatory, as all lectures will be recorded)
- **Prerequisites**: Concurrent enrollment in CS61A, CS88, or equivalent entry level computer science course is required. Prior completion of said course is recommended.

There are **no** required course materials besides a laptop. Students my optionally take advantage of free cloud credits provided to student to enrich their course experience. Students will be required to use tools and services which have paid tiers, but all course content can be completed using only the free tiers of these services. All software taught and used in this course is open source.

## Course Overview and Learning Goals

61d covers all concepts necessary for a student to develop and deploy a full stack web application. The final project (project 2), will require students to build an application from scratch in a team of two. All lectures, readings, assignments, and projects will are designed to teach the skills necessary to complete this final project. These skills include but are not limited to:

0. Use of Git, GitHub, and the command line
1. Fundamentals of the JavaScript and TypeScript programming languages
2. Frontend Development with React, Tailwind CSS, and NextJS
3. Backend Development with tRPC, Drizzle ORM, and PostgreSQL
4. Deployment on a managed and bare metal cloud infrastructure

Moreover, the tools and technologies taught in 61D will **not** be taught in isolation. The course will show how to connect a frontend, to a backend, and then a backend to a database, so that students will understand how each piece of a full stack application fits together.

## Course Content and Learning Plan

The course will consist of lectures, readings, assignments, and projects. There will be no exams or writings. Students will be requested to fill out brief feedback forms each week, so that course staff can adjust the course to better meet the needs of the students. These feedback forms will be anonymous, optional, and will not affect student grades in any way.

Student time commitment can broadly be broken down into lectures and reading (learning), and assignments and projects (applying). Lectures and optional further readings will average 3-4 hours per week for every week of the course. Assignments and projects will average 4-6 hours per week, although these times are likely to vary student to student. During the first part of the course, a much larger percentage of time will be spent on assignments, as students will be learning new concepts. During the second part of the course, a much larger percentage of time will be spent on projects, as students will be applying the concepts they have learned.

### Lectures and Vitamins (3 hours per week)

All course content is covered in a series of 24 lectures. Each lecture will be between 1-1.5 hours. Lectures will be held live in person, and will be recorded and posted on the course YouTube channel. Students will get attendance credit for up to 20 lectures. Attendance credit can be earned for a lecture either by attending in person (and submitting a secret word attendance form), or by watching the recording and completing a vitamin. Vitamins are short, multiple choice, infinite attempt quizzes which test your understanding of the material covered in the lecture and reinforce core concepts.

The lectures will be a mix of covering conceptual concepts, and working through live examples. Many lectures will have a some starter code in a GitHub repository that can be used to follow along with the lecture.

### Readings and External Resources (0.5-1 hours per week)

No readings will be required, but are they highly recommended. Readings will provide a quick reference for the material covered in lectures, give concrete code snippets that can be used in projects, and dive into extra out of scope concepts not covered in lectures. External blog posts, YouTube videos, and documentation will be linked in the readings to provide extra context and resources for students to explore. All readings will be available on the course website. Not all lectures will have corresponding readings.

### Assignments (1-4 hours per week)

All conceptual content from lectures will be practiced and applied in assignments, which will be graded by the course staff or by auto graders. All assignments will consist of writing code. There will be no essays, multiple choice questions, or short answer questions. All assignments will start with a starter code repository, and will require students to submit their code via GitHub classroom.

Some assignments will take the form of individual "problems" in which students will write a small functional unit of code to complete an isolated task. Most assignments however will involve a guided multi-step process to build a simple application (such as a todo list). Assignments will range in length and difficulty and will be weighted accordingly.

Assignments will be heavily structured and have a clear specification that walks students through the process of building the application. The goal of the assignments is to give students practice implementing the ideas covered in lectures, not practice coming up with open ended solutions.

Many assignments will contain optional sections in which students can complete more challenging problems or add additional functionalities to their application. These optional sections will be graded as extra credit.

### Projects (1-4 hours per week)

The course will have two projects, one smaller frontend project, and one final full stack project. Projects are differentiated from assignments in that they will give students much less guidance on how to complete the project. Projects will still have a clear specification and grading rubric, but students are expected to design and execute their own unique technical approach to completing the project.

Both projects will require students to build their own version of an existing useful application. Both projects may be completed in a group of two students.

#### Project 1: Quick Convert

Students will create an [image format converter](https://cloudconvert.com/) which allows the user to change the file format of images in the browser. If a student needs to convert a `.png` to a `.jpg`, they should be able to upload the `.png` to the application, and download the `.jpg` from the application. The application will complete all of this work in the browser, meaning only the project can be completed with only the concepts covered in the first four weeks of the course.

#### Project 2: Smart Split

Students will build an [shared expense tracking](https://www.splitwise.com/) application. Users will be able to create a group which will have shared expenses, and invite other users to the group. When users add expenses to the group, the application will automatically tally up how much each user owes or is owed. The application must be deployed to the cloud, allowing multiple users on multiple devices to interact with the application at the same time.

The final project will be assigned after lecture 14. At that point in the course, students will have learned all concepts necessary to get started on the project. Two weeks after it is assigned, students will be required to meet with a member of course staff for a design review. In this review, students will present their plan for completing the project and get feedback.

During the last week of the course, students must present their completed final project to course staff. In this presentation, they must demonstrate the functionality of their application, and explain the technical decisions they made in building the application.

## Grading

Final grades will be calculated as follows:

<table>
  <tr>
    <th>Category</th>
    <th>Points</th>
    <th>Percentage</th>
  </tr>
  <tr>
    <td>Lecture Attendance or vitamin completion (capped at 20)</td>
    <td>200</td>
    <td>20%</td>
  </tr>
  <tr>
    <td>Assignments (not equally weighted)</td>
    <td>400</td>
    <td>40%</td>
  </tr>
  <tr>
    <td>Project 1</td>
    <td>100</td>
    <td>10%</td>
  </tr>
  <tr>
    <td>Project 2 (Final Project)</td>
    <td>300</td>
    <td>30%</td>
  </tr>
  <tr>
    <th>Total</th>
    <th>1000</th>
    <th>100%</th>
  </tr>
</table>

A minimum score of 700 points (70%) is required to pass the course. Many assignments and projects may have opportunities for extra credit.

The grading of assignments and projects will be a mix of autograding and manual grading. Autograding will be done using GitHub classroom. Manual grading will be done by course staff in accordance with the rubric for the corresponding assignment or project. Grades will be hosted on Gradescope.

While not all assignments will be autograded, all assignments will require code to be submitted via GitHub classroom. Instructor feedback and rubric breakdowns for manually graded assignments will be provided to students via [feedback pull requests](https://docs.github.com/en/education/manage-coursework-with-github-classroom/teach-with-github-classroom/leave-feedback-with-pull-requests). These pull requests will only be visible to the student and the course staff.

### Extensions and Late Policy

Deadlines within the course exist to help students stay on track with the course content. Much of the material is cumulative. With that being said, actually completing the work is more important than when the work is completed, and our late policies reflect that.

All Assignments will automatically be eligible for a 5 day extension, no questions asked. After this 5 day extension, further extensions will be granted by course staff on a case by case basis. Late assignments will have a flat 30% grade penalty, as long as they are submitted by the last day of the course. This penalty gives students an incentive to turn their work in on time, but still gives a chance to earn most of the points if they are late.

Project 1 will have the same extension policy as assignments. There are no extensions for Project 2, as its due date buts up against the end of the course.

Course staff reserves the right to make these policies more lenient for individual students or for the class as a whole in extenuating circumstances, but will not make these policies more strict.

## Calendar

The course is broken up into 12 weeks. Each week will have two lectures, one in the first half of the week and one in the second half. Assignments will be assigned immediately after all lectures covering prerequisite material have been completed. Assignments will be due 1-2 weeks after they are assigned, depending on the length of the Assignment.

Certain assignments are marked as extra credit to reduce the total workload on student. The concepts in these assignments are also covered in the projects, but completing these extra credit assignments will better prepare students for the projects. Many assignments after the release of project 2 will be extra credit, as students should prioritize making progress on their final project.

<table>
  <tr>
    <th>Week</th>
    <th>Lecture</th>
    <th>Assignment(s)</th>
  </tr>
  <tr>
    <td>0</td>
    <td>0) Developer Fundamentals: Git and Bash</td>
    <td>**Assigned**: Assignment 0. Git, Markdown, and Bash</td>
  </tr>
  <tr>
    <td></td>
    <td>1) JavaScript</td>
    <td>**Assigned**: Assignment 1. JavaScript</td>
  </tr>
  
   <tr>
    <td>1</td>
    <td>2) TypeScript</td>
    <td>**Assigned**: Assignment 2. TypeScript <br/> **Due**: Assignment 0. Git, Markdown, and Bash</td>
  </tr>

  <tr>
    <td></td>
    <td>3) React Markup and Components</td>
    <td>**Due**: Assignment 1. JavaScript</td>
  </tr>
   <tr>
    <td>2</td>
    <td>4) React State and Context</td>
    <td>**Assigned**: Assignment 3. React</td>
  </tr>
  <tr>
    <td></td>
    <td>5) Tailwind CSS</td>
    <td>**Due**: Assignment 2. TypeScript</td>
  </tr>
  <tr>
    <td>3</td>
    <td>6) Responsive, Reusable, and Controllable Styling</td>
    <td>**Assigned**: EC Assignment 4. Tailwind</td>
  </tr>
  <tr>
    <td></td>
    <td>7) Forms and Validation</td>
    <td>**Assigned**: Project 1 & **Assigned**: Assignment 5. Forms</td>
  </tr>
  <tr>
    <td>4</td>
    <td>8) Relational Data Modeling</td>
    <td>**Due**: EC Assignment 4. Tailwind</td>
  </tr>
  <tr>
    <td></td>
    <td>9) Database CRUD operations</td>
    <td>**Due**: Assignment 5. Forms</td>
  </tr>
   <tr>
    <td>5</td>
    <td>10) Transactions, Migrations, and Advanced Queries</td>
    <td>**Assigned**: Assignment 6. Databases</td>
  </tr>
  <tr>
    <td></td>
    <td>11) tRPC on the Server</td>
    <td></td>
  </tr>
   <tr>
    <td>6</td>
    <td>12) Web Authentication, Authorization, and Security</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>13) Data Fetching with React Query</td>
    <td>**Assigned**: Assignment 7. tRPC and React Query <br/> **Due**: Assignment 6. Databases</td>
  </tr>
  <tr>
    <td>7</td>
    <td>14) Client Side Routing with NextJS</td>
    <td>**Assigned**: Project 2  <br/> **Due**: Project 1 Completed Code</td>
  </tr>
  <tr>
    <td></td>
    <td>15) The Client Server Model</td>
    <td>**Assigned**: EC Assignment 8. NextJs</td>
  </tr>
   <tr>
    <td>8</td>
    <td>16) HTTP Protocol and API Architecture</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>17) Webhooks</td>
    <td>**Assigned**: Assignment 9. APIs and Webhooks <br/> **Due**: Assignment 7. tRPC and React Query</td>
  </tr>
  <tr>
    <td>9</td>
    <td>18) Cloud Infrastructure, Services, and Deployment (Part 1)</td>
    <td>**Due**: Project 2 Design Reviews</td>
  </tr>
  <tr>
    <td></td>
    <td>19) Cloud Infrastructure, Services, and Deployment (Part 2)</td>
    <td>**Due**: EC Assignment 8. NextJs</td>
  </tr>
  <tr>
    <td>10</td>
    <td>20) Docker</td>
    <td>**Due**: Assignment 9. APIs and Webhooks <br/> **Assigned**: Assignment 10. Cloud and Deployment</td>
  </tr>
  <tr>
    <td></td>
    <td>21) Testing, Staging, and CI/CD</td>
    <td>**Assigned**: EC Assignment 11. CI/CD and Testing</td>
  </tr>
  <tr>
    <td>11</td>
    <td>22) No Lecture, Final Project Presentations</td>
    <td>**Due**: Project 2 Presentations & Completed Code</td>
  </tr>
  <tr>
    <td></td>
    <td>23) Course Recap and What's Next?</td>
    <td>**Due**: Assignment 10. Cloud and Deployment & EC Assignment 11. CI/CD and Testing</td>
  </tr>  
</table>

## Student Support

### Office Hours

Both in person and online office hours will be held weekly. Office hours will primarily be focussed on helping students with projects and assignments, but will also serve as an opportunity for students to ask conceptual questions about material in lectures and readings.

### Discussion Forum

A moderated course discord server will serve as the primary means of course communication and announcements. It will also serve as a platform in which students can ask questions about course material, assignments, and projects. The course staff will be active on the discord server and will respond to questions in a timely manner.

## Academic Honesty, Collaboration, and Use of Artificial Intelligence

On assignments, students may and are encouraged to collaborate work with any other students in the course. However, each student must submit their own work for each assignment, and students my not directly copy another student's work. Students may use short snippets of code they find online or using other resources, however they may not copy full solutions to assignments. If students use code from an external source, they are expected to include a link to the original source of the code.

Projects may be completed in a group of two students. These two students are only required to submit a single code submission for the project. Students my collaborate with other students outside of their group on projects.

Use of ChatGPT, GitHub Copilot, or any other AI tool is allowed, but these tools must be treated in the same way as any other external resource. AI tools may only be used for generating small, isolated functional units of code, and not for generating entire solutions to assignments. Similarly, students should indicate when they are using code that was generated by an AI tool.

**If a student is found to be violating these policies on any assignment or project, course staff reserves the right to deduct points from the student submission, including awarding a zero on the assignment, depending on the severity of the offense.**
