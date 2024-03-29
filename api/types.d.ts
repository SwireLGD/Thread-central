export interface Thread {
    author?: string;
    image?: string;
    message: string;
}

export type ThreadWithoutId = Omit<Thread, 'id'>; 