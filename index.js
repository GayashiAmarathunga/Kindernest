import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql2";

const app = express();
const PORT = 5000;

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "db_name",
});

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
  res.send("server running");
});

app.get("/children", (req, res) => {
  pool.query("SELECT * FROM children", (err, results) => {
    if (err) {
      console.error("Error fetching children:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

app.get("/children/:id", (req, res) => {
  pool.query(
    "SELECT * FROM children WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        console.error("Error fetching child:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: "Child not found" });
        return;
      }
      res.json(results[0]);
    }
  );
});

app.post("/children", (req, res) => {
  const { name, age } = req.body;
  pool.query(
    "INSERT INTO children (name, age) VALUES (?, ?)",
    [name, age],
    (err, result) => {
      if (err) {
        console.error("Error creating child:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.status(201).json({ id: result.insertId, name, age });
    }
  );
});

app.delete("/children/:id", (req, res) => {
  pool.query(
    "DELETE FROM children WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) {
        console.error("Error deleting child:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.status(204).end();
    }
  );
});

app.listen(PORT, () =>
  console.log(`server running on port: http://localhost:${PORT}`)
);
