const Grade = require("../models/grades");
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

exports.storeGrade = async (req, res) => {
  const { user_id, assessment_id, grade } = req.body;

  try {
    // Check if required fields are present
    if (!user_id || !assessment_id || !grade) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newGrade = await Grade.create({
      user_id: user_id,
      assessment_id: assessment_id,
      grade: grade,
    });

    console.log("Grade data stored in the database:", newGrade);
    res.status(200).json({ message: "Grade data stored in the database" });
  } catch (error) {
    console.error("Error storing grade data:", error.message);
    if (error.name === "SequelizeValidationError") {
      return res.status(400).json({ error: "Validation error" });
    }
    res
      .status(500)
      .json({ error: "Failed to store grade data in the database" });
  }
};
