const { Sequelize } = require("sequelize");

// Replace 'database', 'username', 'password', and 'localhost' with your PostgreSQL credentials
const sequelize = new Sequelize("postgres", "postgres", "Sanju@123", {
  host: "localhost",
  dialect: "postgres",
  logging: true,
});

module.exports = sequelize;
