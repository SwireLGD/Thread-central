import express from "express";
import threadsRouter from "./routers/threads";

const app = express();
const port = 8000;

app.use(express.json());

app.use('/threads', threadsRouter);

const run = async () => {
    await fileDb.init();

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`); 
    });
};

void run();