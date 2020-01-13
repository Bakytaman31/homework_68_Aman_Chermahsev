import {FETCH_TODO_REQUEST, FETCH_TODO_ERROR, FETCH_TODO_SUCCESS, INPUT_HANDLER} from "./actions";

const initialState = {
    list: [],
    text: '',
};

const todoCheck = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODO_SUCCESS:
            return {...state, list: action.success};
        case FETCH_TODO_ERROR:
            return {...state, list: 'Something went wrong'};
        case FETCH_TODO_REQUEST:
            return {...state, list: state.list};
        case INPUT_HANDLER:
            return {...state, text: action.text};
        default:
            return {...state, list: state.list};
    }
};

export default todoCheck;