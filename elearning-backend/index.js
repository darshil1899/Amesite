const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000; // Choose a suitable port

const gradeRoutes = require("./routes/grades");

app.use(bodyParser.json());
app.use(cors());

// Use the grades routes
app.use("/api/grades", gradeRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
