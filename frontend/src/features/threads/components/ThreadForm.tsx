import React, { useState } from 'react';
import { Button, CircularProgress, Grid, TextField } from '@mui/material';
import { ThreadMutation } from '../../../types';

interface Props {
  onSubmit: (mutation: ThreadMutation) => void;
  isLoading: boolean;
}

const ThreadForm: React.FC<Props> = ({onSubmit, isLoading }) => {
  const [state, setState] = useState<ThreadMutation>({
    author: '',
    message: '',
    image: ''
  });

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.message.trim()) {
      alert('Message cannot be empty.');
      return;
    }
    onSubmit(state);
    setState({ author: '', message: '', image: '' });
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };

  return (
    <form
      autoComplete="off"
      onSubmit={submitFormHandler}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <TextField
            id="author" label="author"
            value={state.author}
            onChange={inputChangeHandler}
            name="author"
          />
        </Grid>
        <Grid item xs>
          <TextField
            id="message" label="message"
            value={state.message}
            onChange={inputChangeHandler}
            name="message"
          />
        </Grid>
        <Grid item xs>
          <TextField
            multiline rows={3}
            id="image" label="image"
            value={state.image}
            onChange={inputChangeHandler}
            name="image"
          />
        </Grid>
        <Grid item xs>
        <Button type="submit" color="primary" variant="contained" disabled={isLoading}>
            {isLoading ? <CircularProgress size={24} /> : 'Create'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ThreadForm;