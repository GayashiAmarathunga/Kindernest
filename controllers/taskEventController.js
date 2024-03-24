import TaskEvent from "../models/taskEventModel.js";

// get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const taskEvent = await TaskEvent.find({});
    res.status(200).json(taskEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get a task by id
export const getTaskbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const taskEvent = await TaskEvent.findById(id);
    res.status(200).json(taskEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add a task
// this has 2 properties according to the model, the date and list of String tasks
export const addTask = async (req, res) => {
  try {
    const taskEvent = await TaskEvent.create(req.body);
    res.status(200).json(taskEvent);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// update a task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskEvent = await TaskEvent.findByIdAndUpdate(id, req.body);
    if (!taskEvent) {
      return res
        .status(404)
        .json({ message: `cannot find any product with id ${id}` });
    }
    const updatedTaskEvent = await TaskEvent.findById(id);
    res.status(200).json(updatedTaskEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete a task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, tasks } = await TaskEvent.findById(id);

    const taskEvent = await TaskEvent.findByIdAndDelete(id);
    if (!taskEvent) {
      res
        .status(400)
        .json({ message: `cannot find any product with id ${id}` });
    }

    res.status(200).json(`deleted event '${tasks}' at ${date}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
