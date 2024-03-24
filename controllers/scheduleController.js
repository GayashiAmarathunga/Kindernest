import ScheduleEvent from "../models/scheduleEventModel.js";

// get all schedule events
export const getSchedules = async (req, res) => {
  try {
    const scheduleEvents = await ScheduleEvent.find({});
    res.status(200).json(scheduleEvents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get a schedule event by id
export const getScheduleById = async (req, res) => {
  try {
    const { id } = req.params;
    const scheduleEvent = await ScheduleEvent.findById(id);
    res.status(200).json(scheduleEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add a schedule event
export const addSchedule = async (req, res) => {
  try {
    const scheduleEvent = await ScheduleEvent.create(req.body);
    res.status(200).json(scheduleEvent);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// update schedule event
export const updateSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const scheduleEvent = await ScheduleEvent.findByIdAndUpdate(id, req.body);
    if (!scheduleEvent) {
      return res
        .status(404)
        .json({ message: `cannot find any product with id ${id}` });
    }
    const updatedScheduleEvent = await ScheduleEvent.findById(id);
    res.status(200).json(updatedScheduleEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete schedule event
export const deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, events } = await ScheduleEvent.findById(id);

    const scheduleEvent = await ScheduleEvent.findByIdAndDelete(id);
    if (!scheduleEvent) {
      res
        .status(400)
        .json({ message: `cannot find any product with id ${id}` });
    }

    res.status(200).json(`deleted event ${events} at ${date}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
