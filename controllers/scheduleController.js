import ScheduleEvent from "../models/scheduleEventModel.js";

export const getSchedules = async (req, res) => {
  try {
    const scheduleEvents = await ScheduleEvent.find({});
    res.status(200).json(scheduleEvents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getScheduleById = async (req, res) => {
  try {
    const { id } = req.params;
    const scheduleEvents = await ScheduleEvent.findById(id);
    res.status(200).json(scheduleEvents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addSchedule = async (req, res) => {
  try {
    const scheduleEvent = await ScheduleEvent.create(req.body);
    res.status(200).json(scheduleEvent);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
