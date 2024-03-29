export interface Thread {
    id: string;
    author: string;
    message: string;
    image?: string;
}

export interface ThreadMutation {
    author: string;
    message: string;
    image: string;
}