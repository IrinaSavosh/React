import { TOGGLE_THEME } from '../actions/themeActions';

const initialState = {
    isDarkTheme: false // false - светлая тема, true - темная
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                isDarkTheme: !state.isDarkTheme
            };
        default:
            return state;
    }
};

export default themeReducer;
