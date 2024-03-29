import React, { useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectThreads } from '../threadsSlice';
import { fetchThreads } from '../threadsThunks';

const ThreadsList = () => {
    const dispatch = useAppDispatch();
    const threads = useAppSelector(selectThreads);

    useEffect(() => {
        dispatch(fetchThreads());
    }, [dispatch]);

    return (
        <div>
        {threads.map((thread) => (
            <Card key={thread.id} sx={{ maxWidth: 345, mb: 2 }}>
                {thread.image && <CardMedia component="img" height="140" image={thread.image} alt="thread image" />}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {thread.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {thread.message}
                    </Typography>
                </CardContent>
            </Card>
        ))}
        </div>
    );
};

export default ThreadsList;