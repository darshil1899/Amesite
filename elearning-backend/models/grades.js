const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../database");

const grades = sequelize.define(
  "grades",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    assessment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    grade: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    // Add this option to prevent Sequelize from looking for createdAt and updatedAt fields
    timestamps: false,
  }
);

module.exports = grades;
