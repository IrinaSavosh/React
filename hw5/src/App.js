import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ThemeSwitcher from './components/ThemeSwitcher';
import './style.css';

const App = () => {
    return (
        <Provider store={store}>
            <div className="app-container">
                <ThemeSwitcher />
            </div>
        </Provider>
    );
};

export default App;
