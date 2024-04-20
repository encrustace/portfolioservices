import getDB from "../connection.js";

export async function getMessages() {
    try {
        const db = getDB();
        const messages = await db.collection('messages').find().toArray();
        return messages;
    } catch (err) {
        console.error('Error fetching messages:', err);
        throw err;
    }
}

export async function sendMessage({ email, mobile = '', message, timestamp }) {
    try {
        const db = getDB();
        // Perform schema validation here if necessary
        if (!email || !message) {
            throw new Error('Email and message are required');
        }
        const newMessage = {
            email,
            mobile,
            message,
            timestamp
        };

        await db.collection('messages').insertOne(newMessage);
        console.log('Message saved:', newMessage);
    } catch (err) {
        console.error('Error saving message:', err);
        throw err;
    }
}
