import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import scheduleRoutes from "./routes/scheduleRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
  res.send("server running");
});

// Schedules

// get all schedule events
app.get("/schedules", scheduleRoutes);

// get a event schedule by id
app.get("/schedules/:id", scheduleRoutes);

// add a schedule event
app.post("/schedules", scheduleRoutes);

// update a schedule event by id
app.put("/schedules/:id", scheduleRoutes);

// delete a schedule event by id
app.delete("/schedules/:id", scheduleRoutes);

// Tasks

app.get("/tasks", taskRoutes);

app.get("/tasks/:id", taskRoutes);

app.post("/tasks", taskRoutes);

app.put("/tasks/:id", taskRoutes);

app.delete("/tasks/:id", taskRoutes);

// connect to db
mongoose
  .connect(process.env.MONG_URI, { dbName: "KinderNest" })
  .then(() => {
    app.listen(PORT, () =>
      console.log(
        `connected to db and listening on port: http://localhost:${PORT}`
      )
    );
  })
  .catch((error) => {
    console.log(error);
  });
