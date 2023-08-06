const express = require("express");
const router = express.Router();
const Grade = require("../models/grades");
const gradesController = require("../controllers/gradesController");
const axios = require("axios");

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

    // Push the grade data to Moodle using Moodle's REST API
    const moodleBaseUrl = "https://your-moodle-domain.com"; // Replace with your Moodle domain
    const moodleApiToken = "d7da8ce3e3fe295932e501f1fcde30fa"; // Replace with your Moodle API token
    const moodleApiUrl = `${moodleBaseUrl}/webservice/rest/server.php`;
    const moodleCourseId = 1; // Replace with the Moodle course ID where you want to record grades

    // Modify this payload according to the Moodle REST API documentation
    const moodlePayload = {
      wstoken: moodleApiToken,
      moodlewsrestformat: "json",
      wsfunction: "Amesite",
      courseid: moodleCourseId,
      userid: user_id,
      assessmentid: assessment_id,
      grade: grade,
    };

    // Make a POST request to the Moodle API to add the grade
    const response = await axios.post(moodleApiUrl, moodlePayload);
    console.log("Moodle API response:", response);

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
