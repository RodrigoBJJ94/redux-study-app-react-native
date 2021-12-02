import { MORE, LESS } from './actionTypes';

const initialState = {
    counter: 0,
    name: 'Rodrigo'
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case MORE:
            return { ...state, counter: state.counter + 1 };
        case LESS:
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    };
};
