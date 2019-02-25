const got = require("got");
const app = require("./app");

const port = 3100;

jest.setTimeout(100000);

describe("basic", () => {
  let server = null;

  beforeAll(
    () =>
      new Promise((resolve, reject) => {
        server = app.listen(port, error => {
          if (error) {
            return reject(error);
          }

          return resolve();
        });
      })
  );

  afterAll(() => server && server.close());

  it("should responses with code 200", () => {
    expect.assertions(3);

    return got(`http://localhost:${port}`).then(response => {
      expect(response.headers["content-type"]).toBe("text/html; charset=utf-8");
      expect(response.statusCode).toBe(200);
      expect(response.body).toBe("Hello World!");

      return Promise.resolve();
    });
  });

  it("should responses with code 200 and return service worker noop code", () => {
    expect.assertions(3);

    return got(`http://127.0.0.1:${port}/service-worker.js`).then(response => {
      expect(response.headers["content-type"]).toBe(
        "text/javascript; charset=utf-8"
      );
      expect(response.statusCode).toBe(200);
      expect(response.body).not.toHaveLength(0);

      return Promise.resolve();
    });
  });

  it("should responses with code 200 and return service worker noop code (custom name)", () => {
    expect.assertions(3);

    return got(`http://127.0.0.1:${port}/custom-service-worker.js`).then(
      response => {
        expect(response.headers["content-type"]).toBe(
          "text/javascript; charset=utf-8"
        );
        expect(response.statusCode).toBe(200);
        expect(response.body).not.toHaveLength(0);

        return Promise.resolve();
      }
    );
  });
});
