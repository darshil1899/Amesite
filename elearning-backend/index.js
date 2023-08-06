const express = require("express");
const gradesController = require("./controllers/gradesController");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const gradeRoutes = require("./routes/grades");

app.use(bodyParser.json());
app.use(cors());

// Use the grades routes
app.use("/api/grades", gradeRoutes);
app.post("/api/store-grade", gradesController.storeGrade);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
