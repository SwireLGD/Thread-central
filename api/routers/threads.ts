import express from 'express';
import fileDb from '../fileDb';
import { ThreadWithoutId } from '../types';

const threadsRouter = express.Router();

threadsRouter.get('/threads', async (req, res) => {
    const threads = await fileDb.getItems();
    return res.send(threads);
});

threadsRouter.post('/threads', async (req, res) => {
    let { author, message, image } = req.body;

    if (!message) {
        return res.status(400).json({"error": "Message must be present in the request"});
    }

    author = author?.trim() ? author.trim() : 'Anonymous';

    image = image?.trim() ? image.trim() : undefined;

    const threadData: ThreadWithoutId = {
        author,
        message,
        image,
    };

    const savedThreads = await fileDb.addItem(threadData);

    return res.json(savedThreads);
});

export default threadsRouter;