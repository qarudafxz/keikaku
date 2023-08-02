import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

import { connection } from './database/connection.ts';

dotenv.config();

const app: Express = express();

//middlewares
app.use(express.json());
app.use(cors({
 origin: "*",
 methods: ["POST", "PUT", "GET", "DELETE"],
 allowedHeaders: ["Content-Type", "Authorization"],
 credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'))
app.disable('x-powered-by');

//routes



try {
 connection()
} catch(err: any) {
  console.log(err);
}


export default app;