import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
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

//user login
export const login = async(req: Request, res: Response):Promise<any> => {
 const { email, password } = req.body as any;

 try {
  const member: any = await Member.findOne({ email });

  if(!member) {
   return res.status(400).json({ error: "Member not found" });
  }

  const isMatch: boolean = await bcrypt.compare(password, member?.password);

  if(!isMatch) {
   return res.status(400).json({ error: "Invalid credentials" });
  }

  const payload = {
   member: {
    id: member.id
   }
  }

  const token: string = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1d' });

  res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });

  res.status(200).json({ message: 'Logged in successfully' });
 } catch(err: Error | any) {
  return res.status(400).json({ err, message: "Something went wrong" });
 }
}

export const getCreds = async (req: Request, res: Response): Promise<any> => {
 const { id } = req.params;
 try {
  const member: Member | null = await Member.findById(id ?? req.params.id);

  if(!member) {
   return res.status(400).json({ message: "Member not found"})
  }

  return res.status(200).json({ member, message: "Member found"})
 } catch(err) {
  console.log(err);
  return res.status(500).json({ message: "Internal server error"})
 }
}
