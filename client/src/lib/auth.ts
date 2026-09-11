import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri){
    throw new Error("MONGODB_URI is not defined");
}

const client = new MongoClient(mongoUri);
const db = client.db("findly");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),

    emailAndPassword: { 
    enabled: true, 
  },
});