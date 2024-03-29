import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ThreadMutation } from "../../types";
import ThreadForm from "./components/ThreadForm";
import ThreadsList from "./components/ThreadList"
import { selectThreadsCreating } from "./threadsSlice";
import { createThread } from "./threadsThunks";

const Threads = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(selectThreadsCreating);

    const onFormSubmit = async (threadMutation: ThreadMutation) => {
        await dispatch(createThread(threadMutation));
    }
    
    return (
        <>
            <ThreadForm onSubmit={onFormSubmit} isLoading={isLoading} />
            <ThreadsList />
        </>
    );
};

export default Threads;