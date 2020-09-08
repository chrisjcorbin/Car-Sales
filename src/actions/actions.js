export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (input) => {
    return {
        type: ADD_FEATURE,
        payload: input
    }
}

export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeFeature = (input) => {
    return {
        type: REMOVE_FEATURE,
        payload: input
    }
}