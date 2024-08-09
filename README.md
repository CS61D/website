# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

It is live at [https://education.codifyberkeley.org/](https://education.codifyberkeley.org/)

### Installation

```
$ bun install
```

### Local Development

```
$ bun start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ bun
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


```
$ GIT_USER=<Your GitHub username> bun deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
