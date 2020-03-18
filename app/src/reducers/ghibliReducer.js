import { FETCH_DATA, UPDATE_GHIBLI, SET_ERROR } from '../actions/ghibliActions';

const initialState = {
    ghibli: [],
    isFetchingData: false,
    error: ''
};

export const ghibliReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                ghibli: []
            };
        case UPDATE_GHIBLI:
            return {
                ...state,
                ghibli: action.payload,
                isFetchingData: false
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        default:
            return state;
    }
}