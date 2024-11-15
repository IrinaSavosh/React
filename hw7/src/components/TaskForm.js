import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice'; 
import '../styles/style.css'; 

const TaskForm = () => {
    const [taskName, setTaskName] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (taskName.trim()) { // Проверrка на пустоту
            const newTask = { 
                title: taskName, 
                id: Date.now(), 
                completed: false 
            };

                   dispatch(addTask(newTask));
            setTaskName('');
        }
    };

    return (
        <div className="task-form">
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Введите название задачи"
                className="task-input"
            />
            <button onClick={handleAddTask} className="add-task-button">
                Добавить задачу
            </button>
        </div>
    );
};

export default TaskForm;
