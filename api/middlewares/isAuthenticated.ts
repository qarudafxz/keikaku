import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { Member } from '../models/Member.ts';

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction): Promise<any> => {

 const { authorization } = req.headers;

 if (!authorization) {
  return res.status(401).json({ error: "You must log in first to Keikaku!" });
 }

 const token: string = authorization.replace("Bearer ", "");

 jwt.verify(token, process.env.JWT_SECRET, (err: Error, payload: any) => {
  if (err) {
   return res.status(401).json({ error: "You must log in first to Keikaku!" });
  }

  const { _id: number } = payload;

  Member.findOne({ _id: number }).then((userData: any) => {
   next();
  })
 })

}