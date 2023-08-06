import { Request, Response} from 'express';
import { Member } from '../models/Member.ts';
import { Room } from '../models/Room.ts';
import { Task } from '../models/Task.ts';

export const addMemberToRoom = async(req: Request, res: Response):Promise<any> => {
 const { id } = req.body;
 try {
  const member: typeof Member | null = await Member.findOne({ _id: id });

  if(!member) {
   return res.status(400).json({ error: "Member not found" });
  }

  const room = await Room.findOne({ _id: req.params.id });

  if(!room) {
   return res.status(400).json({ error: "Room not found" });
  }
 } catch(err) {
  return res.status(400).json({ err, message: "Please log in to Keikaku first" });
 }
}

export const addTaskToAMember = async (req: Request, res: Response): Promise<any> => {
 const { task_name, task_desc, task_status } = req.body;
 const { creatorID, id } = req.params;
 const { roomID } = req.query;

 try {
   const member: Member | null = await Member.findOne({ _id: id });

   if (!member) {
     return res.status(400).json({ message: "Member not found" });
   }

   const room: Room | null = await Room.findById(roomID);

   if (!room) {
     return res.status(400).json({ message: "Room not found!" });
   }
   
   if (member._id !== room.member_id) {
     return res.status(400).json({ message: "Member is not in the room. Please add." });
   }

   const newTask: Task | any = new Task({
     task_creator: creatorID,
     member_id: member._id,
     room_id: room._id,
     task_name,
     task_description: task_desc,
     task_status,
   });

   await newTask.save();

   return res.status(200).json({ newTask, message: "New task successfully added" });
 } catch (err) {
   console.error(err); 
   return res.status(500).json({ message: "Internal Server Error" });
 }
};