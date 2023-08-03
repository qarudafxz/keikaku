import { Request, Response } from 'express';
// import uuid from 'uuid';
// import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { Member } from '../models/Member.ts';
//user signup
export const signup = async(req: Request, res: Response):Promise<any> => {
 const { name, email, password } = req.body as any;

 try {
  const member:typeof Member | null = await Member.findOne({ email });

  if(member) {
   return res.status(400).json({ error: "Email already exists" });
  }

  const bSalt: string = await bcrypt.genSalt(10);
  const hashedPassword: string = await bcrypt.hash(password, bSalt);

  const newMember = new Member({
   name,
   email,
   password: hashedPassword
  });

  await newMember.save();

  return res.status(200).json({ newMember, message: "Member created successfully" });
 } catch(err) {
  return res.status(400).json({ err, message: "Something went wrong" });
 }
}