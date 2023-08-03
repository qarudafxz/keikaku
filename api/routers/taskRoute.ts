import express, { IRouter } from 'express';
// import { isAuthenticated } from '../middlewares/isAuthenticated.ts';

const router: IRouter = express.Router();

// router.post('/add-member/:id', isAuthenticated, );
export { router as taskRoute };