import express, { IRouter } from "express";

import { signup, login, getCreds } from "../controllers/authFuns.ts";
const router: IRouter = express.Router();

router.get('/:id', getCreds);
router.post('/signup', signup);
router.post('/login', login);

export { router as authRoute }