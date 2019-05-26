import {PLUS_ONE, MINUS_ONE, RESET_STATE, FETCH_STATE} from '../actions/counterTypes';

const initialState = {count: 0};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLUS_ONE:
            return {count: action.count};
        case MINUS_ONE:
            return {count: action.count};
        case RESET_STATE:
            return {count: action.count};
        case FETCH_STATE:
            return {count: action.count};
        default:
            return state;
    }
};