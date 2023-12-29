import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_CLEAR } from "./constants";

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