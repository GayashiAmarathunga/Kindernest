import mongoose from "mongoose";

// const scheduleSchema = new mongoose.Schema({
//   date: String,
//   events: [String],
// });

const scheduleEventsSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: [true, "please enter date"],
    },
    events: {
      type: String,
      required: [true, "Please enter events list"],
    },
  },
  {
    timestamps: true,
  }
);

const ScheduleEvents = mongoose.model("ScheduleEvents", scheduleEventsSchema);

export default ScheduleEvents;
