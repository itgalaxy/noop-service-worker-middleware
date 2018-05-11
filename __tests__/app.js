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

app.use(router.routes());

module.exports = app;
