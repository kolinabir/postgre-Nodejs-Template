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
    results: results.rows.length,
    data: results.rows,
  });
});

app.get("/api/v1/restaurants/:id", async (req, res) => {
  const query = await db.query("SELECT * FROM restaurants WHERE id = $1", [
    req.params.id,
  ]);
  if (query.rows.length === 0) {
    return res.status(404).json({
      status: "fail",
      message: "Not found",
    });
  }
  res.status(200).json({
    status: "success",
    data: query.rows[0],
  });
});

app.post("/api/v1/restaurants", async (req, res) => {
  const query = await db.query(
    "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *",
    [req.body.name, req.body.location, req.body.price_range]
  );
  res.status(201).json({
    status: "success",
    data: query.rows[0],
  });
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
