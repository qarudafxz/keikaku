import express, { IRouter } from "express";

import { signup } from "../controllers/authFuns.ts";
const router: IRouter = express.Router();

router.post('/signup', signup);

export { router as authRoute }