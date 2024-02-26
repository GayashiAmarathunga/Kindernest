import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql2";

import childRoutes from "./routes/childRoutes.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
  res.send("server running");
});

app.use("/children", childRoutes);

app.listen(PORT, () =>
  console.log(`server running on port: http://localhost:${PORT}`)
);
