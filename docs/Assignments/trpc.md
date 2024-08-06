---
sidebar_position: 6
---

# tRPC, React Query, and Next Auth

## Assignment Overview

### Backstory

When it comes to big family gatherings or outings with a group of friends, deciding on a restaurant or activity can be a challenging. Everyone has their own ranking of their preferences, and tabulating all of this fairly can be a chore. Therefore, you have decided to build a web application which allows you to implement [ranked choice voting](https://fairvote.org/our-reforms/ranked-choice-voting/).

"Voters have the option to rank candidates in order of preference: first, second, third and so forth. If your first choice doesn’t have a chance to win, your ballot counts for your next choice." --fairvote.org

### Assignment

As this is a backend "business logic" focused assignment, the entire frontend and database schema have more or less been implemented for you. You will implement three main features:

1. Authentication setup using Next Auth: In any voting system, it is important that people can only vote once. Therefore, we will require users to sign in with their google account so that we can verify their identity. Most of the heavy lifting is done for you, but you will need to set up the google OAuth client ID and secret.

2. tRPC API: You will use tRPC to build out the API for the voting system. 
    1. Rooms: Creating a voting room and listing the emails of the users allowed to access the room.
    2. Voting items: Create "candidates" or other items which can be voted on
    3. Votes and scoring: Keep track of each user's ranking of each candidate. Once all votes are cast, calculate the winner using ranked choice voting.

3. React Query: Once the API is built, you will use React Query to fetch the data from the API and display it on the frontend, and to submit data from the frontend.

# Part 1: Authentication

Setup a google OAuth client ID and secret for your application. This will allow users to sign in with their google account. Follow the steps below, also shown in this quick [video](https://youtu.be/8wKJPeey5WA).

1. Go to the [google cloud console](https://console.cloud.google.com/apis/credentials) with your berkeley gmail account. Using your berkeley account will allow anyone else with a berkeley account to use your application, without requiring any verification of your application from google.
2. In the upper left hand corner, select the dropdown to create a new project. 
3. Name the project, and select the "Learning" folder in the berkeley.edu organization.
4. Once the project is created, click "Create Credentials" and select "OAuth client ID".
5. Click "Configure Consent Screen" and select Internal user type. Name the application, and provide your email address as the support email and developer contact email.
6. After configuring the consent screen, click "Create Credentials" and select "OAuth client ID" again. Select "Web application".
7. Under "Authorized JavaScript origins", add `http://localhost:3000` and under authorized "Authorized redirect URIs" add `http://localhost:3000/api/auth/callback/google`.
8. Click "Create" and copy the client ID and client secret to your .env file.

