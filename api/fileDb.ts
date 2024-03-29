import {promises as fs} from 'fs';
import { Thread, ThreadWithoutId } from './types';
import crypto from 'crypto';

const fileName = './db.json';
let data: Thread[] = [];

const fileDb = {
    async init() {
        try {
            const fileContents = await fs.readFile(fileName);
            data = JSON.parse(fileContents.toString());
        } catch (err) {
            data = [];
            console.error(err);
        }
    },
    async getItems() {
        return data;
    },
    async getItemById(id: string) {
        return data.find(thread => thread.id === id);
    },
    async addItem(item: ThreadWithoutId) {
        const thread = {
            id: crypto.randomUUID(),
            ...item
        }

        data.push(thread);
        await this.save();

        return thread;
    },
    async save() {
        await fs.writeFile(fileName, JSON.stringify(data, null, 2));
    }
};

export default fileDb;