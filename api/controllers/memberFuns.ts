import { Request, Response} from 'express';
import { Member } from '../models/Member.ts';
import { Room } from '../models/Room.ts';

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