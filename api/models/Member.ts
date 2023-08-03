import mongoose from 'mongoose';

const collectionName: string = "member";

const MemberSchema: any = new mongoose.Schema({
 name: { type: String, required: true },
 email: { type: String, required: true, unique: true },
 password: { type: String, required: true },
});

export const Member = mongoose.model(collectionName, MemberSchema);