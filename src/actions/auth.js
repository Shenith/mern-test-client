import * as api from '../api';
import {AUTH, SIGNIN, SIGNOUT} from '../constants/actionTypes';

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signin(formData);

        dispatch({ type: AUTH, payload: data });
        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData);

        dispatch({ type: AUTH, payload: data });
        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
}