# bantumakers.github.io
A static blog for `Conversas Startup`

## About

Conversas Startup is a happy hour meetup event in a relaxed atmosphere that brings together people connected to startups, technology, innovation and creative business. It happens on the first Friday of each month at a different location in Luanda, Angola.

> Built with [Bootstrap](http://getbootstrap.com/) and [Metalsmith](http://www.metalsmith.io/).

## How to Use

### Running Locally

From the project directory, install dependencies using npm:

```
npm install
```

Then build the web assets and preview the site:

```
npm start
```

This will spin up a server running at `localhost:8080`. The preview server uses `site.dev.json` for configuration.

### Building for Deployment

In order to build the site to deploy to a static hosting provider, just run:

```
npm run dist
```

and copy the contents of `/build` to your provider. The `dist` task merges `site.dev.json` & `site.prod.json` to configure Metalsmith metadata.
