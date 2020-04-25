import mongoose from 'mongoose';
import Bill from './bill'

const dbLocation = process.env.DATABASE_URL || 'mongodb://localhost:27017/bill-tracker'

const connectDb = () => {
  return mongoose.connect(dbLocation, { useNewUrlParser: true, useUnifiedTopology: true });
};
const models = { Bill };

export { connectDb };
export default models;