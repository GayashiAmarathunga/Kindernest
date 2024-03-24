import mongoose from "mongoose";

// const scheduleSchema = new mongoose.Schema({
//   date: String,
//   events: [String],
// });

const scheduleEventSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: [true, "please enter date"],
    },
    events: {
      type: [String],
      required: [true, "Please enter events list"],
    },
  },
  {
    timestamps: true,
  }
);

const ScheduleEvent = mongoose.model("ScheduleEvent", scheduleEventSchema);

export default ScheduleEvent;
