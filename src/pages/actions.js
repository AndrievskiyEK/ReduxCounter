import { 
    COUNTER_DECREMENT,
    COUNTER_INCREMENT,
    COUNTER_CLEAR,

    COUNTER_LOADING,
    COUNTER_LOADING_SUCCESS,
    COUNTER_LOADING_ERROR,

    COUNTER_SAVE_LOADING,
    COUNTER_SAVE_LOADING_SUCCESS,
    COUNTER_SAVE_LOADING_ERROR


} from "./constants";

import { API } from "./api";

export const load = () => {
    return (dispatch) => {
        dispatch({
            type: COUNTER_LOADING
        })
        API.getCounter()
            .then(data => {
                dispatch({
                    type: COUNTER_LOADING_SUCCESS,
                    payload: data.counter
                })

            })
            .catch(() => {
                dispatch({
                    type: COUNTER_LOADING_ERROR
                })

            })
    }
}

export const save = (counter) => {
    return (dispatch) => {
        dispatch({
            type: COUNTER_SAVE_LOADING
        })
        API.saveCounter(counter)
            .then(() => {
                dispatch({
                    type: COUNTER_SAVE_LOADING_SUCCESS,                    
                })

            })
            .catch(() => {
                dispatch({
                    type: COUNTER_SAVE_LOADING_ERROR
                })

            })
    }
}

export const increment = () => {
    return {
        type: COUNTER_INCREMENT
    }
}

export const decrement = () => {
    return {
        type: COUNTER_DECREMENT
    }
}

export const clear = () => {
    return {
        type: COUNTER_CLEAR
    }
}