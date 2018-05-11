# noop-service-worker-middleware

[![NPM version](https://img.shields.io/npm/v/noop-service-worker-middleware.svg)](https://www.npmjs.org/package/noop-service-worker-middleware)
[![Travis Build Status](https://img.shields.io/travis/itgalaxy/noop-service-worker-middleware/master.svg?label=build)](https://travis-ci.org/itgalaxy/noop-service-worker-middleware)
[![dependencies Status](https://david-dm.org/itgalaxy/noop-service-worker-middleware/status.svg)](https://david-dm.org/itgalaxy/noop-service-worker-middleware)
[![devDependencies Status](https://david-dm.org/itgalaxy/noop-service-worker-middleware/dev-status.svg)](https://david-dm.org/itgalaxy/noop-service-worker-middleware?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/itgalaxy/noop-service-worker-middleware.svg)](https://greenkeeper.io)

Returns Express middleware that serves a service worker that resets any previously set service worker configuration. Useful for development.

## Installation

```shell
npm i -D noop-service-worker-middleware
```

**NOTE:**
`noop-service-worker-middleware@1` support only `express` (includes `webpack-dev-server`).
`noop-service-worker-middleware@2` support only `koa` (includes `webpack-serve`).

## API

```js
const noopServiceWorkerMiddleware = require("noop-service-worker-middleware");
```

### noopServiceWorkerMiddleware(path)

Returns Express middleware that serves a service worker that resets any previously set service worker configuration.

#### Options

##### path

Filename of service worker.

```js
app.use(noopServiceWorkerMiddleware("/custom-service-worker.js"));
```

## Examples

Simple app:

```js
const Koa = require("koa");
const Router = require("koa-router");
const noopServiceWorkerMiddleware = require("..");

const app = new Koa();
const router = new Router();

app.use(noopServiceWorkerMiddleware());
app.use(noopServiceWorkerMiddleware("/custom-service-worker.js"));

router.get("/", (ctx, next) => {
  ctx.body = "Hello World!";

  return next();
});

app.use(router.routes()).listen(8080);

module.exports = app;
```

[webpack-serve](https://github.com/webpack-contrib/webpack-serve):

```js
const noopServiceWorkerMiddleware = require("noop-service-worker-middleware");

module.exports = {
  // ...
  serve: {
    add(app) {
      app.use(noopServiceWorkerMiddleware());
    }
    // ...
  }
  // ...
};
```

## Thanks

* [create-react-app](https://github.com/facebookincubator/create-react-app) - inspiration.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
