import express from 'express';
import fileDb from '../fileDb';

const threadsRouter = express.Router();

threadsRouter.get('/', async (req, res) => {
    const threads = await fileDb.getItems();
    return res.send(threads);
});

threadsRouter.post('/', async (req, res) => {
    const { author = 'Anonymous', message, image } = req.body;

    if (!message) {
        return res.status(400).json({"error": "Message must be present in the request"});
    }

    const threadData = {
        author: req.body.author,
        message: req.body.message,
        image: req.body.image,
    };

    const savedThreads = await fileDb.addItem(threadData);

    return res.json(savedThreads);
});

export default threadsRouter;