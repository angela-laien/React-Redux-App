import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_GHIBLI = 'UPDATE_GHIBLI';
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get("https://ghibliapi.herokuapp.com/films")
        .then(res => {
            console.log(res);
            dispatch({type: UPDATE_GHIBLI, payload: res.data})
        })
        .catch(err => {
            console.error("error fetching data from ghibli API, err:", err);
            dispatch({type: SET_ERROR, payload: "Error fetching data from api"});
        });
};