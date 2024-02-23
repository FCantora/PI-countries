/* eslint-disable react-refresh/only-export-components */
import { GET_COUNTRIES, FILTER, ORDER, SEARCH, ERROR, CLEAN_ALL } from "./actiontypes";
import axios from "axios";
const ENDPOINT = 'http://localhost:3001/countries/';

export const getCountries = (countries) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(ENDPOINT, countries);
            return dispatch({
                type: GET_COUNTRIES,
                payload: data,
            });
        } catch (error) {
            return dispatch({ type: ERROR, payload: error.message });
        }
    };
};

export const getDetail = (key) => {
    return async (dispatch) => { //* Se hace el llamado a la API.
        try {
            const { data } = await axios(`${ENDPOINT}${key}`);
            return dispatch({
                type: "GET_DETAIL",
                payload: data,
            });
        } catch (error) {
            alert(error.message);
        }
    };
}

export const postActivity = (activity) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(ENDPOINT, activity);
            return dispatch({
                type: "POST_ACTIVITY",
                payload: data,
            });
        } catch (error) {
            alert(error.message);
        }
    }
}

export const filter = (continent) => {
    return {
        type: FILTER,
        payload: continent,
    }
}

export const order = (orden) => {
    return {
        type: ORDER,
        payload: orden,
    }
}

export const search = (name) => {
    return {
        type: SEARCH,
        payload: name        
    }
}

export const cleanAll = () => {
    return {
        type: CLEAN_ALL
    }
}

export const error = (error) => {
    return {
        type: ERROR,
        payload: error,
    }
}