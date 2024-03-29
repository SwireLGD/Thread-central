import express from "express";
import threadsRouter from "./routers/threads";
import fileDb from "./fileDb";
import cors from 'cors';

const app = express();
const port = 8000;

app.use(express.json());

app.use(cors());
app.use('/', threadsRouter);

const run = async () => {
    await fileDb.init();

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`); 
    });
};

void run();