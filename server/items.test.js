const request = require("supertest");
const app = require("./app");
const Item = require("./models/Item");
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
});
