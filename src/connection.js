import { MongoClient } from 'mongodb';
import config from './config.js';

let db;

export async function connect() {
  const client = new MongoClient(config.mongourl);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');

    // Select the database
    db = client.db('portfolio');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
}

function getDB() {
  if (!db) {
    throw new Error('Database connection not established');
  }
  return db;
}

export default getDB;
