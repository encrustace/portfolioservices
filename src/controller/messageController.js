import { Router } from 'express';
import { getMessages, sendMessage } from '../services/messageServices.js';


const messageRouter = Router();

// Get all messages
messageRouter.get('/getMessages', async (req, res) => {
    try {
        const messages = await getMessages();
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Send a new message
messageRouter.post('/sendMessage', async (req, res) => {
    const { email, message, mobile } = req.body;
    const entry = {
        email: email,
        mobile: mobile,
        message: message,
        timestamp: new Date(),
    };

    try {
        await sendMessage(entry);
        res.status(202).json({ message: 'Message sent successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default messageRouter;
