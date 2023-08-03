import mongoose from 'mongoose';

const collectionName: string = "rooms";

const roomSchema: mongoose.Schema = new mongoose.Schema({
  name: { type: String, required: true },
  room_creator: { type: String, required: true },
  member_id: { type: mongoose.Schema.ObjectId, ref:"member", required: true },
  room_name: { type: String, required: true },
  room_description: { type: String, required: true },
});

export const Room = mongoose.model(collectionName, roomSchema);