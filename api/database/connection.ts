import mongoose, { ConnectOptions } from 'mongoose';

interface IConnectOptions extends ConnectOptions {
 useNewUrlParser: boolean,
 useUnifiedTopology: boolean,
}

export const connection: Function = async (): Promise<void> => {
 try {
  mongoose.connect(process.env.MONGO_URI!, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
  } as IConnectOptions).then(() => {
   console.log('Connected to the database!');
  })
 } catch(err: any) {
  console.log(err)
 }
}