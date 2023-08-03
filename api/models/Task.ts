import mongoose from 'mongoose';

const collectionName: string = "tasks";

const taskSchema: mongoose.Schema = new mongoose.Schema({
  task_creator: { type: String, required: true },
  member_id: { type: mongoose.Schema.ObjectId, ref:"member", required: true },
  room_id: { type: mongoose.Schema.ObjectId, ref:"room", required: true },
  task_name: { type: String, required: true },
  task_description: { type: String, required: true },
  task_status: { type: Boolean, required: true },
});

export const Task = mongoose.model(collectionName, taskSchema);