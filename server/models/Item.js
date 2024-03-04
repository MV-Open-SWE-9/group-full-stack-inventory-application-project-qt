const { db } = require("../db");
const { Sequelize } = require("sequelize");

const Item = db.define("item", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = Item;
