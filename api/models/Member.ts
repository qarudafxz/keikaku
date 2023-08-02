import mongoose from 'mongoose';

const collectionName: string = "member";

const MemberSchema: any = new mongoose.Schema({
 name: { type: String, required: true },
 email: { type: String, required: true, unique: true },
 password: { type: String, required: true },
 rooms: [
  {
   roomID: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
   roomName: { type: String, required: true }
  }
 ],
 tasks: [
  {
   taskID: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
   roomID: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
   taskName: { type: String, required: true },
   taskDescription: { type: String, required: true },
   taskStatus: { type: String, required: true },
   taskPriority: { type: String, required: true },
   taskDeadline: { type: Date, required: true },
   taskAssignee: { type: String, required: true },
   taskAssigneeID: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
  }
 ]
});

export const Member = mongoose.model(collectionName, MemberSchema);