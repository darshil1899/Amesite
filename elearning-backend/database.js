const { Sequelize } = require("sequelize");

// Replace 'database', 'username', 'password', and 'localhost' with your PostgreSQL credentials
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
