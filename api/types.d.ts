export interface Thread {
    author?: string;
    image?: string;
    message: string;
    id: string;
}

export type ThreadWithoutId = Omit<Thread, 'id'>; 