import ScheduleEventsModel from "../models/scheduleEventsModel.js";

export const getSchedules = async (req, res) => {
  console.log("getSchedules function called");
  try {
    // Retrieve all documents from the collection
    const scheduleData = await ScheduleModel.find();
    res.json(scheduleData);
  } catch (error) {
    console.error("Error fetching schedule data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
