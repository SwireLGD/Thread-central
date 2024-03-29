import { useAppDispatch } from "../../app/hooks";
import { ThreadMutation } from "../../types";
import ThreadForm from "./components/ThreadForm";
import ThreadsList from "./components/ThreadList"
import { createThread } from "./threadsThunks";

const Threads = () => {
    const dispatch = useAppDispatch();

    const onFormSubmit = async (threadMutation: ThreadMutation) => {
        await dispatch(createThread(threadMutation));
    }
    
    return (
        <>
            <ThreadForm onSubmit={onFormSubmit} />
            <ThreadsList />
        </>
    );
};

export default Threads;