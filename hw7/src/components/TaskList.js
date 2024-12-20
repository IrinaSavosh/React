import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../features/tasksSlice';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);
    const taskStatus = useSelector((state) => state.tasks.status);
    const error = useSelector((state) => state.tasks.error);

    useEffect(() => {
        if (taskStatus === 'idle') {
            dispatch(fetchTasks());
        }
    }, [taskStatus, dispatch]);

    return (
        <div>
            <h1>Список задач</h1>
            {taskStatus === 'loading' && <div>Загрузка...</div>}
            {taskStatus === 'failed' && <div>{error}</div>}
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} {task.completed ? '(Выполнено)' : '(Не выполнено)'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
