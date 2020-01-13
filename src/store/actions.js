import axiosApp from "../axios-app";

export const FETCH_TODO_REQUEST = 'FETCH_TODO_REQUEST';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_ERROR = 'FETCH_TODO_ERROR';

export const INPUT_HANDLER = 'INPUT_HANDLER';

export const fetchTodoRequest = () => {
    return {type: FETCH_TODO_REQUEST};
};

export const fetchTodoSuccess = success => {
    return {type: FETCH_TODO_SUCCESS, success};
};

export const fetchTodoError = error => {
    return {type: FETCH_TODO_ERROR, error};
};

export const fetchTodoPost = text => {
    return dispatch => {
        dispatch(fetchTodoRequest());
        axiosApp.post('list.json', text);
        fetchTodo();
    }
};

export const fetchTodo = () => {
    return dispatch => {
        dispatch(fetchTodoRequest());
        axiosApp.get('list.json').then(response => {
            dispatch(fetchTodoSuccess(response.data))
        },error => {
            dispatch(fetchTodoError(error))
        })
    }
};

export const inputHandler = text => {
    return {type: INPUT_HANDLER, text}
};