import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import scheduleRoutes from "./routes/scheduleRoutes.js";
// import childRoutes from "./routes/childRoutes.js";

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

app.get("/schedules", scheduleRoutes);

// app.use("/children", childRoutes);

// connect to db
mongoose
  .connect(process.env.MONG_URI)
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

// async function dropCollection() {
//   try {
//     await mongoose.connection.db.dropCollection("scheduleData");
//     console.log("Collection dropped successfully.");
//   } catch (error) {
//     console.error("Error dropping collection:", error);
//   } finally {
//     mongoose.connection.close();
//   }
// }
