const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Grade = sequelize.define("Grade", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  learnerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  assessmentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  grade: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Grade;
