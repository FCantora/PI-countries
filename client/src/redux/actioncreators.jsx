/* eslint-disable react-refresh/only-export-components */
import { GET_COUNTRIES, FILTER, ORDER, SEARCH, ERROR, FILTER_ACTIVITIES, ORDER_ACTIVITIES, DELETE_ACTIVITY, CLEAN_DETAIL, CLEAN_ALL, CLEAN_ACTIVITY_FILTERS } from "./actiontypes";
import axios from "axios";
const ENDPOINT = 'http://localhost:3001';

export const getCountries = (countries) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${ENDPOINT}/countries`, countries);
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
            const { data } = await axios(`${ENDPOINT}/countries/${key}`);
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
            const formattedActivity = {
                ...activity,
                name: activity.name.charAt(0).toUpperCase() + activity.name.slice(1),
            };
            const { data } = await axios.post(`${ENDPOINT}/activities`, formattedActivity);
            console.log("esto es data ", data);

            return dispatch({
                type: "POST_ACTIVITY",
                payload: data,
            });
        } catch (error) {
            alert(error.message);
        }
    }
}

export const getActivities = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${ENDPOINT}/activities`);
            return dispatch({
                type: "GET_ACTIVITIES",
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

export const filterActivities = (activities) => {
    return {
        type: FILTER_ACTIVITIES,
        payload: activities,
    }
}

export const orderActivities = (orden) => {
    return {
        type: ORDER_ACTIVITIES,
        payload: orden,
    }
}

export const deleteActivity = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`${ENDPOINT}/activities/${id}`);
            dispatch({
                type: DELETE_ACTIVITY,
                payload: id
            })
        } catch (error) {
            alert(error.message);
        }
    }
}

export const search = (name) => {
    return {
        type: SEARCH,
        payload: name
    }
}

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL
    }
}

export const cleanAll = () => {
    return {
        type: CLEAN_ALL
    }
}

export const cleanActivityFilters = () => {
    return {
        type: CLEAN_ACTIVITY_FILTERS
    }
}

export const error = (error) => {
    return {
        type: ERROR,
        payload: error,
    }
}