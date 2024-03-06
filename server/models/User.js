const { db } = require("../db");
const { Sequelize } = require("sequelize");

const User = db.define("user", {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = User;
