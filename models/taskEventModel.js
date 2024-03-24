import mongoose from "mongoose";

const taskEventSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: [true, "please enter task date"],
    },
    tasks: {
      type: [String],
      required: [true, "please enter task"],
    },
  },
  {
    timestamps: true,
  }
);

const TaskEvent = mongoose.model("TaskEvent", taskEventSchema);

export default TaskEvent;
