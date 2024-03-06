const { Sequelize } = require("sequelize");
const { db } = require("../db");
const Item = require("./Item");
const User = require("./User");

module.exports = {
  db,
  Item,
  User,
};
