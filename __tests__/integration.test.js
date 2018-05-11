const got = require("got");
const app = require("./app");

const port = 3100;

describe("test the root path", () => {
  let server = null;

  beforeAll(() => {
    server = app.listen(port);
  });

  afterAll(() => {
    server.close();
  });

  it("should response code 200", () =>
    got(`http://127.0.0.1:${port}`).then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toBe("Hello World!");

      return Promise.resolve();
    }));

  it("should response code 200 and return service worker noop code", () =>
    got(`http://127.0.0.1:${port}/service-worker.js`).then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body).not.toHaveLength(0);

      return Promise.resolve();
    }));

  it("should response code 200 and return service worker noop code (custom name)", () =>
    got(`http://127.0.0.1:${port}/custom-service-worker.js`).then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body).not.toHaveLength(0);

      return Promise.resolve();
    }));
});
