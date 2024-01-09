import React, { useReducer } from "react";

import ProcessContext from "./ProcessContext";
import ProcessReducer from "./ProcessReducer";

import { multipleThree, primeNumber } from "../../utils/Process";

import {
    PRIME_NUMBER,
    MULTIPLE_THREE
} from "./EventTypes";

const ProcessState = (props) => {
    const initialState = {
        umpteenth: 0,
        primeNumber: [],
        multipleThree: []
    };

    const [state, dispatch] = useReducer(ProcessReducer, initialState);

    const getPrimeNumber = async (n) => {
        let data = primeNumber(n)
        dispatch({ type: PRIME_NUMBER, payload: data });

    };

    const getMultipleThree = async (n) => {
        let result=multipleThree(n)
        dispatch({ type: MULTIPLE_THREE, payload: result });
    };

    return (
        <ProcessContext.Provider
            value={{
                umpteenth: state.umpteenth,
                primeNumber: state.primeNumber,
                multipleThree: state.multipleThree,
                getPrimeNumber,
                getMultipleThree,
            }}
        >
            {props.children}
        </ProcessContext.Provider>
    );
};

export default ProcessState;
