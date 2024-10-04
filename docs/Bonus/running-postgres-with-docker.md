---
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Setting up Postgres for Local Development

Unlike SQLite, which is just a single file that can live locally on your machine, Postgres must be run in the form of a server, which you can connect to with a connection string that looks something like this:

```bash
postgres://username:password@localhost:5432/database_name
```

The single quickest way to get started is to just use a hosted postgres provider like [Neon](https://neon.tech/). Just create an account, a project, a database, copy the connection string, and you're good to go. However, using a hosted provider in a **local development environment** had a variety of drawbacks. Unless you are running a very old and slow computer, we highly recommend running Postgres locally with Docker.


<details>
  <summary>
  Drawbacks of using a hosted provider in a local development environment
  </summary>

  1. **Cost**: Hosted solutions almost always have free tiers, but these tiers often only allow you to have a single database, which can be a pain if you are working on multiple projects. Moreover, if you use free tier allowances on development databases, you can't take advantage of them in production.
  2. **Development Latency**: Your app will run faster locally when database requests do not have to travel potentially hundreds of miles to and from a data center. A faster app in development makes for a more productive developer.
  3. **Mimicking your Production Environment**: When your frontend makes a request to your server, you may need to make multiple calls to the database for a single request. For this reason, in production, you almost always want your database to be physically located as close to your server as possible, ideally in the same data center. When your are developing locally, you want to mimic this environment. Running your local server and your local database on the same machine will give you a better sense of when a request is slow because of your code, and when it is slow because of the network.
</details>

## TL;DR Quick Start

After [installing docker](docs/setup.md#docker-and-docker-desktop), first pull the latest Postgres image from Docker Hub:

```bash
docker pull postgres:latest
```

Then create a container, Postgres user, and database:

```bash
docker run --name pg_container \
  -e POSTGRES_PASSWORD=pg_password \
  -e POSTGRES_USER=root \
  -e POSTGRES_DB=mydatabase \
  -p 5432:5432 \
  -d postgres
```

You can now connect to your database with the following connection string:
```bash
postgresql://root:pg_password@localhost:5432/mydatabase
```

## T3 Quick Start

If you are using [Create T3 App](https://create.t3.gg/), a [setup script](https://create.t3.gg/en/usage/first-steps#mysql-postgresql) `start-database.sh` will automatically be created for you. It will use the name of your project from your `package.json` to create a new docker container and database for you. 
    
```bash
./start-database.sh
```

## Detailed Explanation

When learning to use Docker, it is often easiest to play around using the Docker Desktop GUI, but eventually learning how to use the CLI is a necessity. This guide will explain how to do everything using both, so you can choose which you prefer.

### Pulling Images

A `docker image` is like a configuration file that tells Docker how to create a `docker container`, which is a running instance of a containerized program. We only need to pull the image once, and then we can create as many containers as we want from it.

When you are pulling an image of a common open source program, you are almost always pulling it from [Docker Hub](https://hub.docker.com/), which is like GitHub for Docker images. Information about the image, including available versions (a.k.a tags) and the `pull` command will be on the image homepage. Docker desktop also can be used for viewing and pulling images from Docker Hub.

We specify which version of the image we want to pull with a tag. Most images have a `latest` tag, which is the most recent stable version.

```bash
docker pull postgres:latest
```

### Creating a Container

After pulling the Postgres image, we need to create a container for it. Once we run the container on our localhost, we will have a Postgres server running on a port of our choice.

The Postgres image requires two environment variables to be initialized: `POSTGRES_USER` and `POSTGRES_PASSWORD`. This username and password will be used to create the superuser, which has full access to all databases and all admin functions. Other people are not going to connect to your local database, so you normally only need to configure one superuser. If you are interested, check out the [Postgres official docs](https://www.postgresql.org/docs/8.0/user-manag.html).

Common usernames are `root`, `postgres`, or `admin`. Don't choose a hard to remember password, this is just a development environment that can't be accessed outside of your computer; just stick with `pg_password` or `password`.

<Tabs>
  <TabItem value="cli" label="Docker CLI" default>
    The container name (which we specified as pg_container) is optional, and if not provided docker will create a name for you. What is required is the actual image name, (which we specified as postgres:latest). You may replace `root` and `pg_password` with your desired username and password. Also, if you want to just create the container without starting it, you can run `docker create` instead of `docker run`.

    ```docker
    docker run --name pg_container \
      -e POSTGRES_PASSWORD=pg_password \
      -e POSTGRES_USER=root \
      -p 5432:5432 \
      -d postgres:latest
    ```

    You can then verify that the container is running by inspecting your running containers.`ps` stands for process status.
    
    ```bash
    docker ps 
    ```

    The created container should have status `Up` a few seconds ago.

  </TabItem>
  <TabItem value="desktop" label="Docker Desktop">
    1. Select the `Images` tab on the left sidebar, and select the `postgres` image.
    2. Click the `Run` button in the top right corner.
    3. In the dialog that pops up, add the environment variables `POSTGRES_PASSWORD` and `POSTGRES_USER` your desired values. You can also add a name for the container in the `Container name` field.
    4. Click the `Run` button in the popup.

    To verify it is running, Select `Containers` from the left sidebar, and you should see your container with a status of `Running`.
  </TabItem>
</Tabs>

#### Port Mapping
The default port for Postgres is `5432`, so we map the container port `5432` to our localhost port `5432` with the `-p` flag. This means that when we connect to `localhost:5432` we are connecting to the Postgres server running in the container. You shouldn't ever have to set it to another port, unless you want to run multiple Postgres servers on your machine simultaneously.

### Interacting with the Running Container
There are three ways to interact with our running container:
1. In Docker Desktop, click on the container and then on the `exec` tab. This terminal will allow you to run commands in the container.
2. We can also spawn this same shell interactively from the command line. Run:
```bash
docker exec -it pg_container bash
```
This will open an interactive (specified with the -it flag) shell in the container. Replace `pg_container` with the name of your container if you chose a different name. To exit the shell, type `exit`.

3. Finally, if you don't need to or want to have an interactive shell and instead just want to run a single command, you can use `docker exec` without the `-it` flags.
```bash
docker exec pg_container whoami
```
Now, we can use the Postgres command line interface called `psql` to interact with our server. Just run:

```bash
psql
```

in the container and you will sign in as the root user you configured with an environment variable. You can now run SQL commands. To create your database with your chosen name, run:

```sql
CREATE DATABASE mydatabase;
```

Assuming you did not change any of the port mapping, you connection string will be of form:
    
```bash
postgresql://<username>:<password>@localhost:5432/<database_name>
```

If you followed along, it will look like this:
    
```bash
postgresql://root:pg_password@localhost:5432/mydatabase
```

Now you are ready to get developing! If you are need multiple databases, it is easiest to create just create them in the same container you set up.

## psql Commands Reference
* [Useful Cheat Sheet](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546)

### Listing Databases
```sql
\l
```

### Connecting to a Database as current user
```sql
\c mydatabasename
```
This will let you run raw SQL commands on the database you are connected to. To switch to another database, just run `\c` again.

### Exit connected database
```sql
\q
```

## Docker Commands Reference
* [Useful Cheat Sheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf)

### Listing Images
```bash
docker images
```

### Pulling an Image from Docker Hub
```bash
docker pull <image_name>:<tag>
```

### Listing Containers
```bash
docker ps
```

### Starting a Container
```bash
docker start <container_name>
```

### Stopping a Container
```bash
docker stop <container_name>
```

### List environment variables of a container
```bash
docker exec <container_name> env
```
