import {PLUS_ONE, MINUS_ONE, RESET_STATE, FETCH_STATE} from './counterTypes';
import axios from "axios";

export const plusOneSuccess = (count) => ({type: PLUS_ONE, count: count});
export const minusOneSuccess = (count) => ({type: MINUS_ONE, count: count});
export const resetStateSuccess = (count) => ({type: RESET_STATE, count: count});
export const fetchStateSuccess = (count) => ({type: FETCH_STATE, count: count});

export function plusOne() {
    return dispatch => {
        return axios.get('http://localhost:8080/plus')
            .then(response => {
                console.log(response.data);
                dispatch(plusOneSuccess(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
}

export function minusOne() {
    return dispatch => {
        return axios.get('http://localhost:8080/minus')
            .then(response => {
                dispatch(minusOneSuccess(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
}

export function resetState() {
    return dispatch => {
        return axios.get('http://localhost:8080/reset')
            .then(response => {
                dispatch(resetStateSuccess(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
}

export function fetchState() {
    return dispatch => {
        return axios.get('http://localhost:8080/')
            .then(response => {
                dispatch(fetchStateSuccess(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
}