const request = require("supertest");
const app = require("./app");
const User = require("./models/User");
const seed = require("./seed");
const { users } = require("./seedData");

describe("User Tests", () => {
  beforeAll(async () => {
    await seed();
  });
  test("get users returns correct response", async () => {
    const response = await request(app).get("/api/users");
    expect(response.statusCode).toBe(200);
    expect(response.body[0]).toEqual(
      expect.objectContaining({
        username: "Bugs Bunny",
        password: "Sillyrabb1t",
        email: "bugsbunny@gmail.com",
      })
    );
    const users = await User.findAll();
    expect(response.body.length).toBe(users.length);
  });

  test("get one user returns correct response", async () => {
    const response = await request(app).get("/api/users/1");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        username: "Bugs Bunny",
        password: "Sillyrabb1t",
        email: "bugsbunny@gmail.com",
      })
    );
  });

  test("post users returns correct response", async () => {
    const response = await request(app).post("/api/users").send({
      username: "Lola Bunny",
      password: "Sillyrabb1t",
      email: "Lolabunny@gmail.com",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        username: "Lola Bunny",
        password: "Sillyrabb1t",
        email: "Lolabunny@gmail.com",
      })
    );
  });

  test("put users returns correct response", async () => {
    const response = await request(app).put("/api/users/2").send({
      username: "Lola Bunny",
      password: "Sillyrabb1t",
      email: "Lolabunny@gmail.com",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        username: "Lola Bunny",
        password: "Sillyrabb1t",
        email: "Lolabunny@gmail.com",
      })
    );
  });

  test("delete users returns correct response", async () => {
    const response = await request(app).delete("/api/users/1");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        username: "Bugs Bunny",
        password: "Sillyrabb1t",
        email: "bugsbunny@gmail.com",
      })
    );
  });
});
