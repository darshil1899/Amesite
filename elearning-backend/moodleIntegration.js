const axios = require("axios");
const Grade = require("../models/grades"); // Import the Grade model
const grades = require("./models/grades");

const moodleBaseUrl = "https://your-moodle-site-url"; // Replace with your Moodle site URL

// Function to push grade data to Moodle using Moodle's REST API
async function pushGradeToMoodle(learnerId, assessmentId, grade) {
  try {
    const token = "your-moodle-rest-api-token"; // Replace with your Moodle REST API token
    const courseId = 1; // Replace with the ID of the Moodle course where grades will be pushed

    const data = {
      wstoken: token,
      wsfunction: "mod_assign_save_grade",
      moodlewsrestformat: "json",
      assignmentid: assessmentId,
      userid: learnerId,
      grade: grade,
    };

    // Make a POST request to the Moodle API
    const response = await axios.post(
      `${moodleBaseUrl}/webservice/rest/server.php`,
      data
    );

    // Assuming the grade is successfully pushed to Moodle, also save it in your PostgreSQL database
    const savedGrade = await grades.create({
      user_id: learnerId,
      assessment_id: assessmentId,
      grade: grade,
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to push grade data to Moodle");
  }
}

module.exports = {
  pushGradeToMoodle,
};
