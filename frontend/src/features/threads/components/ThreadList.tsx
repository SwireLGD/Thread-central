import { useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';
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
        <Grid container spacing={2} sx={{ mt: 2 }}>
            {threads.map((thread) => (
                <Grid item key={thread.id} xs={12} sm={6} md={3}> 
                    <Card sx={{ minWidth: 345 }}>
                        {thread.image && (
                            <CardMedia
                                component="img"
                                height="200"
                                image={thread.image}
                                alt="Thread image"
                            />
                        )}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {thread.author || 'Anonymous'}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {thread.message}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ThreadsList;