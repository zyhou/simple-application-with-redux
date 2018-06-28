import { LOAD_TALKS, LOAD_TALKS_ERROR, LOAD_TALKS_SUCCESS } from './actions';
import { LOGOUT } from '../authentication/actions';

export const defaultState = {
    data: null,
    loading: false,
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_TALKS:
            return {
                ...state,
                loading: true,
            };
        case LOAD_TALKS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case LOAD_TALKS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case LOGOUT:
            return defaultState;
        default:
            return state;
    }
};

export const hasData = ({ talks }) => !!talks.data;

export const getData = ({ talks }) => talks.data;

export const isLoading = ({ talks }) => talks.loading;
