import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../actions/themeActions';

const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(state => state.isDarkTheme);

    useEffect(() => {
        document.body.className = isDarkTheme ? 'dark' : 'light';
    }, [isDarkTheme]);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <div className="theme-container">
            <h1>{isDarkTheme ? 'Темная тема' : 'Светлая тема'}</h1>
            <button className={`theme-button ${isDarkTheme ? 'dark' : 'light'}`} onClick={handleToggle}>
                Переключить тему
            </button>
        </div>
    );
};

export default ThemeSwitcher;
