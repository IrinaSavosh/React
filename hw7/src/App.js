import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './styles/style.css';

const App = () => {
    return (
        <Provider store={store}>
            <TaskList />
            <TaskForm />
    
        </Provider>
    );
};

export default App;
