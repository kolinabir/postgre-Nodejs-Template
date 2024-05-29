require("dotenv").config();
const db = require("./db/index");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get("/api/v1/restaurants", async (req, res) => {
  const results = await db.query("SELECT * FROM restaurants");
  console.log(results);
  res.status(200).json({
    status: "success",
    data: {
      restaurants: results.rows,
    },
  });
});

app.get("/api/v1/restaurants/:id", async (req, res) => {
  console.log(req.params);
});

app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);
});

app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);
  console.log(req.body);
});

app.delete("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);
});

app.listen(port, () => {
  console.log("🔥Server is running on port", port);
});
