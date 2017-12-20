const request = require("supertest");
const app = require("./app");

describe("Test the root path", () => {
  let server = null;

  beforeAll(() => {
    server = app.listen(8080);
  });

  afterAll(() => {
    server.close();
  });

  test("should response code 200", () =>
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);

        return Promise.resolve();
      }));

  test("should response code 200 and return service worker noop code", () =>
    request(app)
      .get("/service-worker.js")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.text).not.toHaveLength(0);

        return Promise.resolve();
      }));

  test("should response code 200 and return service worker noop code (custom name)", () =>
    request(app)
      .get("/custom-service-worker.js")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.text).not.toHaveLength(0);

        return Promise.resolve();
      }));
});
