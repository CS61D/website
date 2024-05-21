---
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# APIs and Webhooks

## Assignment Links

## Assignment Overview

### Backstory

Your team of junior developers keep on writing code full of silly little mistakes, and they keep merging these mistakes before you get a chance to review their code. You want to make sure that you see and review every pull request before it gets merged, and so decide to write a script that will automatically assign yourself as a reviewer to every pull request that is opened. But, to keep morale high, you will also automatically leave a comment on every pull request that is opened, thanking the author for their hard work.

### Motivation

In almost all real world software applications, you need to be able to work with external systems. If you want to accept payments, you will have to integrate with Stripe. If you want to send emails, you will likely have to integrate with a provider like Twilio.

## Part 1: GitHub Setup

In order to programmatically interact with GitHub, you will need to create a personal access token. This token will be used to authenticate your scripts when they make requests to the GitHub API.

1. Navigate to your GitHub settings > Developer settings > Personal access tokens > Fine-grained tokens or [click here](https://github.com/settings/tokens?type=beta).
2. Click on the "Generate new token" button. Name you token and give it an expiration of at least 30 days.
3. For Resource owner, select CS61D
4. For Repository Access, select Only select repositories, and then select the repository you generated for the assignment.
5. Under Repository permissions, select "Read and Write" for Pull requests, and "Read-only" for Metadata. It is always good practice to give the least amount of permissions necessary to accomplish your goals, minimizing the potential damage if your token is compromised.
6. Click "Generate token" and copy the token that is generated. **This token will not be shown again, so make sure to save it somewhere safe.**

## Part 2: GitHub API Scripts

Now that we can programmatically interact with GitHub, we can begin writing the scripts that we will use in our automation. We will be using GitHub's [node.js SDK](https://github.com/octokit/octokit.js), which maps to the functionality described in the REST API docs.

Start out by looking through the [GitHub API documentation](https://docs.github.com/en/rest) to find the endpoints that you will need to use. You will need to use the following endpoints:

## Part 3: Setting up the Webhook

GitHub can not send information directly to our localhost. We need to give it a live URL that it can send information to, which we can then forward to our localhost. We will use a tool called [ngrok](https://ngrok.com/) to create a tunnel to our localhost.

### Installing ngrok

<Tabs>
  <TabItem value="Windows" label="Windows" default>
    ```bash 
    choco install ngrok
    ```
  </TabItem>
  <TabItem value="Mac" label="Mac">
    ```bash 
    brew install ngrok/ngrok/ngrok
    ```
  </TabItem>
</Tabs>

After installing, we can start a tunnel to our localhost by running the following command:

```bash
ngrok http 80
```

And you should see an output like this in your terminal:

![ngrok](../../static/img/assignment-images/apis-and-webhooks/ngrok-terminal.png)

Now all requests sent to https://1e89-23-93-179-161.ngrok-free.app will be forwarded to your localhost on port 80.

:::note
Because we are using the free version of ngrok, this URL wil change every time you restart the tunnel. Either keep the same process running throughout the entire time you are working on the assignment, or update the webhook URL in GitHub every time you restart the tunnel.
:::

### Setting up the Webhook

1. Navigate to your repository on GitHub. Click settings > Webhooks > Add webhook.
2. For the Payload URL, enter the URL that ngrok is forwarding to your localhost.
3. For Content type, select application/json.
4. For the events, select "Let me select individual events" and then check the only "Pull requests" box.
5. Click "Add webhook".

Now, every time a pull request related event happens in your repository, GitHub will send a POST request to the URL that ngrok is forwarding to your localhost. Now we can configure our script to run automatically every time a pull request is opened.

## Part 4: Using the webhook

The **index.ts** file is an [express server](https://expressjs.com/), which listens on port 80 for incoming POST requests. When a POST request is received, the server will log the request body to the console.

Start the server by running:

```bash
bun index.ts
```

Now check that we can receive the webhook. Open or close a PR in your chosen repository, and you should see some terminal logs. Now, call your **requestReview** function to test if your script works!
