import { createAsyncThunk } from "@reduxjs/toolkit";
import { Thread, ThreadMutation } from "../../types";
import axiosApi from "../../axiosApi";

export const fetchThreads = createAsyncThunk<Thread[]>(
    'threads/fetchAll',
    async () => {
        const threadsResponse = await axiosApi.get<Thread[]>('/threads');
        return threadsResponse.data;
    }
);

export const createThread = createAsyncThunk<Thread, ThreadMutation>(
    'threads/create',
    async (threadMutation) => {
        const response = await axiosApi.post<Thread>('/threads', threadMutation);
        return response.data;
    }
);