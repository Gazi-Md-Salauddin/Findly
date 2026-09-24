import 'dotenv/config';
import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGODB_URI

if (!mongoUri){
    throw new Error("MONGODB_URI is not defined");
}
const client = new MongoClient(mongoUri);

export const connectDB = async () => {
    await client.connect();

    console.log("MongoDB connected");
};

export const db = client.db("findly");