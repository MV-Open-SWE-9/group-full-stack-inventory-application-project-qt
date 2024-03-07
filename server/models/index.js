const { Sequelize } = require("sequelize");
const { db } = require("../db");
const Item = require("./Item");
const User = require("./User");

User.belongsToMany(Item, { through: "cart" });
Item.belongsToMany(User, { through: "cart" });

module.exports = {
  db,
  Item,
  User,
};
