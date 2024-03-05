const { Sequelize } = require("sequelize");
const { db } = require("../db");
const Item = require("./Item");

module.exports = {
  db,
  Item,
};
