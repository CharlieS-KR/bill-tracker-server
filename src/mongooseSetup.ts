import mongoose from 'mongoose';
import Bill from './bill'
require('dotenv').config()

const dbLocation = process.env.DATABASE_URL as string

const connectDb = () => {
  return mongoose.connect(dbLocation, { useNewUrlParser: true, useUnifiedTopology: true });
};
const models = { Bill };

export { connectDb };
export default models;