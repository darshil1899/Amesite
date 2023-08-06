const express = require("express");
const router = express.Router();
const Grade = require("../models/grades");
const gradesController = require("../controllers/gradesController");

// Route to store the learner's grade data
router.post("/store-grade", async (req, res) => {
  try {
    // Assuming you receive the learner's ID, assessment ID, and grade in the request body
    const { user_id, assessment_id, grade } = req.body;

    // Store the grade data in the PostgreSQL database
    const savedGrade = await Grade.create({
      user_id: user_id,
      assessment_id: assessment_id,
      grade: grade,
    });

    // Respond with the saved grade data (optional)
    res.status(201).json(savedGrade);
  } catch (error) {
    res.status(500).json({ error: "Failed to store grade data." });
  }
});

// Route to get all grades for a specific learner
router.get("/get-grades/:learnerId", async (req, res) => {
  try {
    const learnerId = req.params.learnerId;
    const grades = await Grade.findAll({ where: { user_id: learnerId } });

    // Respond with the grades data (optional)
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve grades." });
  }
});

module.exports = router;
