import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Member } from '../models/Member.ts';

// utilizing the JwtPayload by interfacing it with a new TokenPayload interface
interface TokenPayload extends JwtPayload {
  _id: string;
}

interface RequestWithMember extends Request {
  member: Member;
}

export const isAuthenticated = async (req: RequestWithMember, res: Response, next: NextFunction): Promise<any> => {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      return res.status(401).json({ error: "You must log in first to Keikaku!" });
    }

    const token: string = authorization.replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;

    const { _id } = decoded;

    await Member.findOne({ _id }, (err: any, member: Member) => {
      if (err || !member) {
        return res.status(400).json({ err, message: "Please log in to Keikaku first" });
      }

      req.member = member;
    });

    next();
  } catch (err) {
    return res.status(400).json({ err, message: "Please log in to Keikaku first" });
  }
};
