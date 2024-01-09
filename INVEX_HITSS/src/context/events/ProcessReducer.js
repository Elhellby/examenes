import {
    PRIME_NUMBER,
    MULTIPLE_THREE
} from "./EventTypes";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case PRIME_NUMBER:
            return {
                ...state,
                primeNumber: payload,
            };
        case MULTIPLE_THREE:
            return {
                ...state,
                multipleThree: payload,
            };
        default:
            return state;
    }
};
