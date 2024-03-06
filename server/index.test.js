const request = require("supertest");
const app = require("./app");
const { Item, User } = require("./models/index");
const seed = require("./seed");
const { items } = require("./seedData");

describe("Item Tests", () => {
  beforeAll(async () => {
    await seed();
  });
  test("get items returns correct response", async () => {
    const response = await request(app).get("/api/items");
    expect(response.statusCode).toBe(200);
    expect(response.body[0]).toEqual(
      expect.objectContaining({
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      })
    );
    const items = await Item.findAll();
    expect(response.body.length).toBe(items.length);
  });

  test("get one item returns correct response", async () => {
    const response = await request(app).get("/api/items/1");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      })
    );
  });

  test("post items returns correct response", async () => {
    const response = await request(app).post("/api/items").send({
      name: "Quiktrip Big Q",
      price: 109.95,
      description: "Delicious",
      category: "drink",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        name: "Quiktrip Big Q",
        price: 109.95,
        description: "Delicious",
        category: "drink",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      })
    );
  });

  test("put items returns correct response", async () => {
    const response = await request(app).put("/api/items/4").send({
      name: "Quiktrip Big Q",
      price: 109.95,
      description: "Delicious",
      category: "drink",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        name: "Quiktrip Big Q",
        price: 109.95,
        description: "Delicious",
        category: "drink",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      })
    );
  });

  test("delete items returns correct response", async () => {
    const response = await request(app).delete("/api/items/1");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      })
    );
  });
});

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
